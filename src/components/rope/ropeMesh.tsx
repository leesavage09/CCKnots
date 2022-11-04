import { CylinderGeometry, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";

const geometry = new CylinderGeometry(0.4, 0.4, 120, 100, 1000);
geometry.rotateZ(Math.PI / 2)

const textureLoader = new TextureLoader();
const repeat = new Vector2(6, 500);

const aoMap = textureLoader.load('textures/Rope_001_ambientOcclusion.jpg');
aoMap.wrapS = RepeatWrapping;
aoMap.wrapT = RepeatWrapping
aoMap.repeat = repeat

const roughnessMap = textureLoader.load('textures/Rope_001_roughness.jpg');
roughnessMap.wrapS = RepeatWrapping;
roughnessMap.wrapT = RepeatWrapping
roughnessMap.repeat = repeat

const normalMap = textureLoader.load('textures/Rope_001_normal.jpg');
normalMap.wrapS = RepeatWrapping;
normalMap.wrapT = RepeatWrapping
normalMap.repeat = repeat

const displacementMap = textureLoader.load('textures/Rope_001_height.png');
displacementMap.wrapS = RepeatWrapping;
displacementMap.wrapT = RepeatWrapping
displacementMap.repeat = repeat

const map = textureLoader.load('textures/Rope_001_basecolor.jpg');
map.wrapS = RepeatWrapping;
map.wrapT = RepeatWrapping
map.repeat = repeat


const material = new MeshStandardMaterial({
    map: map,
    displacementMap: displacementMap,
    displacementScale: 0.1,
    normalMap: normalMap,
    roughnessMap: roughnessMap,
    aoMap:aoMap
});

export const ropeMesh = new Mesh(geometry, material)

ropeMesh.castShadow = true
ropeMesh.receiveShadow = true
