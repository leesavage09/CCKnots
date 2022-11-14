import React from "react";
import { Typography } from "@mui/material";
import { CloveHitch } from "../components/threejs/rope/knots/cloveHitch";
import { RoundTurn } from "../components/threejs/rope/knots/roundTurn";
import { ReefKnot } from "../components/threejs/rope/knots/reefKnot";
import { Bowline } from "../components/threejs/rope/knots/bowline";
import { SheetBend } from "../components/threejs/rope/knots/sheetBend";
import { DoubleSheetBend } from "../components/threejs/rope/knots/doubleSheetBend";
import { KnotPage } from "../components/knotPage";

export const CloveHitchPage: React.FC = () => (
    <KnotPage
        knot={CloveHitch}
        cameraPos={[0, 0, 30]}
        description={(
            <Typography variant="h3" gutterBottom>
                Clove Hitch
            </Typography>
        )}
    />
)

export const RoundTurnPage: React.FC = () => (
    <KnotPage
        knot={RoundTurn}
        cameraPos={[0, 10, 30]}
        description={(
            <Typography variant="h3" gutterBottom>
                Round Turn
            </Typography>
        )}
    />
)

export const ReefKnotPage: React.FC = () => (
    <KnotPage
        knot={ReefKnot}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h3" gutterBottom>
                Reef Knot
            </Typography>
        )}
    />
)

export const BowlinePage: React.FC = () => (
    <KnotPage
        knot={Bowline}
        cameraPos={[0, 0, 70]}
        description={(
            <Typography variant="h3" gutterBottom>
                Bowline
            </Typography>
        )}
    />
)

export const SheetBendPage: React.FC = () => (
    <KnotPage
        knot={SheetBend}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h3" gutterBottom>
                Sheet Bend
            </Typography>
        )}
    />
)

export const DoubleSheetBendPage: React.FC = () => (
    <KnotPage
        knot={DoubleSheetBend}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h3" gutterBottom>
                Double Sheet Bend
            </Typography>
        )}
    />
)
