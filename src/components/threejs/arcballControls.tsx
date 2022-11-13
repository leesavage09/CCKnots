import { useThree } from "@react-three/fiber";
import { ArcballControls } from "three/examples/jsm/controls/ArcballControls";
import { useEffect } from "react"


export const ArcballControl = () => {
    const { camera, gl } = useThree();


    useEffect(
        () => {
            const controls = new ArcballControls(camera, gl.domElement);

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