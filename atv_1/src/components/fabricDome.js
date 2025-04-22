import * as THREE from 'three';

export const fabricDome = () => {
  const domeGeometry = new THREE.SphereGeometry(
    8, // radius
    64, // widthSegments
    64, // heightSegments
    0, // phiStart
    Math.PI * 2, // phiLength
    0, // thetaStart
    Math.PI / 2 // thetaLength (meia esfera)
  );

  const domeMaterial = new THREE.MeshStandardMaterial({
    color: 0x88ccee,
    side: THREE.BackSide, // renderizar por dentro
    transparent: true,
    opacity: 0.5,
  });

  return new THREE.Mesh(domeGeometry, domeMaterial);
};
