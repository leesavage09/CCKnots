import { MeshProps, useThree } from "@react-three/fiber"
import React, { useEffect, useState } from "react"
import { Flow } from "three/examples/jsm/modifiers/CurveModifier.js";
import { CurvePath, Vector3 } from "three";
import { tweenCurves } from "../support";
import { ropeMesh } from "./ropeMesh";

export interface KnotProps extends MeshProps {
    moveMin: number
    moveMax: number
    moveFrame: number
    bendFrame: number
    curves: [CurvePath<Vector3>, CurvePath<Vector3>]
    debugOutline: boolean
}

export const Knot: React.FC<KnotProps> = ({ moveMin, moveMax, moveFrame, bendFrame, curves, debugOutline, ...props }) => {
    const three = useThree();
    const [flow, setFlow] = useState<Flow>()

    const move = () => {
        if (!flow) return
        const diff = moveMax - moveMin
        const newPosition = moveMin + moveFrame * diff
        const newShift = 0 - flow.uniforms.pathOffset.value + newPosition
        flow.moveAlongCurve(newShift)
    }

    const bend = () => {
        if (!flow) return
        flow.updateCurve(0, tweenCurves(curves[0], curves[1], bendFrame));
    }

    useEffect(() => {
        move()
    }, [flow, moveFrame])

    useEffect(() => {
        bend()
    }, [flow, bendFrame])

    useEffect(() => {
        const flow = new Flow(ropeMesh);
        setFlow(flow)
        three.scene.add(flow.object3D);
        return () => {
            three.scene.remove(flow.object3D)
        }
    }, [])

    if (debugOutline) {
        return (
            <>
                <mesh
                    {...props}
                    position={[0, 0, 0]}
                >
                    <tubeGeometry args={[curves[0], 1000, 0.1, 1, false]} />
                    <meshStandardMaterial wireframe color={'red'} />
                </mesh>
                <mesh
                    {...props}
                    position={[0, 0, 0]}
                >
                    <tubeGeometry args={[curves[1], 1000, 0.1, 1, false]} />
                    <meshStandardMaterial wireframe color={'blue'} />
                </mesh>
            </>
        )
    }
    return null
}