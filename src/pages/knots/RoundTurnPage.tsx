import React from "react";
import { Typography } from "@mui/material";
import { RoundTurn } from "../../components/threejs/rope/knots/roundTurn";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const RoundTurnPage: React.FC = () => (
    <KnotPage
        knot={RoundTurn}
        cameraPos={[0, 10, 30]}
        title='Round Turn'
        description={(
            <>
            <Typography variant="h6" component="h5" gutterBottom>Round turn and two half hitches</Typography>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a round turn and two half hitches</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <ul>
                        <li>Turn the working end of the rope two times around the object. </li>
                        <li>Start making the half hitches by bringing the working end of the rope around the standing end of the rope.</li>
                        <li>Pass the working end behind the standing end and pull it through the gap created between the rope. Pull tight as this is the first half hitch.</li>
                        <li>Repeat step 3 by bringing the working end of the rope around the standing end of the rope and through the gap. Pull tight to finish the knot. </li>
                    </ul>
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The round turn and two half hitches is mainly used to tie a rope to an object, like a post, tree or ring. It is often used to tie the dinghy to the boat for temporary storage. The round turn and two half hitches is very quick and easy to tie. When speed is necessary, you can temporarily tie mooring lines with this knot. Afterwards, you typically have to redo the mooring lines in a more sophisticated way, for example with a bowline knot. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Misuse in sailing</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Although not really misuse, it is less common to tie fenders with a round turn and two half hitches. Compared to tying fenders with a clove hitch, the round turn and two half hitches makes it more difficult to move fenders up and down quickly. That for, the clove hitch is preferred for tying fenders.  
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The name of the knot also describes the structure. The round turn describes the part of the knot that’s wrapped around the object. The two half hitches is the part of the knot that secures the working end of the rope.
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The round turn and two half hitches is easy to tie and a reliable knot. It rarely jams and doesn’t slip. Even under tension, it is easy to untie the knot, as the round turn holds the load. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Historical facts</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    <ul>
                        <li>The round turn and two half hitches was traditionally used for holding mooring lines.</li>
                    </ul>
                </Typography>
            </PaperP>
        </>
        )}
    />
)
