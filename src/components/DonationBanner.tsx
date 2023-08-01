import { IonButton } from "@ionic/react";
import { Typography } from "@mui/material";
import { PaperP } from "./knotPageTemplate";
import { usePro } from "./hooks/usePro";

export const DonationBanner = () => {
  const pro = usePro();

  if (pro.isOrdering)
    return (
      <PaperP>
        <Typography variant="body1" component="p" gutterBottom>
          Your order is processing!
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
          Please help
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          I would like to keep this app add free. If you are enjoying this app,
          please consider a review or a donation.
        </Typography>
        <IonButton onClick={() => pro.order()} disabled={pro.isOrdering}>
          Donate {pro.price}
        </IonButton>
        <IonButton
          color="secondary"
          onClick={() => {
            window.open(
              "https://play.google.com/store/apps/details?id=uk.co.leesavage.CCknots",
              "_system",
              "location=yes"
            );
            return false;
          }}
        >
          Review
        </IonButton>
      </PaperP>
    );
  else return <></>;
};
