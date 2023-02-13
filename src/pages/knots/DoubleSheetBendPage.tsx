import React from "react";
import { Typography } from "@mui/material";
import { DoubleSheetBend } from "../../components/threejs/rope/knots/doubleSheetBend";
import { KnotPage } from "../../components/knotPage";

export const DoubleSheetBendPage: React.FC = () => (
    <KnotPage
        knot={DoubleSheetBend}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Double Sheet Bend
            </Typography>
        )}
    />
)
