/**
 *  Menu constructor
 *
 *  @param {button, target} options
 *    button - id of toggling button element
 *    target - id of element to toggle on/off
 */
var Menu = function(options) {
  // cache 'this'
  var toggle = false;
  var button = document.getElementById(options.button);
  var target = document.getElementById(options.target);

  button.addEventListener('click', function(e) {
    toggle = !toggle;
    if (toggle) {
      target.classList.add(options.className);
    } else {
      target.classList.remove(options.className);
    }
  });
};
