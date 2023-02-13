import React from "react";
import { Paper, Typography } from "@mui/material";
import { CloveHitch } from "../components/threejs/rope/knots/cloveHitch";
import { RoundTurn } from "../components/threejs/rope/knots/roundTurn";
import { ReefKnot } from "../components/threejs/rope/knots/reefKnot";
import { Bowline } from "../components/threejs/rope/knots/bowline";
import { SheetBend } from "../components/threejs/rope/knots/sheetBend";
import { DoubleSheetBend } from "../components/threejs/rope/knots/doubleSheetBend";
import { KnotPage } from "../components/knotPage";
import { fig8 } from "../components/threejs/rope/knots/fig8";
import { RollingHitch } from "../components/threejs/rope/knots/rollingHitch";

const PaperP: React.FC<React.PropsWithChildren> = ({ children }) => <Paper sx={{ marginX: 1, marginY: 3, padding: 2 }}>{children}</Paper>

export const CloveHitchPage: React.FC = () => (
    <KnotPage
        knot={CloveHitch}
        cameraPos={[0, 0, 30]}
        description={(
            <>
                <Typography variant="h6" component="h5" gutterBottom>Clove Hitch</Typography>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Other Names</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        builder's knot or a ratline hitch
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        The clove hitch is used most commonly to tie your fenders onto your boat. It is easy adjustable, since feeding in rope from either direction will loosen the knot to be tightened at a new position.
                    </Typography>
                </PaperP>

              

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        The clove hitch is identical to the Two half hitches, The clove hitch is tied around an object rather than the standing end of the rope, unlike the Two half hitches
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Character</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        When both ends of the clove hitch are under tension it is very secure however as is typically the case in its most common usage in sailing 'tiing on fenders' one end is loose, this can lead to slipage and a lost fender. Half hitches can be added to secure the knot from slippage.

                        Adjusting the knot is very easy as one end can be slipped and the tention taken up on the other end. This is typacly used to higer and lower fenders
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Other usage</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        This knot is particularly useful where the length of the running end needs to be adjustable, since feeding in rope from either direction will loosen the knot to be tightened at a new position. With certain types of cord, the clove hitch can slip when loaded. In modern climbing rope, the clove hitch will slip to a point, and then stop slipping.[5] When tied around a carabiner, the load should pull on the end closest to its spine.[6] With smaller diameter cords, after being heavily weighted it may become difficult to untie. It is also unreliable when used on a square or rectangular post, rather than round.
                        The clove hitch is also commonly used in pioneering to start and finish a lashing such as the traditional square lashing, tripod lashing, round lashing and shear lashing.[7]
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>History</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        Although the name clove hitch is given by Falconer in his Dictionary of 1769, the knot is much older, having been tied in ratlines at least as early as the first quarter of the sixteenth century. This is shown in early sculpture and paintings. A round turn is taken with the ratline and then a hitch is added below. The forward end is always the first to be made fast.
                    </Typography>
                </PaperP>



            </>
        )}
    />
)

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

export const SheetBendPage: React.FC = () => (
    <KnotPage
        knot={SheetBend}
        cameraPos={[0, 0, 50]}
        description={(
            <Typography variant="h6" component="h5" gutterBottom>
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
            <Typography variant="h6" component="h5" gutterBottom>
                Double Sheet Bend
            </Typography>
        )}
    />
)

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