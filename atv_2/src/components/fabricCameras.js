import * as THREE from 'three/webgpu';
export const fabricCameras = (aspect) => {
  const perspectiveCamera = new THREE.PerspectiveCamera(80, aspect, 0.1, 1000);
  // perspectiveCamera.lookAt(0, 0, 0);

  const orthoCamera = new THREE.OrthographicCamera(
    -10 * aspect,
    10 * aspect,
    10,
    -10,
    0.1,
    1000
  );

  // orthoCamera.lookAt(0, 0, 0);

  return { perspectiveCamera, orthoCamera };
};
