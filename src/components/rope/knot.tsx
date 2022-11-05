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
    moveAnimation: Animation
    bendAnimation: Animation
    moveMin: number
    moveMax: number
    curves: Array<CurvePath<Vector3>>
}

export const Knot: React.FC<KnotProps> = ({ frame, moveAnimation, bendAnimation, moveMin, moveMax, curves }) => {
    const [moveFrame, setMoveFrame] = useState(0)
    const [bendFrame, setBendFrame] = useState(0)

    useEffect(() => {
        moveAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setMoveFrame(convertRange(frame, animation.frames, animation.values))
            }
        })

        bendAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setBendFrame(convertRange(frame, animation.frames, animation.values))
            }
        })
    }, [frame])

    return (
        <Rope
            moveMin={moveMin}
            moveMax={moveMax}
            moveFrame={moveFrame}
            bendFrame={bendFrame}
            curves={curves}
            debugOutline={false}
        />
    )
}
