var presses = [];
window.addEventListener('keydown', function(evt) {
  presses.push({
    t: Math.round(new Date().getTime() / 1000),
    k: evt.key
  });
});
