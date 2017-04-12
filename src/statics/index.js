(function () {
  var cssSupports = (window.CSS || {}).supports || function () {};

  if (cssSupports('transform-style', 'preserve-3d')) {
    return;
  }

  var sections = document.querySelectorAll('.js_section');
  var targets = document.querySelectorAll('.js_target');

  [].slice.call(targets).forEach(function (target, i) {
    sections[i].appendChild(target);
  });
})();
