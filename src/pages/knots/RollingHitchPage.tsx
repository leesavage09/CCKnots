import React from "react";
import { Typography } from "@mui/material";
import { KnotPage } from "../../components/knotPageTemplate";
import { RollingHitch } from "../../components/threejs/rope/knots/rollingHitch";

export const RollingHitchPage: React.FC = () => (
    <KnotPage
        knot={RollingHitch}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Rolling Hitch
            </Typography>
        )}
    />
)