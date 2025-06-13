import * as THREE from 'three/webgpu';

export const fabricPlanetWithAtmosphere = (
  planetTextureUrl,
  atmosphereTextureUrl,
  radius = 50
) => {
  const textureLoader = new THREE.TextureLoader();

  const planetGeometry = new THREE.SphereGeometry(radius, 64, 64);
  const planetMaterial = new THREE.MeshStandardMaterial({
    map: textureLoader.load(`textures/${planetTextureUrl}`),
  });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);

  const atmosphereGeometry = new THREE.SphereGeometry(radius * 1.1, 64, 64); // levemente maior
  const atmosphereMaterial = new THREE.MeshPhongMaterial({
    map: textureLoader.load(`textures/${atmosphereTextureUrl}`),
    transparent: true,
    opacity: 0.4,
    side: THREE.DoubleSide,
  });
  const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);

  const group = new THREE.Group();
  group.add(planet);
  group.add(atmosphere);

  return group;
};
