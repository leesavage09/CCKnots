import React from "react";
import { CloveHitch } from "../components/threejs/rope/knots/cloveHitch";
import { RoundTurn } from "../components/threejs/rope/knots/roundTurn";
import { ReefKnot } from "../components/threejs/rope/knots/reefKnot";
import { Bowline } from "../components/threejs/rope/knots/bowline";
import { SheetBend } from "../components/threejs/rope/knots/sheetBend";
import { DoubleSheetBend } from "../components/threejs/rope/knots/doubleSheetBend";
import { KnotScene } from "../components/knotScene";

export const CloveHitchPage: React.FC = () => (<KnotScene Knot={CloveHitch} camera={[0,0,30]} />)

export const RoundTurnPage: React.FC = () => (<KnotScene Knot={RoundTurn} camera={[0,10,30]} />)

export const ReefKnotPage: React.FC = () => (<KnotScene Knot={ReefKnot} camera={[0,0,50]} />)

export const BowlinePage: React.FC = () => (<KnotScene Knot={Bowline} camera={[0,0,70]} />)

export const SheetBendPage: React.FC = () => (<KnotScene Knot={SheetBend} camera={[0,0,50]} />)

export const DoubleSheetBendPage: React.FC = () => (<KnotScene Knot={DoubleSheetBend} camera={[0,0,50]}/>)
