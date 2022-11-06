import { useThree } from "@react-three/fiber"
import React, { useEffect, useState } from "react"
import { Flow } from "three/examples/jsm/modifiers/CurveModifier.js";
import { CurvePath, Vector3 } from "three";
import { tweenCurves } from "./support";
import { RopeMeshConfig, useRopeMesh } from "./useRopeMesh";

export interface RopeProps {
    move: {
        min: number
        max: number
        frame: number
    }
    curve: {
        frame: number
        keyframes: Array<CurvePath<Vector3>>
    }
    ropeMeshConfig: RopeMeshConfig
}

export const Rope: React.FC<RopeProps> = ({ move, curve, ropeMeshConfig }) => {
    const three = useThree();
    const ropeMesh = useRopeMesh(ropeMeshConfig);
    const [flow, setFlow] = useState<Flow>()

    const shift = () => {
        if (!flow) return
        const diff = move.max - move.min
        const newPosition = move.min + move.frame * diff
        const newShift = 0 - flow.uniforms.pathOffset.value + newPosition
        flow.moveAlongCurve(newShift)
    }

    const bend = () => {
        if (!flow) return
        const TweenSets = curve.keyframes.length - 1
        const breakpoints = 1 / TweenSets
        const TweenSet = Math.min(Math.floor(curve.frame / breakpoints), TweenSets - 1)
        const totalFrames = curve.frame * TweenSets
        const frame = totalFrames - TweenSet
        flow.updateCurve(0, tweenCurves(curve.keyframes[TweenSet], curve.keyframes[TweenSet + 1], frame));
    }

    useEffect(() => {
        shift()
    }, [flow, move])

    useEffect(() => {
        if (!flow) return
        if (curve.keyframes.length === 1) {
            flow.updateCurve(0, curve.keyframes[0]);
        }
        else bend()
    }, [flow, curve])

    useEffect(() => {
        if (!ropeMesh) return
        const flow = new Flow(ropeMesh);
        setFlow(flow)
        three.scene.add(flow.object3D);
        return () => {
            three.scene.remove(flow.object3D)
        }
    }, [ropeMesh])

    return null
}