import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Home } from './pages/home';

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
import { knots } from './knots';


setupIonicReact();

const App: React.FC = () => {
    const knotRoutes = knots.map((knot) => (
        <Route exact path={knot.url}>
            {knot.pageComponent}
        </Route>
    ))

    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    {knotRoutes}
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    )
}


export default App;
