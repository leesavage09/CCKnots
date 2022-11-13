import React from 'react'
import { BowlineCurve_1, BowlineCurve_2, BowlineCurve_0 } from './curves/bowline'
import { AnimatedKnotProps, useRopeAnimation } from '../../hooks/useRopeAnimation'
import { Vector2 } from 'three'
import { Texture, useRopeMaterial } from '../../hooks/useRopeMaterial'
import { Rope } from '../rope'

export const Bowline: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const { moveFrame, curveFrame } = useRopeAnimation(frame, [{
        frames: [0, 0.200],
        values: [0, 0.260]
    }, {
        frames: [0.700, 1],
        values: [0.260, 1]
    }], [{
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
    }])

    return (
        <Rope
            move={{
                min: -0.220,
                max: 0.163,
                frame: moveFrame,
            }}
            curve={{
                frame: curveFrame,
                keyframes: [BowlineCurve_0, BowlineCurve_1, BowlineCurve_2],
            }}
            ropeMeshConfig={{
                length: 128,
                radialSegments: 32,
                heightSegments: 400,
                material: useRopeMaterial(new Vector2(2, 100), Texture.WHITE),
            }}
        />
    );
};
