export function registerKeyListener(key, callback) {
  window.addEventListener('keydown', (event) => {
    if (
      event.key === String(key).toUpperCase() ||
      event.key === String(key).toLowerCase()
    )
      callback();
  });
}
