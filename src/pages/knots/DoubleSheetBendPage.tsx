import React from "react";
import { Typography } from "@mui/material";
import { DoubleSheetBend } from "../../components/threejs/rope/knots/doubleSheetBend";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const DoubleSheetBendPage: React.FC = () => (
    <KnotPage
        knot={DoubleSheetBend}
        cameraPos={[0, 0, 50]}
        title='Double Sheet Bend'
        description={(
            <>
            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a double sheet bend</Typography>
                <ul>
                    <li>Form a bight with the thickest line. If both loops have the same diameter, you can choose either line. Hold the bight together in your hand, we call this line A. </li>
                    <li>Pull the end of the other line (line B) through the loop, coming towards you. </li>
                    <li>Wrap line B under both parts of the bight, formed by line A.</li>
                    <li>Pull the end of line B under itself where it came out of the loop originally.</li>
                    <li>Wrap line B around both parts of the bight again, towards the closed end of the bight and tuck it under itself again. </li>
                    <li>To tighten the knot, keep the bight in your one hand. With your other hand you pull the end of line B in the opposite direction.</li>
                </ul>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The double sheet bend is mainly used in sailing to tie two different sized roped together. The thicker rope should be used to form the bight. The knot works just as well for tying two same sized ropes together. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The double sheet bend is similar to the single sheet bend, but has an extra wrap to provide more security.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    When tied correctly, the double sheet bend is a secure knot. It is more secure than the reef knot and single sheet bend. Not under tension, the double sheet bend can work loose. This also means that it is fairly easy to untie a double sheet bend when you take off the load. 
                </Typography>
            </PaperP>
        </>
        )}
    />
)
