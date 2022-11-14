import { IonContent, IonSlide } from '@ionic/react'
import { Container, Stack, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { AppBar } from '../components/appBar'
import { KnotCard } from '../components/knotCard'

export const Home = () => {
    const history = useHistory()

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
                            <KnotCard
                                image={'/assets/knots/cloveHitch.png'}
                                title={'Clove Hitch'}
                                body={'Clove Hitch ...'}
                                action={() => {
                                    history.push('/knots/cloveHitch');
                                }}
                            />
                            <KnotCard
                                image={'/assets/knots/roundTurn.png'}
                                title={'Round Turn & Two Half Hitches'}
                                body={'Round Turn & Two Half Hitches ...'}
                                action={() => {
                                    history.push('/knots/roundTurn');
                                }}
                            />
                            <KnotCard
                                image={'/assets/knots/reefKnot.png'}
                                title={'Reef Knot'}
                                body={'Reef Knot ...'}
                                action={() => {
                                    history.push('/knots/reefKnot');
                                }}
                            />
                            <KnotCard
                                image={'/assets/knots/bowline.png'}
                                title={'Bowline'}
                                body={'Bowline ...'}
                                action={() => {
                                    history.push('/knots/bowline');
                                }}
                            />
                            <KnotCard
                                image={'/assets/knots/sheetBend.png'}
                                title={'Sheet Bend'}
                                body={'Sheet Bend ...'}
                                action={() => {
                                    history.push('/knots/sheetBend');
                                }}
                            />
                            <KnotCard
                                image={'/assets/knots/doubleSheetBend.png'}
                                title={'Double Sheet Bend'}
                                body={'Double Sheet Bend ...'}
                                action={() => {
                                    history.push('/knots/doubleSheetBend');
                                }}
                            />
                        </Stack>
                        <div style={{ height: 100 }} />
                    </Container>
                </IonContent>
            </IonSlide>
        </>
    )
}
