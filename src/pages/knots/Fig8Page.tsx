import React from "react";
import { Typography } from "@mui/material";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";
import { fig8 } from "../../components/threejs/rope/knots/fig8";

export const Fig8Page: React.FC = () => (
  <KnotPage
    knot={fig8}
    cameraPos={[0, 0, 50]}
    title="Figure-eight knot"
    description={
      <>
        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            How to tie a figure of eight
          </Typography>
          <ul>
            <li>Take a bight close to the end of the rope.</li>
            <li>
              Take the loose/working end of the rope in front and across the
              standing end of the rope.
            </li>
            <li>
              Bring the working end all the way around the standing end and poke
              it through the eye which has been created.
            </li>
            <li>
              To tie the knot, you pull the working end and standing end of the
              rope away from each other.
            </li>
          </ul>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Usage In Sailing
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            The figure of eight knot is used as a stopper knot. You can tie a
            figure of eight knot at the end of sheets and lines, to avoid them
            running out of retaining devices.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Structure
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            The knot really suits its name. When you look at the knot it looks
            like an “8”. Both at the top and the bottom the rope will come out
            of the eight.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Reliability
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            The figure of eight knot is a reliable and secure stopper knot, as
            it is not likely to slip. The advantage of using a figure of eight
            knot as a stopper knot is that you can easily untie the knot, even
            after it has been under a lot of tension. Furthermore, the knot is
            very easy to tie and provides a great foundation for more
            complicated knots.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Historical facts
          </Typography>
          <ul>
            <li>
              The figure of eight knot was first used on sailing boats, as a
              basic stopper knot.
            </li>
            <li>
              The knot is first recorded in the book “Sheet Anchor”, published
              in 1808.{" "}
            </li>
          </ul>
        </PaperP>
      </>
    }
  />
);
