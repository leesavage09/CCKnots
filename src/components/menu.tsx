import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ReviewIcon from '@mui/icons-material/AutoAwesome';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import { ListSubheader } from '@mui/material';
import { knots } from '../knots';

interface MenuProps {
    open: boolean,
    onClose: () => void
}

export const Menu: React.FC<MenuProps> = ({ open, onClose }) => {
    const history = useHistory()

    const listOfKnots = knots.map((knot) => (
        <ListItem key={knot.name} disablePadding>
            <ListItemButton onClick={() => history.push(knot.url)}>
                <ListItemText primary={knot.name} />
            </ListItemButton>
        </ListItem >
    ))

    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={onClose}
                onKeyDown={onClose}
            >
                <List>
                    <ListItem key='Review' disablePadding>
                        <ListItemButton>
                            <ListItemIcon><ReviewIcon /></ListItemIcon>
                            <ListItemText primary='Review' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key='Share' disablePadding>
                        <ListItemButton>
                            <ListItemIcon><ShareIcon /></ListItemIcon>
                            <ListItemText primary='Share' />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />

                <List
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Knots
                        </ListSubheader>
                    }
                >
                    <ListItem key='allKnots' disablePadding>
                        <ListItemButton onClick={() => history.push('/')}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary="All Knots..." />
                        </ListItemButton>
                    </ListItem >
                    {listOfKnots}
                </List>
            </Box>
        </Drawer >
    )
}