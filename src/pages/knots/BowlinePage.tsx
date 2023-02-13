import React from "react";
import { Typography } from "@mui/material";
import { Bowline } from "../../components/threejs/rope/knots/bowline";
import { KnotPage } from "../../components/knotPageTemplate";

export const BowlinePage: React.FC = () => (
    <KnotPage
        knot={Bowline}
        cameraPos={[0, 0, 70]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Bowline
            </Typography>
        )}
    />
)
