import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Home } from './pages/home';
import { BowlinePage, CloveHitchPage, DoubleSheetBendPage, Fig8Page, ReefKnotPage, RollingHitchPage, RoundTurnPage, SheetBendPage } from './pages/knotPages';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* MUI fonts*/
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/knots/cloveHitch">
          <CloveHitchPage />
        </Route>
        <Route exact path="/knots/roundTurn">
          <RoundTurnPage />
        </Route>
        <Route exact path="/knots/reefKnot">
          <ReefKnotPage />
        </Route>
        <Route exact path="/knots/bowline">
          <BowlinePage />
        </Route>
        <Route exact path="/knots/sheetBend">
          <SheetBendPage />
        </Route>
        <Route exact path="/knots/doubleSheetBend">
          <DoubleSheetBendPage />
        </Route>
        <Route exact path="/knots/fig8">
          <Fig8Page />
        </Route>
        <Route exact path="/knots/rollingHitch">
          <RollingHitchPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
