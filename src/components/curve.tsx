import { MeshProps } from "@react-three/fiber"
import React from "react"
import { CurvePath, Vector3 } from "three";

export interface RopeProps extends MeshProps {
    curve: CurvePath<Vector3>
    color: string
}

export const Curve: React.FC<RopeProps> = ({ curve, color, ...props }) => (
    <mesh
        {...props}
        position={[0, 0, 0]}
    >
        <tubeGeometry args={[curve, 1000, 0.1, 1, false]} />
        <meshStandardMaterial wireframe color={color} />
    </mesh>
)