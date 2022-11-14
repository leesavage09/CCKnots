import { IonContent, IonSlide } from '@ionic/react'
import { Container, Stack, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { AppBar } from '../components/appBar'
import { KnotCard } from '../components/knotCard'
import { knots } from '../knots'

export const Home = () => {
    const history = useHistory()

    const knotCards = knots.map((knot) => (
        <KnotCard
            key={knot.name}
            image={knot.image}
            title={knot.name}
            body={knot.description}
            action={() => {
                history.push(knot.url);
            }}
        />
    ))

    return (
        <>
            <AppBar />
            <IonSlide>
                <IonContent>
                    <Typography variant="h1" gutterBottom>
                        Knots
                    </Typography>
                    <Container maxWidth="xs">
                        <Stack spacing={4}>
                            {knotCards}
                        </Stack>
                        <div style={{ height: 100 }} />
                    </Container>
                </IonContent>
            </IonSlide>
        </>
    )
}
