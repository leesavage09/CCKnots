import { Redirect, Route } from 'react-router-dom';
import { useIonRouter } from '@ionic/react';
import { Home } from './pages/home';
import { knots } from './knots';
import { useEffect } from 'react';
import { App } from '@capacitor/app';

export const Routes: React.FC = () => {
    const ionRouter = useIonRouter()

    const knotRoutes = knots.map((knot) => (
        <Route key={knot.url} exact path={knot.url}>
            {knot.pageComponent}
        </Route>
    ))

    useEffect(() => {
        const backHandler = (ev: any) => {
            ev.detail.register(10, () => {
                ionRouter.push('/home')
            });
        }

        document.addEventListener('ionBackButton', backHandler);
        return () => {
            document.removeEventListener('ionBackButton', backHandler)
        }
    }, [])


    return (
        <>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            {knotRoutes}
        </>
    )
}
