import * as THREE from 'three';
const loader = new THREE.TextureLoader();

export const fabricSphere = (textureName, radius = undefined) => {
  const texture = loader.load(`/textures/${textureName}`);
  const geometry = new THREE.SphereGeometry(radius);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
  });
  return new THREE.Mesh(geometry, material);
};
