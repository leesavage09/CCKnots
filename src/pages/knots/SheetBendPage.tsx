import React from "react";
import { Typography } from "@mui/material";
import { SheetBend } from "../../components/threejs/rope/knots/sheetBend";
import { KnotPage } from "../../components/knotPageTemplate";

export const SheetBendPage: React.FC = () => (
    <KnotPage
        knot={SheetBend}
        cameraPos={[0, 0, 50]}
        title='Sheet Bend'
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
                Sheet Bend
            </Typography>
        )}
    />
)
