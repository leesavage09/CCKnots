import React from "react";
import { Canvas } from '@react-three/fiber'
import { Sky } from "./threejs/sky";
import { ArcballControl } from "./threejs/arcballControls";
import { AnimatedKnotProps } from "./threejs/hooks/useRopeAnimation";

interface KnotSceneProps {
    Knot: React.FC<AnimatedKnotProps>
    cameraPos?: [number, number, number],
    frame: number
}

export const KnotScene: React.FC<KnotSceneProps> = ({ Knot, cameraPos = [0, 0, 20], frame }) => (
    <Canvas
        shadows
        camera={{ fov: 45, position: cameraPos }}
    >
        <Sky />
        <ArcballControl />
        <ambientLight intensity={0.3} />
        <pointLight castShadow position={[10, 10, 10]} intensity={0.7} />
        <Knot frame={frame} />

    </Canvas>
)
