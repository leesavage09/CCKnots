import { useHistory } from "react-router";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { knots } from "../knots";
import { KnotListItem } from "./knotListItem";

interface MenuProps {
  open: boolean;
  onClose: () => void;
}

export const Menu: React.FC<MenuProps> = ({ open, onClose }) => {
  const history = useHistory();
  const knotCards = knots.map((knot) => <KnotListItem knot={knot} />);

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        component="div"
        sx={{ width: 250 }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <List>
          <ListItem key="allKnots" disablePadding>
            <ListItemButton onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="All knots" />
            </ListItemButton>
          </ListItem>
          {/* <ListItem key='Review' disablePadding>
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
                    </ListItem> */}
        </List>

        <Divider />

        <List>{knotCards}</List>
      </Box>
    </Drawer>
  );
};
