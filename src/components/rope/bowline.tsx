import React, { useEffect, useState } from 'react'
import { convertRange, inRange, TupleRange } from '../support'
import { BowlineCurve, BowlineCurve_1 } from './bowlineCurve'
import { Knot } from './knot'
import { ropeMesh } from './ropeMesh'

type Animation = Array<{
    frames: TupleRange,
    action: (frame: number) => void,
    values: TupleRange
}>

const animate = (animation: Animation, frame: number) => {
    animation.forEach((animation) => {
        if (inRange(frame, animation.frames)) {
            animation.action(convertRange(frame, animation.frames, animation.values))
            return
        }
    })
}

interface AnimatedKnotProps {
    frame: number
}

type AnimatedKnot = React.FC<AnimatedKnotProps>

export const Bowline: AnimatedKnot = ({ frame }) => {
    const [moveKeyFrame, setMoveKeyFrame] = useState(0)
    const [bendKeyFrame, setBendKeyFrame] = useState(0)

    const min = -0.215
    const max = 0.163

    const animation: Animation = [{
        frames: [0, 0.350],
        action: setMoveKeyFrame,
        values: [0, 0.260]
    }, {
        frames: [0.350, 0.700],
        action: setBendKeyFrame,
        values: [1, 0]
    }, {
        frames: [0.700, 1],
        action: setMoveKeyFrame,
        values: [0.260, 1]
    }]

    useEffect(() => {
        animate(animation, frame)
    }, [frame])

    return (
        <Knot
            moveMin={min}
            moveMax={max}
            moveKeyFrame={moveKeyFrame}

            bendKeyFrame={bendKeyFrame}
            curves={[BowlineCurve, BowlineCurve_1]}

            mesh={ropeMesh}
            debugOutline={true}
        />
    )
}
