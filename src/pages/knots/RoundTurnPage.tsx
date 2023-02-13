import React from "react";
import { Typography } from "@mui/material";
import { RoundTurn } from "../../components/threejs/rope/knots/roundTurn";
import { KnotPage } from "../../components/knotPage";

export const RoundTurnPage: React.FC = () => (
    <KnotPage
        knot={RoundTurn}
        cameraPos={[0, 10, 30]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Round Turn
            </Typography>
        )}
    />
)
