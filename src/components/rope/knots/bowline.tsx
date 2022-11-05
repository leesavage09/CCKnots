import React, { useEffect, useState } from 'react'
import { animate, Animation } from '../../support'
import { BowlineCurve_1, BowlineCurve_2, BowlineCurve_0 } from './bowlineCurves'
import { Knot } from '../knot'

interface AnimatedKnotProps {
    frame: number
}

export const Bowline: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const [moveFrame, setMoveFrame] = useState(0)
    const [bendFrame, setBendFrame] = useState(0)

    const moveMin = -0.220
    const moveMax = 0.163

    const animation: Animation = [{
        frames: [0, 0.200],
        action: setBendFrame,
        values: [0, 0]
    }, {
        frames: [0.200, 0.600],
        action: setBendFrame,
        values: [0, 0.5]
    }, {
        frames: [0.600, 0.700],
        action: setBendFrame,
        values: [0.5, 1]
    }, {
        frames: [0.700, 1],
        action: setBendFrame,
        values: [1, 1]
    }, {
        frames: [0, 0.300],
        action: setMoveFrame,
        values: [0, 0.260]
    }, {
        frames: [0.600, 1],
        action: setMoveFrame,
        values: [0.260, 1]
    }]

    useEffect(() => {
        animate(animation, frame)
    }, [frame])

    return (
        <Knot
            moveMin={moveMin}
            moveMax={moveMax}
            moveFrame={moveFrame}

            bendFrame={bendFrame}
            curves={[BowlineCurve_0, BowlineCurve_1, BowlineCurve_2]}

            debugOutline={false}
        />
    )
}
