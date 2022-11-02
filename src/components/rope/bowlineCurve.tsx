import { CubicBezierCurve3, CurvePath, Vector3 } from "three"

export const BowlineCurve = new CurvePath<Vector3>();

BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-0.931381, 165.787743, -0.300292),
    new Vector3(-0.832493, 101.565353, -0.535896),
    new Vector3(-0.762520, 56.121586, -0.702610),
    new Vector3(-0.678090, 1.288501, -0.903769)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-0.678090, 1.288501, -0.903769),
    new Vector3(-0.708932, -1.146280, -0.903769),
    new Vector3(-2.435531, -1.981714, 1.713394),
    new Vector3(-0.663353, -2.569478, 2.314160)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-0.663353, -2.569478, 2.314160),
    new Vector3(1.129487, -3.164095, 2.921929),
    new Vector3(3.517528, -1.799262, 1.127216),
    new Vector3(3.261527, 0.026803, 0.394295)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(3.261527, 0.026803, 0.394295),
    new Vector3(3.138090, 0.907283, 0.040900),
    new Vector3(2.001310, 1.130502, 0.424490),
    new Vector3(1.046556, 1.075342, 0.396701)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(1.046556, 1.075342, 0.396701),
    new Vector3(-0.368088, 0.993611, 0.355526),
    new Vector3(-1.456303, 0.449712, 0.270431),
    new Vector3(-2.029000, -0.845559, 0.208095)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-2.029000, -0.845559, 0.208095),
    new Vector3(-4.892487, -7.321909, -0.103589),
    new Vector3(-5.475488, -19.354998, -0.160722),
    new Vector3(2.311750, -24.817846, -0.300292)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(2.311750, -24.817846, -0.300292),
    new Vector3(5.050669, -26.739232, -0.349381),
    new Vector3(9.112911, -26.292987, -0.446733),
    new Vector3(10.761617, -23.385043, -0.300292)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(10.761617, -23.385043, -0.300292),
    new Vector3(16.069047, -14.023939, 0.171125),
    new Vector3(2.721774, -12.336980, 0.985883),
    new Vector3(0.718990, 2.266700, 1.223782)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(0.718990, 2.266700, 1.223782),
    new Vector3(0.494999, 3.899978, 1.250388),
    new Vector3(0.178306, 4.438339, -1.675336),
    new Vector3(-0.872541, 4.370861, -1.626841)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-0.872541, 4.370861, -1.626841),
    new Vector3(-2.022139, 4.297040, -1.573789),
    new Vector3(-1.591814, 2.838498, 0.298723),
    new Vector3(-1.145646, 1.597480, 0.792350)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(-1.145646, 1.597480, 0.792350),
    new Vector3(0.734124, -3.631097, 2.872066),
    new Vector3(-0.155911, -4.823557, 0.126288),
    new Vector3(2.767694, -8.935914, -0.300292)
));
BowlineCurve.add(new CubicBezierCurve3(
    new Vector3(2.767694, -8.935914, -0.300292),
    new Vector3(5.312546, -12.515516, -0.671608),
    new Vector3(12.045713, -21.700639, -1.914457),
    new Vector3(14.969318, -25.812996, -2.341036)
));

