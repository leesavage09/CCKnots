import * as React from "react";
import Card from "@mui/material/Card";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { KnotDef } from "../knots";
import { useHistory } from "react-router";

interface KnotCardProps {
  knot: KnotDef;
  large?: boolean;
}

export const KnotListItem: React.FC<KnotCardProps> = ({ knot, large = false }) => {
  const history = useHistory();

  return (
    <ListItem
      key={knot.name}
      sx={{ marginY: 1 }}
      onClick={() => {
        history.push(knot.url);
      }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            width: large ? 100 : 33,
            height: large ? 100 : 33,
            marginRight: large ? 3 : 1,
          }}
          alt={knot.name}
          src={knot.image}
        />
      </ListItemAvatar>
      <ListItemText primary={knot.name} secondary={large ? knot.description : ''} />
    </ListItem>
  );
};
