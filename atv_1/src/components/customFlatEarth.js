import * as THREE from 'three';
const loader = new THREE.TextureLoader();

export const fabriFlatEarth = () => {
  const terraPlana = loader.load('/textures/Flat_earth.png');
  const terra = loader.load('/textures/terra.jpg');
  const neve = loader.load('/textures/snow.jpg');
  const geometry = new THREE.CylinderGeometry(8, 3, 6, 64, 128, false);

  const materials = [
    new THREE.MeshBasicMaterial({ map: neve }), // lateral
    new THREE.MeshBasicMaterial({ map: terraPlana }), // topo
    new THREE.MeshBasicMaterial({ map: terra }), // base
  ];

  return new THREE.Mesh(geometry, materials);
};
