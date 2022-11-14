import { useState } from 'react';
import { default as MuiAppBar } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from './menu';

export const AppBar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box>
        <MuiAppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              CCKnots
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </Box>
      <Menu
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}