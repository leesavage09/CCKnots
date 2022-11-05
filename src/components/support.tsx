import { CubicBezierCurve3, CurvePath, Vector3 } from 'three';

export type TupleRange = [number, number]

export type Animation = Array<{
    frames: TupleRange,
    action: (frame: number) => void,
    values: TupleRange
}>

export const convertRange = (value: number, r1: TupleRange, r2: TupleRange) => {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}

export const inRange = (value: number, range: TupleRange) => {
    return value >= range[0] && value <= range[1]
}

const tweenNumber = (a: number, b: number, t: number) => {
    return (1 - t) * a + t * b;
}

const tweenV3 = (a: Vector3, b: Vector3, t: number) => {
    return new Vector3(tweenNumber(a.x, b.x, t), tweenNumber(a.y, b.y, t), tweenNumber(a.z, b.z, t))
}

export const tweenCurves = (a: CurvePath<Vector3>, b: CurvePath<Vector3>, t: number) => {
    if (a.curves.length !== b.curves.length) throw Error("curves must be the same length")

    const curves = a.curves.map((_, idx) => {
        const aCurve: CubicBezierCurve3 = a.curves[idx] as CubicBezierCurve3
        const bCurve: CubicBezierCurve3 = b.curves[idx] as CubicBezierCurve3
        if (aCurve.type !== bCurve.type || aCurve.type !== "CubicBezierCurve3") throw Error("curves must be CubicBezierCurve3 type, a type is:" + aCurve.type + " b type is:" + bCurve.type)

        const v0 = tweenV3(aCurve.v0, bCurve.v0, t);
        const v1 = tweenV3(aCurve.v1, bCurve.v1, t);
        const v2 = tweenV3(aCurve.v2, bCurve.v2, t);
        const v3 = tweenV3(aCurve.v3, bCurve.v3, t);
        return new CubicBezierCurve3(v0, v1, v2, v3)
    })

    const path = new CurvePath<Vector3>();

    curves.map((c) => {
        path.add(c)
    })

    return path
}

export const animate = (animation: Animation, frame: number) => {
    animation.forEach((animation) => {
        if (inRange(frame, animation.frames)) {
            animation.action(convertRange(frame, animation.frames, animation.values))
        }
    })
}
