import React from "react";
import { Typography } from "@mui/material";
import { ReefKnot } from "../../components/threejs/rope/knots/reefKnot";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const ReefKnotPage: React.FC = () => {
    return (
        <KnotPage
            knot={ReefKnot}
            cameraPos={[0, 0, 50]}
            title='Reef Knot'
            description={(
                <>
                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a reef knot</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                        An easy rhyme to remember how to tie the reef knot is “Left over right and right over left”.
                        </Typography>
                        <ul>
                            <li>Hold the ends of two ropes. One rope in one hand and one rope in your other hand.</li>
                            <li>Pass the left rope over and behind the right rope, so that you hold both ends in your other hand.</li>
                            <li>Now pass the rope that is in your right hand over and behind the left hand rope. </li>
                            <li>To tighten the knot, you hold the working and standing end of the left rope in your left hand and the working and standing end of the right rope in your right hand. Then you pull your hands away from each other. </li>
                        </ul>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Historically the reef knot was mainly used for reefing and furling sails. Nowadays, the reef knot is mainly used to tie down a deck brush or a boat hook or to secure a dinghy on deck.
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Misuse in sailing</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            According to the knotting authorities, misuse of the reef knot have caused more deaths and injuries than all other knots combined. The reef knot should never be used in lifesaving situations. It should also not be used to tie two ropes together, as the knot can slip easily. Use the sheet bend knot to tie two ropes together. 
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            The knot lies flat and the two tails lie on the same side of the knot. 
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            The knot is easy to tie, even when visibility is low. It can be tied quickly and doesn’t jam often. The knot is mostly easy to untie. 
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Historical facts</Typography>
                        <ul>
                            <li>The first known usage of the reef knot dates back over 4000 years. It was used by the Greeks to tie bandages. They called it the Hercules knot and it was believed that the knot helped to heal wounds faster. </li>
                            <li>In 1794, it was first called the reef knot, as it was used by sailors to reef sails. </li>
                        </ul>
                    </PaperP>
                </>
            )} />
    );
}
