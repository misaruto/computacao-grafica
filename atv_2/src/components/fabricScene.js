import * as THREE from 'three/webgpu';

export function fabricScene(app) {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setSize(app.clientWidth, app.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const element = renderer.domElement;
  element.id = 'scene';

  const loader = new THREE.TextureLoader();
  loader.load('textures/space.jpg', (texture) => {
    scene.background = texture;
  });

  const axesHelper = new THREE.AxesHelper(300);
  axesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff);
  scene.add(axesHelper);

  const gridHelper = new THREE.GridHelper(5, 5);
  scene.add(gridHelper);

  return { scene, renderer, element, axesHelper, gridHelper };
}
