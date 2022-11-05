import React from 'react'
import { AnimatedKnotProps, Knot } from '../knot'
import { curves_0, curves_1 } from './sheetBendCurves'

export const SheetBend: React.FC<AnimatedKnotProps> = ({ frame }) => (
    <>
        <Knot
            frame={frame}
            length={50}
            color='#efe'
            moveMin={0.999}
            moveMax={1.313}

            moveAnimation={[{
                frames: [0, 0.5],
                values: [0, 1]
            },{
                frames: [0.5, 1],
                values: [1, 1]
            }]}
            curveKeyframes={[curves_0]}
        />

        <Knot
            frame={frame}
            length={50}
            color='#fee'
            moveMin={-1.973}
            moveMax={-1.643}

            moveAnimation={[{
                frames: [0, 0.5],
                values: [0, 0]
            },{
                frames: [0.5, 1],
                values: [0, 1]
            }]}
            curveKeyframes={[curves_1]}
        />
    </>
)
