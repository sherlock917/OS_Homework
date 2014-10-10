var gui = require('nw.gui'); 
var win = gui.Window.get();

win.isFullscreen = true;

window.onload = function () {
  // viewLoader();
  eventHandler();
}

function viewLoader () {
  setTimeout(function () {
    $('.start-screen').fadeIn();
  }, 2000);

  setTimeout(function () {
    $('.start-screen').fadeOut();
    $('.main-screen').fadeIn();
  }, 15000);
}

function eventHandler () {
  $$.bind($('.app'), 'click', function (e) {
    var appName = e.target.className.split(' ').pop().split('-').pop();
    App.start(appName);
  });
}