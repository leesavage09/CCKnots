import React from "react";
import { Typography } from "@mui/material";
import { CloveHitch } from "../../components/threejs/rope/knots/cloveHitch";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const CloveHitchPage: React.FC = () => (
    <KnotPage
        knot={CloveHitch}
        cameraPos={[0, 0, 30]}
        title='Clove Hitch'
        description={(
            <>
                <Typography variant="h6" component="h5" gutterBottom>Clove Hitch</Typography>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a clove hitch</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        <p>
                        When learning to tie the clove hitch, it might help to keep the following sentence in mind “A pirate goes around the world, crosses his path and goes around the world again. He digs for treasure at the X-mark”. 
                        </p>
                        <ul>
                            <li>The pirate is the end of the rope. He travels once around the object you want to tie the clove hitch to.</li>
                            <li>Once the pirate (the end of the rope) has traveled around the object once, he crosses over his own path to the other side of the rope.</li>
                            <li>Then he travels around the world (the object) one more time in the same direction.</li>
                            <li>After the pirate travels around the world the second time, he comes across the X-mark and starts digging for his treasure. So, the pirate goes underneath the rope.</li>
                            <li>To tighten the knot, pull the rope on both sides of the knot away from each other. </li>
                        </ul>
                    </Typography>
                </PaperP>


                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a clove hitch 2</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        <ul>
                            <li>Lay the rope over the bar you wish to tie the clove hitch on.</li>
                            <li>Bring the working end around the bar and let it cross over the standing end of the rope.</li>
                            <li>Bring the working end around the bar one more time, keeping it on the same side of the standing end of the rope. </li>
                            <li>Pass the working end underneath the hitch on the bar, parallel to the standing end.</li>
                            <li>To tighten the knot, pull the standing end and working end away from each other.</li>
                        </ul>
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                    The clove hitch is an ideal knot to tie fenders to the guard rails, as it is easy to adjust the height afterwards.
                    </Typography>
                </PaperP>

              

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                    The structure of the clove hitch is identical to the two half hitches. The only difference is that the clove hitch is tied around a post or ring, rather than the standing end of the rope.
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                    When both ends of the clove hitch are under tension, it is a very reliable knot. When only one end is under tension, the knot has a tendency to slip. To avoid slipping, you can tie a half hitch in the loose end.
                    </Typography>
                </PaperP>

                <PaperP>
                    <Typography variant="subtitle2" component="h6" gutterBottom>Historical facts</Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        <ul>
                            <li>The clove hitch is already seen in artwork from the 16th century to tie ratlines.</li>
                            <li>The knot is first named in the Falconer’s Universal Dictionary of the Marine, which dates back to 1769.</li>
                        </ul>
                    </Typography>
                </PaperP>
            </>
        )}
    />
)
