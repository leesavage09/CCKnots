import { useEffect, useState } from 'react';
import { CylinderGeometry, Mesh, MeshStandardMaterial, Vector2 } from "three";
import { useRopeMaterial } from './useRopeMaterial';

export type RopeMeshConfig = {
    length: number
    heightSegments: number
    radialSegments: number
    material?: MeshStandardMaterial
}

export const useRopeMesh = (ropeMeshConfig: RopeMeshConfig) => {
    const [mesh, setMesh] = useState<Mesh>()

    useEffect(() => {
        const geometry = new CylinderGeometry(0.4, 0.4, ropeMeshConfig.length, ropeMeshConfig.radialSegments, ropeMeshConfig.heightSegments);
        geometry.rotateZ(Math.PI / 2)

        const ropeMesh = new Mesh(geometry, ropeMeshConfig.material)
        setMesh(ropeMesh)
    }, [ropeMeshConfig.material])


    return mesh
}
