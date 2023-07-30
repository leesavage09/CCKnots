import { IonButton } from "@ionic/react";
import { Typography } from "@mui/material";
import { PaperP } from "./knotPageTemplate";
import { useInAppDonation } from "./hooks/useInAppDonation";

export const DonationBanner = () => {
  const donation = useInAppDonation();

  if (donation.processing)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Thank you
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Your donation is processing!
        </Typography>
      </PaperP>
    );

  if (donation.donated)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Thank you
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          Thank you for donating!
        </Typography>
      </PaperP>
    );

  if (donation.productPrice)
    return (
      <PaperP>
        <Typography variant="subtitle2" component="h6" gutterBottom>
          Please help
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          I would like to keep this app add free. If you are enjoying this app,
          please consider a review or a donation.
        </Typography>
        <IonButton onClick={() => donation.donate()}>
          Donate {donation.productPrice}
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
