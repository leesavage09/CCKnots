import React, { useEffect } from 'react'
import { curves_0 } from './curves/cloveHitch'
import { AnimatedKnotProps, useRopeAnimation } from '../../hooks/useRopeAnimation'
import { Euler, Vector2 } from 'three'
import {  redTexture, useRopeMaterial } from '../../hooks/useRopeMaterial'
import { Rope } from '../rope'
import { useMetalMaterial } from '../../hooks/useMetalMaterial'

export const CloveHitch: React.FC<AnimatedKnotProps> = ({ frame }) => {
    const { moveFrame, curveFrame } = useRopeAnimation(frame, [{
        frames: [0, 1],
        values: [0, 1]
    }])
    const mat = useMetalMaterial();

    useEffect(() => {
      return () => {
        mat?.dispose()
      }
    }, [])

    return (
        <>
            <mesh
                position={[0, 0, -2.5]}
                rotation={new Euler(0, 0, Math.PI / 2)}
                material={mat}
            >
                <cylinderGeometry args={[1.5, 1.5, 30, 40, 1, false]} />
            </mesh>
            <Rope
                move={{
                    min: 0.21,
                    max: 0.51,
                    frame: moveFrame,
                }}
                curve={{
                    frame: curveFrame,
                    keyframes: [curves_0],
                }}
                ropeMeshConfig={{
                    length: 90,
                    radialSegments: 32,
                    heightSegments: 400,
                    material: useRopeMaterial(new Vector2(2, 100), redTexture),
                }}
            />
        </>
    );
};
