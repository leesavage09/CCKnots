import React, { useState } from "react";
import { KnotScene } from "./knotScene";
import { useKnotControls } from "./hooks/useKnotControls";
import { AnimatedKnotProps } from "./threejs/hooks/useRopeAnimation";
import { AppBar } from "./appBar";

interface KnotPageProps {
    knot: React.FC<AnimatedKnotProps>,
    title: string
    description: JSX.Element,
    cameraPos: [number, number, number]
}

export const KnotPage: React.FC<KnotPageProps> = ({ knot, title, description, cameraPos }) => {
    const { frame, controls, drawer } = useKnotControls(description)
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
