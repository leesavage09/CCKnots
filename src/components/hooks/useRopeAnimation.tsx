import { useEffect, useState } from 'react'
import { convertRange, inRange, TupleRange } from '../rope/support'

export interface AnimatedKnotProps {
    frame: number
}

export type Animation = Array<{
    frames: TupleRange
    values: TupleRange
}>

export const useRopeAnimation = (frame: number, moveAnimation: Animation, curveAnimation?: Animation) => {
    const [moveFrame, setMoveFrame] = useState(0)
    const [curveFrame, setCurveFrame] = useState(0)

    useEffect(() => {
        moveAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setMoveFrame(convertRange(frame, animation.frames, animation.values))
            }
        })

        if (!curveAnimation) setCurveFrame(0)
        else curveAnimation.forEach((animation) => {
            if (inRange(frame, animation.frames)) {
                setCurveFrame(convertRange(frame, animation.frames, animation.values))
            }
        })
    }, [frame])

    return {
        moveFrame,
        curveFrame,
    }

}