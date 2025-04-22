import * as THREE from 'three';
const loader = new THREE.TextureLoader();

export const fabricSphere = (textureName) => {
  const texture = loader.load(`../public/assets/textures/${textureName}`);
  const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  return new THREE.Mesh(geometry, material);
};
