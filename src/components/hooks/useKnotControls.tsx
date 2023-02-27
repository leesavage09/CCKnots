import React, { useState } from "react";
import { useHistory } from "react-router";
import { Box, Button, Drawer, IconButton, Slider, Stack } from "@mui/material";
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import { useAnimationFrame } from "./useAnimationFrame";

type UseKnotControls = (description: JSX.Element) => {
    frame: number,
    drawer: JSX.Element
    controls: JSX.Element
}

export const useKnotControls: UseKnotControls = (description) => {
    const [animationSlider, setAnimationSlider] = useState(100)
    const [drawOpen, setDrawOpen] = React.useState(false)
    const [play, setPlay] = useState(false)
    useAnimationFrame((deltaTime: number) => setAnimationSlider(value => (value + deltaTime * 0.015)), play)
    const history = useHistory()

    return {
        frame: animationSlider / 100,
        drawer: (
            <Drawer
                anchor={'bottom'}
                open={drawOpen}
                onClose={() => setDrawOpen(false)}
            >
                <Box
                    sx={{ height: '100vh', padding: '10px' }}
                >
                    <IconButton aria-label="close" onClick={() => setDrawOpen(false)} sx={{ float: 'right' }}>
                        <CloseIcon />
                    </IconButton>
                    {description}
                </Box>
            </Drawer>
        ),
        controls: (
            <Box
                sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 2,
                    bottom: 0,
                    left: 0,
                    width: '100vw',
                    backgroundColor: 'white',
                }}
            >
                <Slider
                    key={play ? Math.random() : 1}
                    sx={{ width: '90vw', display: 'flex', flexShrink: 1, marginBottom: 2 }}
                    aria-label="Animation"
                    step={0.001}
                    min={0}
                    max={100}
                    value={animationSlider}
                    onChange={(_, value) => setAnimationSlider(value as number)}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                    }}
                >
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="contained"
                            disabled={animationSlider === 0}
                            sx={{ borderRadius: 10 }}
                            onClick={() => setAnimationSlider(0)}
                        >
                            <SkipPreviousRoundedIcon />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 10 }}
                            onClick={() => setPlay(!play)}
                        >
                            {play ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
                        </Button>
                        <Button
                            variant="contained"
                            disabled={animationSlider === 100}
                            sx={{ borderRadius: 10 }}
                            onClick={() => {
                                setPlay(false)
                                setAnimationSlider(100)}
                            }
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
            </Box >
        )
    }
}
