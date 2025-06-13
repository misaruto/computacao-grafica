export function registerResiseListener(
  app,
  renderer,
  orthoCamera,
  perpectCamera,
  trackballControls
) {
  const resize = () => {
    const newWidth = app.clientWidth;
    const newHeight = app.clientHeight;
    handlerResizeOrthoCamera(orthoCamera, newWidth, newHeight);
    handlerResizePerspectiveCamera(perpectCamera, newWidth, newHeight);
    renderer.setSize(newWidth, newHeight);
    trackballControls.handleResize();
  };

  window.addEventListener('resize', resize);
  resize();
}

function handlerResizeOrthoCamera(orthoCamera, newWidth, newHeight) {
  const viewSize = 200;
  const aspect = newWidth / newHeight;

  orthoCamera.left = (-viewSize * aspect) / 2;
  orthoCamera.right = (viewSize * aspect) / 2;
  orthoCamera.top = viewSize / 2;
  orthoCamera.bottom = -viewSize / 2;
  orthoCamera.updateProjectionMatrix();
}

function handlerResizePerspectiveCamera(camera, newWidth, newHeight) {
  camera.aspect = newWidth / newHeight;
  console.log(newWidth, newHeight, newWidth / newHeight);

  camera.updateProjectionMatrix();
}
