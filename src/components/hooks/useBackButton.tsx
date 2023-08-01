import { useIonRouter } from '@ionic/react';
import { useEffect } from 'react';

export const useBackButton = () => {
    const ionRouter = useIonRouter()

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
    <div>useBackButton</div>
  )
}
