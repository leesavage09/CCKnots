import React from 'react'
import { BowlineCurve } from './bowlineCurve'
import { Knot } from './knot'
import { ropeMesh } from './ropeMesh'

interface AnimatableKnot {
    animationFrame:number
}

export const Bowline: React.FC<AnimatableKnot> = ({animationFrame}) => {
    return (
        <Knot min={-0.215} max={0.163} animationFrame={animationFrame} curve={BowlineCurve} mesh={ropeMesh} outline={false} />
    )
}
