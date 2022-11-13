import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";

// export const enum Texture {

// }

export const useMetalMaterial = () => {
    const _roughnessMap = useLoader(TextureLoader, 'textures/metal/roughnessMap.jpg');
    const _normalMap = useLoader(TextureLoader, 'textures/metal/normalMap.jpg');
    const _bumpMap = useLoader(TextureLoader, 'textures/metal/bumpMap.jpg');
    const _map = useLoader(TextureLoader, 'textures/metal/map.jpg');
    const [material, setMaterial] = useState<MeshStandardMaterial>()
    const [maps, setMaps] = useState<any>()

    useEffect(() => {
        setMaps({
            map: _map.clone(),
            roughnessMap: _roughnessMap.clone(),
            normalMap: _normalMap.clone(),
            bumpMap: _bumpMap && _bumpMap?.clone(),
        })
    }, [])

    useEffect(() => {
        if (!maps) return
        const { map, roughnessMap, normalMap, bumpMap } = maps

        roughnessMap.wrapS = normalMap.wrapS = bumpMap.wrapS = map.wrapS = roughnessMap.wrapT = normalMap.wrapT = bumpMap.wrapT = map.wrapT = RepeatWrapping
        roughnessMap.repeat = normalMap.repeat = bumpMap.repeat = map.repeat = new Vector2(2, 5)

        setMaterial(new MeshStandardMaterial({
            map: map,
            bumpMap: bumpMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap,
            roughness: 0.5,
        }))
    }, [maps])

    return material
}
