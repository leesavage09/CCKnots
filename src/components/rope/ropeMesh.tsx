import { CylinderGeometry, Mesh, MeshStandardMaterial, RepeatWrapping, TextureLoader, Vector2 } from "three";

const geometry = new CylinderGeometry(0.3, 0.3, 120, 30, 800);
geometry.rotateZ(Math.PI / 2)

const textureLoader = new TextureLoader();
const texture1 = textureLoader.load('textures/Rope_001_basecolor.jpg');
texture1.wrapS = RepeatWrapping;
texture1.wrapT = RepeatWrapping
texture1.flipY = true
texture1.repeat = new Vector2(1,1)


const material = new MeshStandardMaterial({ map: texture1 });

export const ropeMesh = new Mesh(geometry, material)


ropeMesh.castShadow = true
ropeMesh.receiveShadow = true
