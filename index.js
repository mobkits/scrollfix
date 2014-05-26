var events = require('event');
var removed = require('removed');

//not draggable
document.addEventListener('touchmove', function(e) {
  e.preventDefault();
});

function ontouchmove(e) {
  e.stopPropagation();
}

function ontouchstart(e) {
  var el = e.currentTarget;
  if (el.scrollTop === 0) {
    el.scrollTop = 1;
  } else if (el.scrollHeight == el.scrollTop + el.offsetHeight) {
    el.scrollTop = el.scrollTop - 1;
  }
}

module.exports = function (el) {
  events.bind(el, 'touchmove', ontouchmove);
  events.bind(el, 'touchstart', ontouchstart);
  removed(el, function () {
    events.unbind(el, 'touchmove', ontouchmove);
    events.unbind(el, 'touchstart', ontouchstart);
  })
}
