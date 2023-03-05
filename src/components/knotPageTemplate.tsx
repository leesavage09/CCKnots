import React, { useState } from "react";
import { KnotScene } from "./knotScene";
import { useKnotControls } from "./hooks/useKnotControls";
import { AnimatedKnotProps } from "./threejs/hooks/useRopeAnimation";
import { AppBar } from "./appBar";
import { Container, Paper } from "@mui/material";

export const Page: React.FC<React.PropsWithChildren> = ({ children }) => <Container sx={{ paddingBottom: 8 }}>{children}</Container>

export const PaperP: React.FC<React.PropsWithChildren> = ({ children }) => <Paper sx={{ marginX: 1, marginTop: 3, marginBottom: 6, padding: 2 }}>{children}</Paper>

interface KnotPageProps {
    knot: React.FC<AnimatedKnotProps>,
    title: string
    description: JSX.Element,
    cameraPos: [number, number, number]
}

export const KnotPage: React.FC<KnotPageProps> = ({ knot, title, description, cameraPos }) => {
    const { frame, controls, drawer } = useKnotControls(title, description)
    const [canvas, setCanvas] = useState<JSX.Element>()

    // Fix for a possible race condition in threejs fiber
    setTimeout(() => {
        setCanvas(<KnotScene Knot={knot} cameraPos={cameraPos} frame={frame} />);
    }, 0);

    return (
        <>
            <AppBar title={title}/>
            {canvas}
            {controls}
            {drawer}
        </>
    )
}
