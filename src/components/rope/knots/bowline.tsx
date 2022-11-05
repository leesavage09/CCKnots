import React from 'react'
import { BowlineCurve_1, BowlineCurve_2, BowlineCurve_0 } from './bowlineCurves'
import { AnimatedKnotProps, Animation, Knot } from '../knot'

export const Bowline: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const moveMin = -0.220
    const moveMax = 0.163

    const moveAnimation: Animation = [{
        frames: [0, 0.300],
        values: [0, 0.260]
    }, {
        frames: [0.600, 1],
        values: [0.260, 1]
    }]

    const bendAnimation: Animation = [{
        frames: [0, 0.200],
        values: [0, 0]
    }, {
        frames: [0.200, 0.600],
        values: [0, 0.5]
    }, {
        frames: [0.600, 0.700],
        values: [0.5, 1]
    }, {
        frames: [0.700, 1],
        values: [1, 1]
    }]

    return (
        <Knot
            moveMin={moveMin}
            moveMax={moveMax}
            frame={frame}
            moveAnimation={moveAnimation}
            bendAnimation={bendAnimation}
            curves={[BowlineCurve_0, BowlineCurve_1, BowlineCurve_2]}
        />
    )
}
