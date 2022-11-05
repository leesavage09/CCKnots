import { useThree } from "@react-three/fiber";
import { useEffect } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const OrbitControl = () => {
    const { camera, gl } = useThree();

    useEffect(
        () => {
            const controls = new OrbitControls(camera, gl.domElement);

            controls.minDistance = 10;
            controls.maxDistance = 70;

            return () => {
                controls.dispose();
            };
        },
        [camera, gl]
    );

    return null;
};