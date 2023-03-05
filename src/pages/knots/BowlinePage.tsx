import React from "react";
import { Typography } from "@mui/material";
import { Bowline } from "../../components/threejs/rope/knots/bowline";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const BowlinePage: React.FC = () => {
    return (
        <KnotPage
            knot={Bowline}
            cameraPos={[0, 0, 130]}
            title='Bowline'
            description={(
                <>
                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>How to tie a bowline</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <p>
                            A well known sentence to remember how to tie a bowline knot is “The rabbit comes up the hole, runs around the tree, and goes back down the hole.” But how does that work in practice?
                            </p>
                            <ul>
                                <li>Hold the standing end of the line (the end that doesn’t move) in your left hand. This will be the tree if you use the verse to remember the knot. Keep the running end in your right hand. The running end is the rabbit. </li>
                                <li>Make a loop by crossing the running end of the line over the standing end of the line. Make the loop as big as you need it to be. This loop is the so-called rabbit hole.</li>
                                <li>The rabbit now comes up the hole. This means the running end of the line goes through the loop, moving towards you. </li>
                                <li>From there, the rabbit runs around the tree. So, move the running end of the line behind the standing end of the line so that it ends up on the other side.</li>
                                <li>To finish the knot, the rabbit goes down the hole. So, the running end of the line goes through the loop again.</li>
                                <li>To tighten the knot, pull both ends of the line in opposite directions.</li>
                            </ul>
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Usage In Sailing</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                        In sailing, the bowline knot is widely used. The knot is best to use for long lining to shore or to fasten a mooring line to a ring or a post. The bowline is also seen on boats to fasten a halyard to the head of a sail or to tie the jib sheet to a clew of the jib.
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Misuse in sailing</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Bowlines are often used to make a long line out of two shorter lines, by tying two bowlines at the end of both lines that loop through each other. Although this is a strong way of tying ropes together, there’s also a lot of friction. The friction can damage your lines and make them less strong over time. There for, the sheet bend is a much better knot for tying lines and ropes together. 
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Structure</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            The bowline is related to the sheet bend. The structure is identical, but the bowline forms a loop and the sheet bend is used to tie two ropes together. 
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            The structure of the bowline knot is identical to the Canoeman knot (commonly used in fishing). But as these knots are tied in different ways, they have different names.
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Reliability</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            When tied correctly, the bowline knot is considered a reliable knot. Under tension, the knot will unlikely come undone. Not under tension, the bowline knot has a tendency to work loose. This also means that it is fairly easy to untie a bowline when you take the load off. 
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            A rope with a bowline retains approximately 65% of its strength at the location of the knot, although in practice the exact strength depends on a variety of factors. 
                        </Typography>
                    </PaperP>

                    <PaperP>
                        <Typography variant="subtitle2" component="h6" gutterBottom>Historical facts</Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            <ul>
                                <li>The bowline knot was used on the solar ship of Egyptian Pharoah Khufu. This ship is believed to be around 2500 years old.</li>
                                <li>As far as we are aware, the bowline knot was first mentioned in John Smith’s work A Sea Grammer. This book was published in 1691.</li>
                            </ul>
                        </Typography>
                    </PaperP>
                </>
            )} />
    );
}
