import { MeshProps, useThree } from "@react-three/fiber"
import React, { useEffect, useState } from "react"
import { Flow } from "three/examples/jsm/modifiers/CurveModifier.js";
import { ropeMesh } from "./ropeMesh";
import { BowlineCurve } from "./bowlineCurve";
import { CurvePath, Mesh, Vector3 } from "three";

interface KnotProps extends MeshProps {
    min: number
    max: number
    animationFrame: number
    curve: CurvePath<Vector3>
    mesh: Mesh
    outline: boolean
}

export const Knot: React.FC<KnotProps> = ({ min, max, animationFrame, curve, mesh, outline, ...props }) => {
    const three = useThree();
    const [flow, setFlow] = useState<Flow>()

    useEffect(() => {
        if (!flow) return

        const diff = max - min
        const newPosition = min + animationFrame * diff
        const newShift = 0 - flow.uniforms.pathOffset.value + newPosition
        flow.moveAlongCurve(newShift)
    }, [flow, animationFrame])

    useEffect(() => {
        const flow = new Flow(ropeMesh);
        flow.updateCurve(0, BowlineCurve);
        three.scene.add(flow.object3D);
        flow.moveAlongCurve(min)
        setFlow(flow)

        return () => {
            three.scene.remove(flow.object3D)
        }
    }, [])

    if (outline) {
        return (
            <mesh
                {...props}
                receiveShadow
                position={[0, 0, 0]}
            >
                <tubeGeometry args={[BowlineCurve, 500, 0.2, 4, false]} />
                <meshStandardMaterial wireframe />
            </mesh>
        )
    }
    return null
}