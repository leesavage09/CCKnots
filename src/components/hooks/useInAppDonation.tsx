import { isPlatform } from "@ionic/react";
import { useState, useEffect, useCallback } from "react";
import "cordova-plugin-purchase";
import { setTimeout } from "timers";

export const useInAppDonation = () => {
  const [productPrice, setPrice] = useState("");
  const [donated, setDonated] = useState(false);
  const [processingConfirmed, setProcessingConfirmed] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [ordering, setOrdering] = useState(false);

  const donateProduct = {
    id: "000donate",
    type: CdvPurchase.ProductType.NON_CONSUMABLE,
    platform: CdvPurchase.Platform.GOOGLE_PLAY,
  };
  const checkOwned = useCallback((transaction: CdvPurchase.Transaction) => {
    if (CdvPurchase.store.owned("000donate") && transaction.purchaseId) {
      setDonated(true);
      setProcessing(false);
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
    console.log("receiptUpdated");
    receipt.transactions.map((transaction) => {
      transaction.products.map((product) => {
        if (product.id === "000donate" && transaction.isPending) {
          setProcessing(true);
          setProcessingConfirmed(true);
          CdvPurchase.store.monitor(transaction, (state) => {
            console.log("new transaction state: " + state);
          });
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
        console.log("init");
        CdvPurchase.store.register([donateProduct]);
        CdvPurchase.store.ready(updatePrice);
        CdvPurchase.store.when().receiptUpdated(checkIfOrderInProgress);
        CdvPurchase.store.when().approved(checkOwned);
        CdvPurchase.store.initialize([CdvPurchase.Platform.GOOGLE_PLAY]);
      }
    };

    document.addEventListener("deviceready", init);
    return () => {
      console.log("cleanup");
      CdvPurchase.store.off(updatePrice);
      CdvPurchase.store.off(checkIfOrderInProgress);
      CdvPurchase.store.off(checkOwned);
      setProcessing(false);
      setDonated(false);
      setPrice("");
      document.removeEventListener("deviceready", init);
    };
  }, []);

  const donate = async () => {
    const offer = CdvPurchase.store.get("000donate")?.getOffer();
    if (offer?.canPurchase) {
      setOrdering(true);
      const order = await offer.order();
      console.log("order", { order });
      setOrdering(false);
      check();
    }
  };

  const check = async () => {
    setProcessing(false);
    // This will trigger receiptUpdated but only if there is a transaction in progress
    await CdvPurchase.store
      .getAdapter(CdvPurchase.Platform.GOOGLE_PLAY)
      ?.loadReceipts();
    // if processing is still false then confirm that processing is over
    if (!processing) setProcessingConfirmed(false);
    else setTimeout(check, 1000);
  };

  return {
    productPrice,
    donated,
    donate,
    processing: processingConfirmed,
    ordering,
    check,
  };
};
