var events = require('event');

//not draggable
document.addEventListener('touchmove', function(e) {
  e.preventDefault();
});

function ontouchmove(e) {
  var el = e.currentTarget;
  if (el.scrollHeight > el.clientHeight) {
    e.stopPropagation();
  }
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
}

exports.unbind = function (el) {
  events.unbind(el, 'touchmove', ontouchmove);
  events.unbind(el, 'touchstart', ontouchstart);
}
