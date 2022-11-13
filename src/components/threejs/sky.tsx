import { useEffect } from "react";
import { useThree } from '@react-three/fiber'
import { Color } from "three";

export const Sky = () => {
    const { scene } = useThree();

    useEffect(() => {
        scene.background = new Color('black');
    }, [])

    return (
        null
    )
}