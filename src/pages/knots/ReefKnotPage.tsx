import React from "react";
import { Typography } from "@mui/material";
import { ReefKnot } from "../../components/threejs/rope/knots/reefKnot";
import { KnotPage } from "../../components/knotPageTemplate";

export const ReefKnotPage: React.FC = () => (
    <KnotPage
        knot={ReefKnot}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Reef Knot
            </Typography>
        )}
    />
)
