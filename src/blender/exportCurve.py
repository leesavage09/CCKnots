import bpy

myCurve = bpy.data.curves[0]
spline= myCurve.splines[0]
scale = 3
curvepath_template = """
var curves = new CurvePath<Vector3>();
%s
""" 
curve_template = """\ncurves.add(new CubicBezierCurve3(%s\n));""" 
vector3_template = """\n    new Vector3( %f, %f, %f ),"""
def makecurve(*vectors):
    vector3_string = ''
    for vector in vectors:
        vector3_string = vector3_string + vector3_template % (
            vector[0]*scale,
            vector[1]*scale,
            vector[2]*scale)
    return vector3_string

curves = []
for x in range(len(spline.bezier_points)-1):
    curves.append(curve_template % makecurve(spline.bezier_points[x].co
        ,spline.bezier_points[x].handle_right
        ,spline.bezier_points[x+1].handle_left
        ,spline.bezier_points[x+1].co)[:-1])
        
output = curvepath_template % ''.join(curves)
print(output)
with open('blender_curve_output.txt', 'w') as f:
    f.write(output)