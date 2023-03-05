import { IonContent, IonSlide } from '@ionic/react'
import { Avatar, Container, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import { useHistory } from 'react-router'
import { AppBar } from '../components/appBar'
import { KnotCard } from '../components/knotCard'
import { knots } from '../knots'

export const Home = () => {
    const history = useHistory()
 
    const knotCards = knots.map((knot) => (
        <ListItem 
            key={knot.name}
            onClick={() => {
                history.push(knot.url);
            }}
        >

            <ListItemAvatar>
            <Avatar sx={{ width: 100, height: 100, marginRight: 3 }} alt={knot.name} src={knot.image}/>
            </ListItemAvatar>
            <ListItemText primary={knot.name} secondary={knot.description} />
        </ListItem>
    ))

    return (
        <>
            <AppBar />
            <IonSlide>
                <IonContent>
                    <Container maxWidth="xs">
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            {knotCards} 
                        </List>
                        <div style={{ height: 100 }} />
                    </Container>
                </IonContent>
            </IonSlide>
        </>
    )
}
