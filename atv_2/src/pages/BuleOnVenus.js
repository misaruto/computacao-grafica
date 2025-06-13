import * as THREE from 'three/webgpu';

import { fabricPlanetWithAtmosphere } from '../components/fabricPlanet';
import { fabricScene } from '../components/fabricScene';
import { fabricBuleDeCha } from '../components/buleDeCha';
import { fabricControls } from '../components/fabricControl';
import { fabricCameras } from '../components/fabricCameras';
import { registerResiseListener } from '../listeners/resizeListener';
import { registerKeyListener } from '../listeners/keyListener';

export default function BuleOnVenus(app) {
  const aspectRatio = app.clientWidth / app.clientHeight;
  const { scene, renderer, element } = fabricScene(app);
  const { perspectiveCamera, orthoCamera } = fabricCameras(aspectRatio);

  const { flyControls, trackballControls } = fabricControls(
    perspectiveCamera,
    element
  );

  const clock = new THREE.Clock();
  const state = {
    camera: perspectiveCamera,
    control: flyControls,
    clock: clock,
  };

  const venus = fabricPlanetWithAtmosphere(
    'venus_surface.jpg',
    'venus_atmosphere.jpg',
    100
  );

  const buleDeCha = fabricBuleDeCha();
  const sumLight = new THREE.DirectionalLight(0xffeeaa, 3);

  buleDeCha.scale.set(0.05, 0.05, 0.05);
  sumLight.position.set(1000, 1000, 1000);
  sumLight.target = venus;
  scene.add(venus);
  scene.add(buleDeCha);
  scene.add(sumLight);
  perspectiveCamera.position.z = 500;
  perspectiveCamera.position.y = -50;
  trackballControls.target.copy(venus.position);
  trackballControls.handleResize();

  registerResiseListener(
    app,
    renderer,
    orthoCamera,
    perspectiveCamera,
    trackballControls
  );
  registerKeyListener('o', () =>
    updateState(state, orthoCamera, state.control)
  );
  registerKeyListener('p', () =>
    updateState(state, perspectiveCamera, state.control)
  );
  registerKeyListener('l', () => {
    updateState(state, state.camera, flyControls);
  });
  registerKeyListener('ç', () => {
    updateState(state, state.camera, trackballControls);
    trackballControls.handleResize();
  });

  function animate() {
    requestAnimationFrame(animate);
    const currentCamera = state.camera;
    const currentControl = state.control;
    venus.rotation.y += 0.001;
    currentControl.update(clock.getDelta());

    const offset = new THREE.Vector3(0, -10, -25);
    offset.applyQuaternion(currentCamera.quaternion);
    buleDeCha.position.copy(currentCamera.position).add(offset);
    buleDeCha.quaternion.copy(currentCamera.quaternion);

    renderer.renderAsync(scene, currentCamera);
  }
  animate();
  return element;
}

function updateState(oldState, newCamera, newControl) {
  const oldCamera = oldState.camera;
  const oldControl = oldState.control;
  oldControl.enabled = false;
  newControl.enabled = true;
  const pos = oldCamera.position.clone();
  const look = new THREE.Vector3();
  oldCamera.getWorldDirection(look);

  newCamera.position.copy(pos);
  newCamera.lookAt(pos.clone().add(look));
  newControl.object = newCamera;

  newControl.update(oldState.clock.getDelta());

  oldState.camera = newCamera;
  oldState.control = newControl;
  console.log('Controle atual:', newControl.constructor.name);
  console.log('Camera atual:', newCamera.constructor.name);
}

function updateAxesHelper(scene, oldAxesHelper, size) {
  scene.remove(oldAxesHelper);

  const newAxesHelper = new THREE.AxesHelper(size);
  newAxesHelper.setColors(0xff0000, 0x00ff00, 0x0000ff); // Opcional
  scene.add(newAxesHelper);

  oldAxesHelper = newAxesHelper;
}
