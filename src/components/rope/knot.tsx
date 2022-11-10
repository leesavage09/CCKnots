import React, { useEffect, useState } from 'react'
import { convertRange, inRange, TupleRange } from './support'
import { Rope } from './rope'
import { CurvePath, Vector3 } from 'three'
import { RopeMeshConfig } from './useRopeMesh'

export interface AnimatedKnotProps {
    frame: number
}

export type Animation = Array<{
    frames: TupleRange
    values: TupleRange
}>

export interface KnotProps {
    frame: number
    moveMin: number
    moveMax: number
    moveAnimation: Animation
    curveAnimation?: Animation
    curveKeyframes: Array<CurvePath<Vector3>>
    ropeMeshConfig: RopeMeshConfig
    loggingName?: string
}

export const Knot: React.FC<KnotProps> = ({ frame, ropeMeshConfig, moveMin, moveMax, moveAnimation, curveAnimation, curveKeyframes, loggingName }) => {
    const { moveFrame, curveFrame } = useRopeAnimation(frame, moveAnimation, curveAnimation)

    return (
        <Rope
            move={{
                min: moveMin,
                max: moveMax,
                frame: moveFrame
            }}
            curve={{
                frame: curveFrame,
                keyframes: curveKeyframes,
            }}
            ropeMeshConfig={ropeMeshConfig}
            loggingName={loggingName}
        />
    )
}


export const useRopeAnimation = (frame: number, moveAnimation: Animation, curveAnimation?: Animation) => {
    const [moveFrame, setMoveFrame] = useState(0)
    const [curveFrame, setCurveFrame] = useState(0)

    useEffect(() => {
        moveAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setMoveFrame(convertRange(frame, animation.frames, animation.values))
            }
        })

        if (!curveAnimation) setCurveFrame(0)
        else curveAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setCurveFrame(convertRange(frame, animation.frames, animation.values))
            }
        })
    }, [frame])

    return {
        moveFrame,
        curveFrame,
    }

}