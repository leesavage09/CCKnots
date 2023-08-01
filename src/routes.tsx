import { Redirect, Route } from "react-router-dom";
import { useIonRouter } from "@ionic/react";
import { Home } from "./pages/home";
import { knots } from "./knots";
import { useBackButton } from "./components/hooks/useBackButton";
import { AppProvider } from "./components/context/appContext";

export const Routes: React.FC = () => {
  const ionRouter = useIonRouter();
  useBackButton();

  const knotRoutes = knots.map((knot) => (
    <Route key={knot.url} exact path={knot.url}>
      {knot.pageComponent}
    </Route>
  ));

  return (
    <AppProvider>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      {knotRoutes}
    </AppProvider>
  );
};
