var fix = require('..');
var el = document.querySelector('.scrollable');
fix(el);
el.addEventListener('touchend', function(e) {
  console.log(el.scrollTop);
});
el.addEventListener('scroll', function(e) {
  console.log(el.scrollTop);
});
document.querySelector('header').addEventListener('click', function() {
  el.parentNode.removeChild(el);
}, false);
