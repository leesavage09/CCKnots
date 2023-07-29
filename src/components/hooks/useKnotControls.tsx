import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CloseIcon from "@mui/icons-material/Close";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import { useAnimationFrame } from "./useAnimationFrame";
import { Page } from "../knotPageTemplate";

type UseKnotControls = (
  title: string,
  description: JSX.Element
) => {
  frame: number;
  drawer: JSX.Element;
  controls: JSX.Element;
};

export const useKnotControls: UseKnotControls = (title, description) => {
  const [animationSlider, setAnimationSlider] = useState(100);
  const [drawOpen, setDrawOpen] = React.useState(false);
  const [play, setPlay] = useState(false);
  useAnimationFrame(
    (deltaTime: number) =>
      setAnimationSlider((value) => value + deltaTime * 0.015),
    play
  );
  const history = useHistory();
  const [step, setStep] = useState(100);

  const handleRW = () => {
    setAnimationSlider(0);
    setPlay(true);
  };

  const handlePlay = () => {
    if (animationSlider >= 100) setAnimationSlider(0);
    setPlay(!play);
  };

  const handleFF = () => {
    setPlay(false);
    setAnimationSlider(100);
  };

  useEffect(() => {
    if (animationSlider >= 100) setPlay(false);
  }, [animationSlider]);

  useEffect(() => {
    if (Math.abs(step - animationSlider) > 1) {
      setStep(animationSlider);
    }
  }, [animationSlider]);

  return {
    frame: animationSlider / 100,
    drawer: (
      <Drawer
        anchor={"bottom"}
        open={drawOpen}
        onClose={() => setDrawOpen(false)}
      >
        <Box
          component="div"
          sx={{ height: "75vh", padding: "10px", paddingTop: "50px" }}
        >
          <Paper
            elevation={3}
            square
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              position: "fixed",
              marginLeft: "-10px",
              marginTop: "-50px",
              padding: "10px",
              width: "100%",
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h6" component="h5">
              {title}
            </Typography>
            <IconButton aria-label="close" onClick={() => setDrawOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Paper>
          <Page>{description}</Page>
        </Box>
      </Drawer>
    ),
    controls: (
      <Box
        component="div"
        sx={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 2,
          bottom: 0,
          left: 0,
          width: "100vw",
          backgroundColor: "white",
        }}
      >
        <Slider
          key={1}
          sx={{
            width: "90vw",
            display: "flex",
            flexShrink: 1,
            marginBottom: 2,
          }}
          aria-label="Animation"
          step={0.001}
          min={0}
          max={100}
          value={step}
          onChange={(_, value) => setAnimationSlider(value as number)}
        />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              disabled={animationSlider === 0}
              sx={{ borderRadius: 10 }}
              onClick={handleRW}
            >
              <SkipPreviousRoundedIcon />
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: 10 }}
              onClick={handlePlay}
            >
              {play ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
            </Button>
            <Button
              variant="contained"
              disabled={animationSlider === 100}
              sx={{ borderRadius: 10 }}
              onClick={handleFF}
            >
              <SkipNextRoundedIcon />
            </Button>
          </Stack>
          <Button
            variant="contained"
            sx={{ padding: 0, borderRadius: 10, minWidth: 40 }}
            onClick={() => setDrawOpen(true)}
          >
            <InfoOutlinedIcon />
          </Button>
        </Box>
      </Box>
    ),
  };
};
