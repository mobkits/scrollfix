
//not draggable
document.addEventListener('touchmove', function(e) {
  e.preventDefault();
});

module.exports = function (el) {
  //it could be scrollable;
  el.addEventListener('touchmove', function(e) {
    e.stopPropagation();
  })

  var sy = 0;
  //prevent dragging at top
  el.addEventListener('touchstart', function(e) {
    sy = e.pageY;
    if (el.scrollTop === 0) {
      el.scrollTop = 1;
    } else if (el.scrollHeight == el.scrollTop + el.offsetHeight) {
      el.scrollTop = el.scrollTop - 1;
    }
  })

}
