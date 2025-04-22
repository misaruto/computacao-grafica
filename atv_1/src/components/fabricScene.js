import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export default function fabricScene(app) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    app.clientWidth / app.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(app.clientWidth, app.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const element = renderer.domElement;
  element.id = 'scene';

  const loader = new THREE.TextureLoader();
  loader.load('/textures/space.jpg', (texture) => {
    scene.background = texture;
  });

  const controls = new OrbitControls(camera, element);
  controls.update();

  // const axesHelper = new THREE.AxesHelper(5);
  // axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff);
  // scene.add(axesHelper);

  return { scene, camera, renderer, element, controls };
}

fabricScene.prototype = {};
