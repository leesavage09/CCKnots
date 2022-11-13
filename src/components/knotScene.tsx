import React, { useState, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import { Sky } from "./threejs/sky";
import { ArcballControl } from "./threejs/arcballControls";
import { AnimatedKnotProps } from "./threejs/hooks/useRopeAnimation";
import { AppBar, Box, IconButton, Paper, Slider, Toolbar, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import { useHistory } from "react-router";

interface KnotSceneProps {
    Knot: React.FC<AnimatedKnotProps>
    camera?: [number, number, number]
}

export const KnotScene: React.FC<KnotSceneProps> = ({ Knot, camera }) => {
    const [animationSlider, setAnimationSlider] = useState(100);
    const [animation, setAnimation] = useState(0)
    const history = useHistory()

    useEffect(() => {
        setAnimation(animationSlider)
    }, [animationSlider])

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    onClick={() => history.push('/')}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon
                            />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Back to All Knots
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Canvas
                shadows
                camera={{ fov: 45, position: camera ? camera : [0, 0, 20] }}
            >
                <Sky />
                <ArcballControl />
                <ambientLight intensity={0.3} />
                <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
                <Knot frame={animation / 100} />

            </Canvas>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '90vw',
                    marginLeft: '5vw',
                }}
            >
                <Slider
                    aria-label="Animation"
                    value={animationSlider}
                    onChange={(_, value) => setAnimationSlider(value as number)}
                />
            </Box>
        </>
    )
}
