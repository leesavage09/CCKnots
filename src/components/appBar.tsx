import { useState } from 'react';
import { default as MuiAppBar } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from './menu';

export const AppBar = ({title = 'Sailing Knots 3D'}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Box component="div">
        <MuiAppBar elevation={3} >
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
            <Typography variant="h6" component="h1">
            {title}
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