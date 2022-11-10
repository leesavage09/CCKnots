import React from 'react'
import { Vector2 } from 'three'
import { AnimatedKnotProps, Knot, Animation } from '../knot'
import { Texture, useRopeMaterial } from '../useRopeMaterial'
import { curves_0, curves_1 } from './curves/doubleSheetBend'

interface DoubleSheetBendProps extends AnimatedKnotProps {
    useAlternativeTying?: boolean
}

type Tying = { standardTying: Animation, alternativeTying: Animation }

export const DoubleSheetBend: React.FC<DoubleSheetBendProps> = ({ frame, useAlternativeTying }) => {

    const ropeMeshConfig = {
        length: 50,
        radialSegments: 32,
        heightSegments: 400,
    }

    const knotOne: Tying = {
        standardTying: [{
            frames: [0, 0.5],
            values: [0, 1]
        }, {
            frames: [0.5, 1],
            values: [1, 1]
        }],
        alternativeTying: [{
            frames: [0, 0.5],
            values: [0, 0]
        }, {
            frames: [0.5, 1],
            values: [0, 1]
        }]
    }

    const knotTwo: Tying = {
        standardTying: [{
            frames: [0, 0.5],
            values: [0, 0]
        }, {
            frames: [0.5, 1],
            values: [0, 1]
        }],
        alternativeTying:  [{
            frames: [0, 0.5],
            values: [0, 1]
        }, {
            frames: [0.5, 1],
            values: [1, 1]
        }]
    }


    return (
        <>
            <Knot
                frame={frame}

                moveMin={1.062428}
                moveMax={1.261382168}

                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.WHITE),
                }}

                moveAnimation={useAlternativeTying ? knotOne.alternativeTying : knotOne.standardTying}
                curveKeyframes={[curves_1]}
            />

            <Knot
                frame={frame}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.RED),
                }}
                moveMin={-1.842824}
                moveMax={-1.5565648}

                moveAnimation={useAlternativeTying ? knotTwo.alternativeTying : knotTwo.standardTying}
                curveKeyframes={[curves_0]}
            />
        </>
    )
}
