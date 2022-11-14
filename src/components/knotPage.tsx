import React, { useState } from "react";
import { KnotScene } from "../components/knotScene";
import { useKnotControls } from "../components/hooks/useKnotControls";
import { AnimatedKnotProps } from "../components/threejs/hooks/useRopeAnimation";
import { AppBar } from "./appBar";

interface KnotPageProps {
    knot: React.FC<AnimatedKnotProps>
    description: JSX.Element,
    cameraPos: [number, number, number]
}

export const KnotPage: React.FC<KnotPageProps> = ({ knot, description, cameraPos }) => {
    const { frame, controls, drawer } = useKnotControls(description)
    const [canvas, setcanvas] = useState<JSX.Element>()

    // Fix for a possible race condition in threejs fiber
    setTimeout(() => {
        setcanvas(<KnotScene Knot={knot} cameraPos={cameraPos} frame={frame} />);
    }, 0);

    return (
        <>
            <AppBar />
            {canvas}
            {controls}
            {drawer}
        </>
    )
}
