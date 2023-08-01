import { useState } from "react";
import { default as MuiAppBar } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu } from "./menu";
import { useAppState } from "./context/appContext";

export const AppBar = ({ title }: { title?: string }) => {
  const [open, setOpen] = useState(false);
  const { pro } = useAppState();

  const defaultTitle = "Sailing Knots 3D" + (pro?.owned ? " - Pro" : " - Free");

  return (
    <>
      <Box component="div">
        <MuiAppBar elevation={3}>
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
              {title ? title : defaultTitle}
            </Typography>
          </Toolbar>
        </MuiAppBar>
      </Box>
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
};
