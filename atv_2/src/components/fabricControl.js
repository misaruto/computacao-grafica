import * as THREE from 'three/webgpu';
import { FlyControls } from 'three/addons/controls/FlyControls.js';
import { TrackballControls } from 'three/addons/controls/TrackballControls.js';
export const fabricControls = (camera, element) => {
  const flyControls = new FlyControls(camera, element);
  flyControls.autoForward = false;
  flyControls.dragToLook = false;
  flyControls.movementSpeed = 100;
  flyControls.rollSpeed = Math.PI / 24;

  const trackballControls = new TrackballControls(camera, element);

  return { flyControls, trackballControls };
};
