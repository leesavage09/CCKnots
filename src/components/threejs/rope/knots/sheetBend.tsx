import React from 'react'
import { Vector2 } from 'three'
import { AnimatedKnotProps, Animation, useRopeAnimation } from '../../hooks/useRopeAnimation'
import { Rope } from '../rope'
import { redTexture, useRopeMaterial, whiteTexture } from '../../hooks/useRopeMaterial'
import { curves_0, curves_1 } from './curves/sheetBend'

interface SheetBendProps extends AnimatedKnotProps {
    useAlternativeTying?: boolean
}

type Tying = { standardTying: Animation, alternativeTying: Animation }

export const SheetBend: React.FC<SheetBendProps> = ({ frame, useAlternativeTying }) => {

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
        alternativeTying: [{
            frames: [0, 0.5],
            values: [0, 1]
        }, {
            frames: [0.5, 1],
            values: [1, 1]
        }]
    }


    const RopeOne = useRopeAnimation(frame, useAlternativeTying ? knotOne.alternativeTying : knotOne.standardTying)
    const RopeTwo = useRopeAnimation(frame, useAlternativeTying ? knotTwo.alternativeTying : knotTwo.standardTying)


    return (
        <>
            <Rope
                move={{
                    min: 0.999,
                    max: 1.313,
                    frame: RopeOne.moveFrame,
                }}
                curve={{
                    frame: RopeOne.curveFrame,
                    keyframes: [curves_0],
                }}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), whiteTexture),
                }}
            />

            <Rope
                move={{
                    min: -1.973,
                    max: -1.685,
                    frame: RopeTwo.moveFrame,
                }}
                curve={{
                    frame: RopeTwo.curveFrame,
                    keyframes: [curves_1],
                }}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), redTexture),
                }}
            />
        </>
    )
}
