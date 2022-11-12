import bpy

output=''
myCurves = [bpy.data.curves[9],bpy.data.curves[10]]
for i in range(len(myCurves)):
    spline= myCurves[i].splines[0]
    scale = 3
    curvepath_template = """
    export const curves_"""+str(i)+""" = new CurvePath<Vector3>();
    %s
    """ 
    curve_template = """\ncurves_"""+str(i)+""".add(new CubicBezierCurve3(%s\n));""" 
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
            
    output = output+curvepath_template % ''.join(curves)

with open('blender_curve_output.txt', 'w') as f:
    f.write('import { CubicBezierCurve3, CurvePath, Vector3 } from "three";\n'+output)