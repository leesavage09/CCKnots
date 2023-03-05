import React from "react";
import { Typography } from "@mui/material";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";
import { RollingHitch } from "../../components/threejs/rope/knots/rollingHitch";

export const RollingHitchPage: React.FC = () => (
    <KnotPage
        knot={RollingHitch}
        cameraPos={[0, 0, 50]}
        title='Rolling Hitch'
        description={(
            <>
            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a rolling hitch</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                
                </Typography>
                <ul>
                    <li>Start by making a turn around the object and cross over the standing end of the line.</li>
                    <li>Make at least one more wrap around the object, following exactly the same path as the first wrap. So, the standing end of the line will be covered underneath the wraps.</li>
                    <li>Optional: Make more wraps in the same direction. </li>
                    <li>Finish the knot by tying a half hitch</li>
                    <li>For security, tie an extra half hitch, so the knot finished with a clove hitch.</li>
                </ul>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The rolling hitch is mainly used to attach a rope to a rod, pole or other rope. The main feature of this knot is that it can slide into one direction, but not into the other direction. A common example of usage of the rolling hitch is to relax tension on a sheet, so that a jammed winch or block can be cleared safely. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Misuse in sailing</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    As the rolling hitch can slide into one direction, but not the other, it is very important to understand how to tie a rolling hitch. When tied in the wrong direction, the knot can do more harm than good. If you are not an experienced boater or sailer, always make sure to check your knot with a skilled instructor before usage. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    There are two knots known under the name rolling hitch. They are referred to Rolling Hitch (1) ABOK number #1734 and Rolling hitch (2), ABOK number #1735. The main difference between the two is that Rolling hitch (2) provides extra grip when tied to another rope, because the standing end of the rope is underneath the wraps. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    The rolling hitch tightens further under load, but you have to make sure the knot is as tight as possible already, otherwise it will just slip. Make sure to put load on the standing end of the rope, pulling towards the origin of the knot. The more wraps you apply, the more secure the knot will be. However, as the rolling hitch needs friction, it might not hold with slippery modern fiber ropes. 
                </Typography>
            </PaperP>

            <PaperP>
                <Typography variant="subtitle2" component="h6" gutterBottom>Historical facts</Typography>
                <ul>
                    <li>The knot dates back to the late 18th century, when it was commonly known under the name Magnus Hitch or Magner’s Hitch.</li>
                    <li>In 1841 the book Seaman’s Friend was published and used the name rolling hitch for the knot. Ever since, the rolling hitch is known under this name. </li>
                </ul>
            </PaperP>
        </>
        )}
    />
)