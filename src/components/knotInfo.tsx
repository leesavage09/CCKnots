import React, { useState } from "react";
import { AppBar, Box, Button, Drawer, IconButton, Paper, Slider, Stack, Toolbar, Typography } from "@mui/material";
import { useHistory } from "react-router";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import InfoIcon from '@mui/icons-material/Info';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import { IonSlide } from "@ionic/react";

type UseKnotInfo = (children: JSX.Element) => {
    frame: number,
    infoDraw: JSX.Element
}

export const useKnotInfo: UseKnotInfo = (children) => {
    const [animationSlider, setAnimationSlider] = useState(100);
    const history = useHistory()
    const [drawOpen, setDrawOpen] = React.useState(false);

    return {
        frame: animationSlider / 100,
        infoDraw: (
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
                            <ArrowBackIcon />
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
                            <PlayCircleFilledWhiteIcon />
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
                            <InfoIcon />
                        </Button>
                    </Stack>
                </Box>

                <Drawer
                    anchor={'bottom'}
                    open={drawOpen}
                    onClose={() => setDrawOpen(false)}
                >
                    <IonSlide>
                        {children}
                    </IonSlide>
                </Drawer>
            </Box>
        )
    }
}
