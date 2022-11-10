import React from 'react'
import { Vector2 } from 'three'
import { AnimatedKnotProps, Knot } from '../knot'
import { curves_0, curves_1 } from './sheetBendCurves'

export const SheetBend: React.FC<AnimatedKnotProps> = ({ frame }) => {

    const ropeMeshConfig = {
        length: 50,
        radialSegments: 32,
        heightSegments: 400,
        repeat: new Vector2(2, 50),
        // wireframe:true
    }


    return (
        <>
            <Knot
                frame={frame}

                moveMin={0.999}
                moveMax={1.313}

                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    color: '#aba',
                }}

                moveAnimation={[{
                    frames: [0, 0.5],
                    values: [0, 1]
                }, {
                    frames: [0.5, 1],
                    values: [1, 1]
                }]}
                curveKeyframes={[curves_0]}
            />

            <Knot
                frame={frame}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    color: '#baa',
                }}
                moveMin={-1.973}
                moveMax={-1.643}

                moveAnimation={[{
                    frames: [0, 0.5],
                    values: [0, 0]
                }, {
                    frames: [0.5, 1],
                    values: [0, 1]
                }]}
                curveKeyframes={[curves_1]}
            />
        </>
    )
}