import React from "react";
import { KnotScene } from "../components/knotScene";
import { useKnotControls } from "../components/useKnotControls";
import { AnimatedKnotProps } from "../components/threejs/hooks/useRopeAnimation";

interface KnotPageProps {
    knot: React.FC<AnimatedKnotProps>
    description: JSX.Element,
    cameraPos: [number, number, number]
}

export const KnotPage: React.FC<KnotPageProps> = ({ knot, description, cameraPos }) => {
    const { frame, controls, Drawer } = useKnotControls()

    return (
        <>
            <KnotScene Knot={knot} cameraPos={cameraPos} frame={frame} />
            {controls}
            <Drawer>
                {description}
            </Drawer>
        </>
    )
}
