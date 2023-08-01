import { Redirect, Route } from "react-router-dom";
import { useIonRouter } from "@ionic/react";
import { Home } from "./pages/home";
import { knots } from "./knots";
import { useBackButton } from "./components/hooks/useBackButton";
import { usePro } from "./components/hooks/usePro";

export const Routes: React.FC = () => {
  const ionRouter = useIonRouter();
  const pro = usePro();
  useBackButton();

  const knotRoutes = knots.map((knot) => (
    <Route key={knot.url} exact path={knot.url}>
      {knot.pageComponent}
    </Route>
  ));

  return (
    <>
      <Route exact path="/home">
        <Home pro={pro} />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      {knotRoutes}
    </>
  );
};
