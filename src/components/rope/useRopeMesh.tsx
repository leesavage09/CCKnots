import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { CylinderGeometry, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";


export type RopeMeshConfig = {
    length: number
    heightSegments: number
    radialSegments: number
    repeat: Vector2
    color: string
    wireframe?: boolean
}



export const useRopeMesh = (ropeMeshConfig: RopeMeshConfig) => {
    const _aoMap = useLoader(TextureLoader, 'textures/rope/aoMap.jpg');
    const _roughnessMap = useLoader(TextureLoader, 'textures/rope/roughnessMap.jpg');
    const _normalMap = useLoader(TextureLoader, 'textures/rope/normalMap.jpg');
    const _displacementMap = useLoader(TextureLoader, 'textures/rope/displacementMap.png');
    const _map = useLoader(TextureLoader, 'textures/rope/map.jpg');
    const [mesh, setMesh] = useState<Mesh>()
    const [maps, setMaps] = useState<any>()

    useEffect(() => {
        setMaps({
            map: _map.clone(),
            aoMap: _aoMap.clone(),
            roughnessMap: _roughnessMap.clone(),
            normalMap: _normalMap.clone(),
            displacementMap: _displacementMap.clone(),
        })
    }, [])

    useEffect(() => {
        if (!maps) return
        const { map, aoMap, roughnessMap, normalMap, displacementMap } = maps

        aoMap.wrapS = roughnessMap.wrapS = normalMap.wrapS = displacementMap.wrapS = map.wrapS = aoMap.wrapT = roughnessMap.wrapT = normalMap.wrapT = displacementMap.wrapT = map.wrapT = RepeatWrapping
        aoMap.repeat = roughnessMap.repeat = normalMap.repeat = displacementMap.repeat = map.repeat = ropeMeshConfig.repeat

        const materials = [
            new MeshStandardMaterial({
                map: map,
                displacementMap: displacementMap,
                displacementScale: -0.2,
                normalMap: normalMap,
                roughnessMap: roughnessMap,
                aoMap: aoMap,
                color: ropeMeshConfig.color
            }),
            new MeshStandardMaterial({
                wireframe: true,
            })
        ];

        const geometry = new CylinderGeometry(0.4, 0.4, ropeMeshConfig.length, ropeMeshConfig.radialSegments, ropeMeshConfig.heightSegments);
        geometry.rotateZ(Math.PI / 2)

        const ropeMesh = new Mesh(geometry, materials[ropeMeshConfig.wireframe ? 1 : 0])
        setMesh(ropeMesh)
    }, [maps])


    return mesh
}
