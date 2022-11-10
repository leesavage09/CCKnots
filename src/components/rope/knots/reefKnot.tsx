import React from 'react'
import { Vector2 } from 'three'
import { AnimatedKnotProps, Knot, Animation } from '../knot'
import { Texture, useRopeMaterial } from '../useRopeMaterial'
import { curves_0, curves_1 } from './curves/reefKnot'

export const ReefKnot: React.FC<AnimatedKnotProps> = ({ frame }) => {

    const ropeMeshConfig = {
        length: 50,
        radialSegments: 32,
        heightSegments: 400,
    }

    return (
        <>
            <Knot
                frame={frame}

                moveMin={1.35}
                moveMax={1.567  }

                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.GREEN),
                }}

                moveAnimation={[{
                    frames: [0, 1],
                    values: [0, 1]
                }]}
                curveKeyframes={[curves_0]}
            />

            <Knot
                frame={frame}
                ropeMeshConfig={{
                    ...ropeMeshConfig,
                    material: useRopeMaterial(new Vector2(2, 50), Texture.BLUE),
                }}
                moveMin={0.30}
                moveMax={0.7}

                moveAnimation={[{
                    frames: [0, 0.439],
                    values: [0, 0.3]
                },{
                    frames: [0.439, 0.968],
                    values: [0.3, 0.55]  
                }]}
                curveKeyframes={[curves_1]}
            />
        </>
    )
}
