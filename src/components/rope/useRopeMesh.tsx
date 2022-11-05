import { useLoader } from '@react-three/fiber';
import { CylinderGeometry, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";

export const useRopeMesh = () => {
    const aoMap = useLoader(TextureLoader, 'textures/rope/aoMap.jpg');
    const roughnessMap = useLoader(TextureLoader, 'textures/rope/roughnessMap.jpg');
    const normalMap = useLoader(TextureLoader, 'textures/rope/normalMap.jpg');
    const displacementMap = useLoader(TextureLoader, 'textures/rope/displacementMap.png');
    const map = useLoader(TextureLoader, 'textures/rope/map.jpg');

    aoMap.wrapS = roughnessMap.wrapS = normalMap.wrapS = displacementMap.wrapS = map.wrapS = aoMap.wrapT = roughnessMap.wrapT = normalMap.wrapT = displacementMap.wrapT = map.wrapT = RepeatWrapping
    aoMap.repeat = roughnessMap.repeat = normalMap.repeat = displacementMap.repeat = map.repeat = new Vector2(6, 500)

    const material = new MeshStandardMaterial({
        map: map,
        displacementMap: displacementMap,
        displacementScale: 0.1,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        aoMap: aoMap
    });

    const geometry = new CylinderGeometry(0.4, 0.4, 120, 100, 1000);
    geometry.rotateZ(Math.PI / 2)

    const ropeMesh = new Mesh(geometry, material)
    ropeMesh.castShadow = true
    ropeMesh.receiveShadow = true

    return ropeMesh
}
