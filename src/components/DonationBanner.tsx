import { IonButton } from "@ionic/react";
import { Typography } from "@mui/material";
import { PaperP } from "./knotPageTemplate";
import { useAppState } from "./context/appContext";

export const DonationBanner = () => {
  const { pro } = useAppState();

  if (!pro) return <></>;

  if (pro.isOrdering)
    return (
      <PaperP>
        <Typography variant="body1" component="p" gutterBottom>
          Your order for Sailing Knots 3D Pro is now processing!
        </Typography>
      </PaperP>
    );

  if (pro.owned)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Thank you
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          You now have Sailing Knots 3D Pro!
        </Typography>
      </PaperP>
    );

  if (pro.price)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Help future development
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          If you are enjoying Sailing Knots 3D consider purchasing the Pro
          licence. This will guarantee an add free experence.
        </Typography>
        <IonButton onClick={() => pro.order()} disabled={pro.isOrdering}>
          Sailing Knots 3D Pro {pro.price}
        </IonButton>
      </PaperP>
    );
  else return <></>;
};
