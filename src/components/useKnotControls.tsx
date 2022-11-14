import React, { useState } from "react";
import { Box, Button, Drawer, Slider, Stack } from "@mui/material";
import { useHistory } from "react-router";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import { IonSlide } from "@ionic/react";

type UseKnotControls = () => {
    frame: number,
    Drawer: React.FC<React.PropsWithChildren>
    controls: JSX.Element
}

export const useKnotControls: UseKnotControls = () => {
    const [animationSlider, setAnimationSlider] = useState(0);
    const history = useHistory()
    const [drawOpen, setDrawOpen] = React.useState(false);

    return {
        frame: animationSlider / 100,
        Drawer: ({ children }) => (
            <Drawer
                anchor={'bottom'}
                open={drawOpen}
                onClose={() => setDrawOpen(false)}
            >
                {children}
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
                    sx={{ width: '90vw', display: 'flex', flexShrink: 1, marginBottom: 2 }}
                    aria-label="Animation"
                    value={animationSlider}
                    onChange={(_, value) => setAnimationSlider(value as number)}
                />
                <Box>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant="text"
                            onClick={() => history.push('/')}
                        >
                            <ArrowCircleLeftOutlinedIcon />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 10 }}
                            onClick={() => setAnimationSlider(0)}
                        >
                            <SkipPreviousRoundedIcon />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 10 }}
                            onClick={() => alert('not yet implemented')}
                        >
                            <PlayArrowRoundedIcon />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: 10 }}
                            onClick={() => setAnimationSlider(100)}
                        >
                            <SkipNextRoundedIcon />
                        </Button>
                        <Button
                            variant="text"
                            onClick={() => setDrawOpen(true)}
                        >
                            <InfoOutlinedIcon />
                        </Button>
                    </Stack>
                </Box>
            </Box>
        )
    }
}
