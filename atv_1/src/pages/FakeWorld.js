import * as THREE from 'three';

import { fabricSphere } from '../components/customSphere';
import fabricScene from '../components/fabricScene';
export default function FakeWorld(app) {
  const { scene, camera, renderer, element, controls } = fabricScene(app);

  const loader = new THREE.TextureLoader();
  loader.load('/textures/space.jpg', (texture) => {
    scene.background = texture;
  });

  const earth = fabricSphere('earth.png');
  const sum = fabricSphere('sum.jpeg', 3);
  const pivot = new THREE.Object3D();

  sum.add(pivot);
  sum.position.set(0, 0, 0);
  earth.position.set(16, 0, 0);
  pivot.add(earth);
  scene.add(sum);

  camera.position.z = 26;
  camera.position.y = 5;

  function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01;
    pivot.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();
  return element;
}
