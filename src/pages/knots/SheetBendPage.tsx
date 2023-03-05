import React from "react";
import { Typography } from "@mui/material";
import { SheetBend } from "../../components/threejs/rope/knots/sheetBend";
import { KnotPage, PaperP } from "../../components/knotPageTemplate";

export const SheetBendPage: React.FC = () => (
  <KnotPage
    knot={SheetBend}
    cameraPos={[0, 0, 50]}
    title="Sheet Bend"
    description={
      <>
        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            How to tie a sheet bend
          </Typography>
          <ul>
            <li>
              Form a bight with the thickest line. If both loops have the same
              diameter, you can choose either line. Hold the bight together in
              your hand, we call this line A.
            </li>
            <li>
              Pull the end of the other line (line B) through the loop, coming
              towards you.
            </li>
            <li>
              Wrap line B under both parts of the bight, formed by line A.
            </li>
            <li>
              Pull the end of line B under itself where it came out of the loop
              originally.
            </li>
            <li>
              To tighten the knot, keep the bight in your one hand. With your
              other hand you pull the end of line B in the opposite direction.
            </li>
          </ul>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Usage In Sailing
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            In sailing, the sheet bend knot is mainly used for joining two ropes
            of different thickness together. Although the knot works just as
            well for joining ropes of the same size.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Structure
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            The sheet bend is related to the bowline knot. The structure is
            identical, but the sheet bend is used to tie two ropes together and
            the bowline forms a loop.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Reliability
          </Typography>
          <Typography variant="body1" component="p" gutterBottom>
            When tied correctly, the sheet bend is a secure knot. It is more
            secure than the reef knot. Not under tension, the sheet bend can
            work loose. This also means that it is fairly easy to untie a sheet
            bend when you take off the load.
          </Typography>
        </PaperP>

        <PaperP>
          <Typography variant="subtitle2" component="h6" gutterBottom>
            Historical facts
          </Typography>
          <ul>
            <li>
              The knot is widely used in textile mills throughout history, hence
              also known as the weaver’s knot. However, weavers tend to tie it
              in a variety of ways.
            </li>
          </ul>
        </PaperP>
      </>
    }
  />
);
