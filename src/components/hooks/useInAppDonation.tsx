import React from "react";
import { isPlatform } from "@ionic/react";
import { useState, useEffect } from "react";
import {
  InAppPurchase2 as iap,
  IAPProduct,
} from "@ionic-native/in-app-purchase-2";

export const useInAppDonation = () => {
  const [productPrice, setPrice] = useState("");
  const [donated, setDonated] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (isPlatform("ios") || isPlatform("android")) {
        iap.register({
          id: "000donate",
          alias: "donate",
          type: iap.NON_CONSUMABLE,
        });

        iap.ready(() => {
          let product = iap.get("donate");
          setPrice(product.price);
        });

        iap.when("donate").updated((p: IAPProduct) => {
          if (p.loaded && p.valid) {
            if (p.state === iap.APPROVED) p.finish();
            setProcessing(p.state === iap.REQUESTED || p.state === iap.INITIATED);
          }
        });

        iap.when("000donate").owned(() => setDonated(true));

        iap.refresh();
      }
    };
    init();
  }, []);

  const donate = () => {
    iap.order("donate");
  };
  return { productPrice, donated, donate, processing };
};
