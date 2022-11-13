import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";

export const enum Texture {
    WHITE = 'textures/rope/map_white.png',
    RED = 'textures/rope/map.png',
    GREEN = 'textures/rope/map_green.png',
    BLUE = 'textures/rope/map_blue.png',
}

export const useRopeMaterial = (repeat: Vector2, texture: Texture) => {
    const _aoMap = useLoader(TextureLoader, 'textures/rope/aoMap.png');
    const _roughnessMap = useLoader(TextureLoader, 'textures/rope/roughnessMap.png');
    const _normalMap = useLoader(TextureLoader, 'textures/rope/normalMap.png');
    const _bumpMap = useLoader(TextureLoader, 'textures/rope/bumpMap.png');
    const _map = useLoader(TextureLoader, texture);
    const [material, setMaterial] = useState<MeshStandardMaterial>()
    const [maps, setMaps] = useState<any>()

    useEffect(() => {
        setMaps({
            map: _map.clone(),
            aoMap: _aoMap.clone(),
            roughnessMap: _roughnessMap.clone(),
            normalMap: _normalMap.clone(),
            bumpMap: _bumpMap && _bumpMap?.clone(),
        })
    }, [])

    useEffect(() => {
        if (!maps) return
        const { map, aoMap, roughnessMap, normalMap, bumpMap } = maps

        aoMap.wrapS = roughnessMap.wrapS = normalMap.wrapS = bumpMap.wrapS = map.wrapS = aoMap.wrapT = roughnessMap.wrapT = normalMap.wrapT = bumpMap.wrapT = map.wrapT = RepeatWrapping
        aoMap.repeat = roughnessMap.repeat = normalMap.repeat = bumpMap.repeat = map.repeat = repeat

        setMaterial(new MeshStandardMaterial({
            map: map,
            bumpMap: bumpMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap,
            roughness: 0.5,
            aoMap: aoMap,
        }))
    }, [maps])

    return material
}
