import { IonButton, IonContent, IonSlide } from "@ionic/react";
import { Container, List, Typography } from "@mui/material";
import { AppBar } from "../components/appBar";
import { KnotListItem } from "../components/knotListItem";
import { knots } from "../knots";
import { ProBanner } from "../components/ProBanner";
import { PaperP } from "../components/knotPageTemplate";
import { useAppState } from "../components/context/appContext";

export const Home = () => {
  const { pro } = useAppState();
  const knotCards = knots.map((knot) => (
    <KnotListItem knot={knot} large={true} />
  ));

  return (
    <>
      <AppBar />
      <IonSlide>
        <IonContent>
          <Container sx={{ marginTop: 8, marginBottom: 6 }} maxWidth="xs">
            <ProBanner />
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {knotCards}
            </List>
            <PaperP>
              {pro?.owned && (
                <>
                  <Typography variant="subtitle1" component="h6" gutterBottom>
                    Thank you for purchasing
                  </Typography>
                  <Typography variant="subtitle2" component="h6" gutterBottom>
                    Sailing Knots 3D Pro!
                  </Typography>
                </>
              )}
              <Typography variant="body1" component="p" gutterBottom>
                Please consider leaving a review. Reviews will encorage futher
                development
              </Typography>
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
                Open PlayStore
              </IonButton>
            </PaperP>
          </Container>
        </IonContent>
      </IonSlide>
    </>
  );
};
