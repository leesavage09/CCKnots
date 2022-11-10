import React from 'react'
import { BowlineCurve_1, BowlineCurve_2, BowlineCurve_0 } from './curves/bowline'
import { AnimatedKnotProps, Knot } from '../knot'
import { Vector2 } from 'three'
import { Texture, useRopeMaterial } from '../useRopeMaterial'

export const Bowline: React.FC<AnimatedKnotProps> = ({ frame }) => (
    <Knot
        frame={frame}

        ropeMeshConfig={{
            length: 128,
            radialSegments: 32,
            heightSegments: 400,
            material: useRopeMaterial(new Vector2(2, 100),Texture.WHITE),
        }}

        moveMin={-0.220}
        moveMax={0.163}
        moveAnimation={[{
            frames: [0, 0.200],
            values: [0, 0.260]
        }, {
            frames: [0.700, 1],
            values: [0.260, 1]
        }]}

        curveAnimation={[{
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
        }]}
        curveKeyframes={[BowlineCurve_0, BowlineCurve_1, BowlineCurve_2]}
    />
);
