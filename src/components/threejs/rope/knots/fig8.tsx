import React from 'react'
import { fig8Curve } from './curves/fig8'
import { AnimatedKnotProps, useRopeAnimation } from '../../hooks/useRopeAnimation'
import { Vector2 } from 'three'
import { useRopeMaterial, whiteTexture } from '../../hooks/useRopeMaterial'
import { Rope } from '../rope'

export const fig8: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const { moveFrame, curveFrame } = useRopeAnimation(frame, [{
        frames: [0, 1],
        values: [0, 1]
    }])


    return (
        <>
            <Rope
                move={{
                    min: 0.19,
                    max: 0.55,
                    frame: moveFrame,
                }}
                curve={{
                    frame: curveFrame,
                    keyframes: [fig8Curve],
                }}
                ropeMeshConfig={{
                    length: 90,
                    radialSegments: 32,
                    heightSegments: 400,
                    material: useRopeMaterial(new Vector2(2, 100), whiteTexture),
                }}
            />
        </>
    );
};
