import { MeshProps, useThree } from "@react-three/fiber"
import React, { useEffect, useState } from "react"
import { Flow } from "three/examples/jsm/modifiers/CurveModifier.js";
import { ropeMesh } from "./ropeMesh";
import { CurvePath, Mesh, Vector3 } from "three";
import { tweenCurves } from "../support";

export interface KnotProps extends MeshProps {
    moveMin: number
    moveMax: number
    moveKeyFrame: number
    bendKeyFrame?: number
    curves: [CurvePath<Vector3>,CurvePath<Vector3>]
    mesh: Mesh
    debugOutline: boolean
}

export const Knot: React.FC<KnotProps> = ({ moveMin, moveMax, moveKeyFrame, bendKeyFrame, curves, mesh, debugOutline, ...props }) => {
    const three = useThree();
    const [flow, setFlow] = useState<Flow>()

    useEffect(() => {
        if (!flow) return
        const diff = moveMax - moveMin
        const newPosition = moveMin + moveKeyFrame * diff
        const newShift = 0 - flow.uniforms.pathOffset.value + newPosition
        flow.moveAlongCurve(newShift)
    }, [flow, moveKeyFrame])

    useEffect(() => {
        if (!flow || !bendKeyFrame) return
        flow.updateCurve(0, tweenCurves(curves[0], curves[1], bendKeyFrame));
    }, [flow, bendKeyFrame])


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
                <tubeGeometry args={[curves[0], 500, 0.2, 4, false]} />
                <meshStandardMaterial wireframe color={'red'} />
            </mesh>
            <mesh
                {...props}
                position={[0, 0, 0]}
            >
                <tubeGeometry args={[curves[1], 500, 0.2, 4, false]} />
                <meshStandardMaterial wireframe color={'blue'}/>
            </mesh>
            </>
        )
    }
    return null
}