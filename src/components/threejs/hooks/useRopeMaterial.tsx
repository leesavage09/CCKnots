import { useEffect, useState } from 'react';
import { MeshStandardMaterial, RepeatWrapping, Texture, TextureLoader, Vector2 } from "three";

const loader = new TextureLoader();
const _aoMap = loader.load('textures/rope/aoMap.png')
const _roughnessMap = loader.load('textures/rope/roughnessMap.png')
const _normalMap = loader.load('textures/rope/normalMap.png')
const _bumpMap = loader.load('textures/rope/bumpMap.png')

export const whiteTexture = loader.load('textures/rope/map_white.png')
export const redTexture = loader.load('textures/rope/map.png')
export const greenTexture = loader.load('textures/rope/map_green.png')
export const blueTexture = loader.load('textures/rope/map_blue.png')

export const useRopeMaterial = (repeat: Vector2, _map: Texture) => {
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
