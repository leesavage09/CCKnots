import React from "react";
import { CloveHitch } from "../components/threejs/rope/knots/cloveHitch";
import { RoundTurn } from "../components/threejs/rope/knots/roundTurn";
import { ReefKnot } from "../components/threejs/rope/knots/reefKnot";
import { Bowline } from "../components/threejs/rope/knots/bowline";
import { SheetBend } from "../components/threejs/rope/knots/sheetBend";
import { DoubleSheetBend } from "../components/threejs/rope/knots/doubleSheetBend";
import { KnotScene } from "../components/knotScene";
import { useKnotInfo } from "../components/knotInfo";
import { Typography } from "@mui/material";

export const CloveHitchPage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Clove Hitch
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={CloveHitch} camera={[0, 0, 30]} frame={frame} />
            {infoDraw}
        </>
    )
}

export const RoundTurnPage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Round Turn & Two Half Hitches
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={RoundTurn} camera={[0, 10, 30]} frame={frame} />
            {infoDraw}
        </>
    )
}

export const ReefKnotPage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Reef Knot
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={ReefKnot} camera={[0, 0, 50]} frame={frame} />
            {infoDraw}
        </>
    )
}

export const BowlinePage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Bowline
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={Bowline} camera={[0, 0, 70]} frame={frame} />
            {infoDraw}
        </>
    )
}

export const SheetBendPage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Sheet Bend
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={SheetBend} camera={[0, 0, 50]} frame={frame} />
            {infoDraw}
        </>
    )
}

export const DoubleSheetBendPage: React.FC = () => {
    const { frame, infoDraw } = useKnotInfo((
        <>
            <Typography variant="h3" gutterBottom>
                Double Sheet Bend
            </Typography>
        </>
    ));

    return (
        <>
            <KnotScene Knot={DoubleSheetBend} camera={[0, 0, 50]} frame={frame} />
            {infoDraw}
        </>
    )
}
