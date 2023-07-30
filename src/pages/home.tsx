import { IonContent, IonSlide } from "@ionic/react";
import { Container, List } from "@mui/material";
import { AppBar } from "../components/appBar";
import { KnotListItem } from "../components/knotListItem";
import { knots } from "../knots";
import { DonationBanner } from "../components/DonationBanner";

export const Home = () => {
  const knotCards = knots.map((knot) => (
    <KnotListItem knot={knot} large={true} />
  ));

  return (
    <>
      <AppBar />
      <IonSlide>
        <IonContent>
          <Container sx={{ marginTop: 8, marginBottom: 6 }} maxWidth="xs">
            <DonationBanner />
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {knotCards}
            </List>
          </Container>
        </IonContent>
      </IonSlide>
    </>
  );
};
