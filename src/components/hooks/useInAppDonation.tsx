import { isPlatform } from "@ionic/react";
import { useState, useEffect, useCallback } from "react";
import "cordova-plugin-purchase";
import { setInterval, clearInterval } from "timers-browserify";

export const useInAppDonation = () => {
  const [price, setPrice] = useState("");
  const [owned, setOwned] = useState(false);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [hasOrder, setHasOrder] = useState(false);

  const donateProduct = {
    id: "000donate",
    type: CdvPurchase.ProductType.NON_CONSUMABLE,
    platform: CdvPurchase.Platform.GOOGLE_PLAY,
  };

  const checkOwned = useCallback((transaction: CdvPurchase.Transaction) => {
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
  }, []);

  const checkIfOrderInProgress = useCallback((receipt: CdvPurchase.Receipt) => {
    receipt.transactions.forEach((transaction) => {
      transaction.products.forEach((product) => {
        if (product.id === "000donate" && transaction.isPending) {
          console.log("000donate: transaction.isPending");
          setHasOrder(true);
          setIsOrdering(true);
        }
      });
    });
  }, []);

  const updatePrice = useCallback(() => {
    const offer = CdvPurchase.store.get("000donate")?.getOffer();
    if (offer) setPrice(offer.pricingPhases[0].price);
  }, []);

  useEffect(() => {
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
      CdvPurchase.store.off(updatePrice);
      CdvPurchase.store.off(checkIfOrderInProgress);
      CdvPurchase.store.off(checkOwned);
      setHasOrder(false);
      setOwned(false);
      setPrice("");
      document.removeEventListener("deviceready", init);
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
