import { IonButton } from "@ionic/react";
import { Typography } from "@mui/material";
import { PaperP } from "./knotPageTemplate";
import { useInAppDonation } from "./hooks/useInAppDonation";

export const DonationBanner = () => {
  const donation = useInAppDonation();

  if (donation.isOrdering)
    return (
      <PaperP>
        <Typography variant="body1" component="p" gutterBottom>
          Your order is processing!
        </Typography>
      </PaperP>
    );

  if (donation.owned)
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

  if (donation.price)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Please help
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          I would like to keep this app add free. If you are enjoying this app,
          please consider a review or a donation.
        </Typography>
        <IonButton onClick={() => donation.order()} disabled={donation.isOrdering}>
          Donate {donation.price}
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
