import * as THREE from 'three/webgpu';
import { TeapotGeometry } from 'three/addons/geometries/TeapotGeometry.js';

export const fabricBuleDeCha = () => {
  const geometry = new TeapotGeometry(60, 32, true, true, true, false, false); // mais suave

  return new THREE.Mesh(
    geometry,
    new THREE.MeshStandardMaterial({
      color: 0xb0b0b0,
      metalness: 0.8,
      roughness: 0.2,
    })
  );
};
