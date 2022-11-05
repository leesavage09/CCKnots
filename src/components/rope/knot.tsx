import React, { useEffect, useState } from 'react'
import { convertRange, inRange, TupleRange } from './support'
import { Rope } from './rope'
import { CurvePath, Vector3 } from 'three'

export interface AnimatedKnotProps {
    frame: number
}

export type Animation = Array<{
    frames: TupleRange
    values: TupleRange
}>

interface KnotProps {
    frame: number
    color: string
    length: number
    moveMin: number
    moveMax: number
    moveAnimation: Animation
    curveAnimation?: Animation
    curveKeyframes: Array<CurvePath<Vector3>>
}

export const Knot: React.FC<KnotProps> = ({ frame, length, color, moveMin, moveMax, moveAnimation, curveAnimation, curveKeyframes }) => {
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

    return (
        <Rope
            move={{
                min: moveMin,
                max: moveMax,
                length,
                frame: moveFrame
            }}

            curve={{
                color,
                frame: curveFrame,
                keyframes: curveKeyframes,
            }}
        />
    )
}
