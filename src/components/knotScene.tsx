import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import { Sky } from "./threejs/sky";
import { ArcballControl } from "./threejs/arcballControls";
import { AnimatedKnotProps } from "./threejs/hooks/useRopeAnimation";
import { AppBar, Box, Button, Drawer, IconButton, Paper, Slider, Stack, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import InfoIcon from '@mui/icons-material/Info';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import { borderRadius } from "@mui/system";
import { IonContent, IonSlide } from "@ionic/react";
import { useKnotInfo } from "./knotInfo";

interface KnotSceneProps {
    Knot: React.FC<AnimatedKnotProps>
    camera?: [number, number, number],
    frame: number
}

export const KnotScene: React.FC<KnotSceneProps> = ({ Knot, camera, frame }) => (
    <Canvas
        shadows
        camera={{ fov: 45, position: camera ? camera : [0, 0, 20] }}
    >
        <Sky />
        <ArcballControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Knot frame={frame} />

    </Canvas>
)

