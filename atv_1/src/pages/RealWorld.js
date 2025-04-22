import * as THREE from 'three';

import { fabriFlatEarth } from '../components/customFlatEarth';
import { fabricSphere } from '../components/customSphere';
import fabricScene from '../components/fabricScene';
import { fabricDome } from '../components/fabricDome';

export default function RealWorld(app) {
  const { scene, camera, renderer, element, controls } = fabricScene(app);

  const loader = new THREE.TextureLoader();
  loader.load('/textures/space.jpg', (texture) => {
    scene.background = texture;
  });
  const dome = fabricDome();
  const earth = fabriFlatEarth();
  const sum = fabricSphere('sum.jpeg', 0.6);
  const pivot = new THREE.Object3D();
  dome.position.set(0, 3, 0);
  pivot.position.set(0, 0, 0);
  sum.position.set(0, 9, 3);
  earth.position.set(0, 0, 0);

  earth.add(dome);
  earth.add(pivot);
  pivot.add(sum);
  scene.add(earth);

  camera.position.z = 20;
  camera.position.y = 5;

  function animate() {
    requestAnimationFrame(animate);
    pivot.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
  return element;
}
