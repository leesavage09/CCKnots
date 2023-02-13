import React from "react";
import { Typography } from "@mui/material";
import { KnotPage } from "../../components/knotPageTemplate";
import { fig8 } from "../../components/threejs/rope/knots/fig8";

export const Fig8Page: React.FC = () => (
    <KnotPage
        knot={fig8}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Figure-eight knot
            </Typography>
        )}
    />
)
