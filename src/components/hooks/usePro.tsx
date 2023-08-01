import { isPlatform } from "@ionic/react";
import { useState, useEffect } from "react";
import "cordova-plugin-purchase";
import { setInterval, clearInterval } from "timers-browserify";

export const usePro = () => {
  const [price, setPrice] = useState("");
  const [owned, setOwned] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [hasOrder, setHasOrder] = useState(false);

  useEffect(() => {
    const donateProduct = {
      id: "000donate",
      type: CdvPurchase.ProductType.NON_CONSUMABLE,
      platform: CdvPurchase.Platform.GOOGLE_PLAY,
    };

    const checkOwned = (transaction: CdvPurchase.Transaction) => {
      if (CdvPurchase.store.owned("000donate") && transaction.purchaseId) {
        setOwned(true);
        setHasOrder(false);
        transaction.finish();

        // For testing consume any found purchases
        // console.log("consume");
        // new CdvPurchase.GooglePlay.Bridge.Bridge().consumePurchase(
        //   () => {
        //     setDonated(false);
        //   },
        //   (message, code) => {
        //     console.log("fail", message, code);
        //   },
        //   transaction.purchaseId
        // );
      }
    };

    const checkIfOrderInProgress = (receipt: CdvPurchase.Receipt) => {
      receipt.transactions.forEach((transaction) => {
        transaction.products.forEach((product) => {
          if (product.id === "000donate" && transaction.isPending) {
            console.log("000donate: transaction.isPending");
            setHasOrder(true);
            setIsOrdering(true);
          }
        });
      });
    };

    const updatePrice = () => {
      const offer = CdvPurchase.store.get("000donate")?.getOffer();
      if (offer) setPrice(offer.pricingPhases[0].price);
    };

    const init = async () => {
      if (isPlatform("ios") || isPlatform("android")) {
        CdvPurchase.store.register([donateProduct]);
        CdvPurchase.store.ready(updatePrice);
        CdvPurchase.store.when().receiptUpdated(checkIfOrderInProgress);
        CdvPurchase.store.when().approved(checkOwned);
        CdvPurchase.store.initialize([CdvPurchase.Platform.GOOGLE_PLAY]);
      }
    };

    document.addEventListener("deviceready", init);
    return () => {
      document.removeEventListener("deviceready", init);
      CdvPurchase.store.off(updatePrice);
      CdvPurchase.store.off(checkIfOrderInProgress);
      CdvPurchase.store.off(checkOwned);
      setHasOrder(false);
      setOwned(false);
      setPrice("");
    };
  }, []);

  const order = async () => {
    const offer = CdvPurchase.store.get("000donate")?.getOffer();
    if (offer?.canPurchase) {
      setOrderDialogOpen(true);
      await offer.order();
      setOrderDialogOpen(false);
    }
  };

  // while isOrdering is true,
  // poll to see if there is an order in a recept
  // if not the isOrdering state
  useEffect(() => {
    if (!isOrdering) return;

    const timer = setInterval(async () => {
      setHasOrder(false);
      await CdvPurchase.store
        .getAdapter(CdvPurchase.Platform.GOOGLE_PLAY)
        ?.loadReceipts();
      if (!hasOrder) setIsOrdering(false);
    }, 5000);

    return () => clearInterval(timer);
  }, [hasOrder, isOrdering]);

  return {
    price,
    owned,
    order,
    isOrdering,
    orderDialogOpen,
  };
};
