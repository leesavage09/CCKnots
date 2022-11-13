import React from 'react'
import { Vector2 } from 'three'
import { AnimatedKnotProps, Animation, useRopeAnimation } from '../../hooks/useRopeAnimation'
import { Rope } from '../rope'
import { Texture, useRopeMaterial } from '../../hooks/useRopeMaterial'
import { curves_0, curves_1 } from './curves/reefKnot'

export const ReefKnot: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const RopeOne = useRopeAnimation(frame, [{
        frames: [0, 1],
        values: [0, 1]
    }])
    const RopeTwo = useRopeAnimation(frame, [{
        frames: [0, 0.439],
        values: [0, 0.3]
    }, {
        frames: [0.439, 1],
        values: [0.3, 0.55]
    }])

    const ropeMeshConfig = {
        length: 50,
        radialSegments: 32,
        heightSegments: 400,
    }

    return (
        <>
            <Rope
                move={{
                    min: 1.35,
                    max: 1.567,
                    frame: RopeOne.moveFrame,
                }}
                curve={{
                    frame: RopeOne.curveFrame,
                    keyframes: [curves_0],
                }}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.GREEN),
                }}
            />

            <Rope
                move={{
                    min: 0.30,
                    max: 0.7,
                    frame: RopeTwo.moveFrame,
                }}
                curve={{
                    frame: RopeTwo.curveFrame,
                    keyframes: [curves_1],
                }}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.BLUE),
                }}
            />
        </>
    )
}
