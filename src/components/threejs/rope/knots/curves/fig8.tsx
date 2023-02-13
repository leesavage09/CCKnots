import { CubicBezierCurve3, CurvePath, Vector3 } from "three";

    export const fig8Curve = new CurvePath<Vector3>();
    
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( 0.000004, -95.491590, -0.000000 ),
    new Vector3( -0.036328, -62.365231, -0.074933 ),
    new Vector3( 0.299101, -31.582835, -0.168240 ),
    new Vector3( -0.093058, -10.641734, -0.191933 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( -0.093058, -10.641734, -0.191933 ),
    new Vector3( -0.171489, -6.453514, -0.196671 ),
    new Vector3( 0.815348, -5.542721, -0.191933 ),
    new Vector3( -0.483017, 0.080772, -0.191933 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( -0.483017, 0.080772, -0.191933 ),
    new Vector3( -1.607228, 4.949965, -0.191933 ),
    new Vector3( 0.494468, 6.007715, 0.638979 ),
    new Vector3( 1.436187, 5.967302, 0.957697 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( 1.436187, 5.967302, 0.957697 ),
    new Vector3( 3.339206, 5.885635, 1.601760 ),
    new Vector3( 4.314237, 2.500749, 0.627666 ),
    new Vector3( -0.082964, 0.092532, 0.532850 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( -0.082964, 0.092532, 0.532850 ),
    new Vector3( -4.430845, -2.288673, 0.439097 ),
    new Vector3( -4.239867, -5.039544, -0.703338 ),
    new Vector3( -2.127685, -5.794333, -0.935403 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( -2.127685, -5.794333, -0.935403 ),
    new Vector3( -0.573461, -6.349734, -1.106165 ),
    new Vector3( 0.262238, -5.653100, -1.279287 ),
    new Vector3( 0.899296, -3.688951, -1.033271 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( 0.899296, -3.688951, -1.033271 ),
    new Vector3( 1.856814, -0.736777, -0.663501 ),
    new Vector3( 0.472275, -1.354281, 2.382596 ),
    new Vector3( 1.279910, 3.219515, 1.333053 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( 1.279910, 3.219515, 1.333053 ),
    new Vector3( 1.719345, 5.708121, 0.761996 ),
    new Vector3( 1.598457, 5.441872, -0.366402 ),
    new Vector3( 3.436172, 8.303659, -0.614190 )
));
fig8Curve.add(new CubicBezierCurve3(
    new Vector3( 3.436172, 8.303659, -0.614190 ),
    new Vector3( 4.530465, 10.007752, -0.761739 ),
    new Vector3( 4.481333, 11.513960, -1.100559 ),
    new Vector3( 4.431610, 13.739990, -1.238936 )
));
    