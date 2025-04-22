import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { fabricSphere } from './components/customSphere';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const element = renderer.domElement;
element.id = 'scene';

document.body.appendChild(element);

const controls = new OrbitControls(camera, element);
controls.update();

var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 0, 0);
spotLight.castShadow = true;
scene.add(spotLight);

const earth = fabricSphere('earth.png');
const sum = fabricSphere('sum.jpeg');
const pivot = new THREE.Object3D();
sum.add(pivot);

sum.position.set(0, 0, 0);
earth.position.set(10, 0, 0);
pivot.add(earth);
scene.add(sum);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);

camera.position.z = 10;

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.01;
  pivot.rotation.y += 0.1;
  renderer.render(scene, camera);
}

animate();
