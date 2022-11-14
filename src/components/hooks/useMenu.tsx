import { useState } from 'react';
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
import InfoIcon from '@mui/icons-material/Info';
import ShareIcon from '@mui/icons-material/Share';

export const useMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const open = () => setOpen(true)
    const close = () => setOpen(false)
    const history = useHistory()

    return {
        open,
        menu: (
            <Drawer
                anchor="left"
                open={isOpen}
                onClose={close}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={close}
                    onKeyDown={close}
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
                    <List>
                        <ListItem key='About' disablePadding>
                            <ListItemButton>
                                <ListItemIcon><InfoIcon /></ListItemIcon>
                                <ListItemText primary='About' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        )
    }

}