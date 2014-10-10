var fs = require('fs');

var App = (function () {

  var root = $('.main-screen');

  function loadWindowFrame () {
    var win = document.createElement('div');
    win.className = 'window';
    win.innerHTML = '<div class="window-toolbar"><button class="button window-button window-cancel">X</button><button class="button window-button window-maximize">+</button></div><div class="window-main"></div>';
    root.appendChild(win);
    return win;
  }

  function loadWindowEventHandler(win) {
    $$.bind(win.find('.window-cancel'), 'click', function (e) {
      var win = e.target.parentNode.parentNode;
      win.style.opacity = 0;
      setTimeout(function () {
        root.removeChild(win);
      }, 300);
    });

    $$.bind(win.find('.window-maximize'), 'click', function (e) {
      var win = e.target.parentNode.parentNode;
      if (win.hasClass('window-maximized')) {
        win.css({'width' : '480px', 'height' : '360px', 'margin' : 'auto'});
        win.removeClass('window-maximized');
      } else {
        win.css({'width' : '100%', 'height' : 'calc(100% - 32px)', 'margin' : '0'});
        win.addClass('window-maximized');
      }
    });
  }

  function loadWindowContent (win, appName) {
    fs.readFile('./apps/' + appName + '.html', 'utf-8', function (err, data) {
      if (!err) {
        win.find('.window-main').innerHTML = data;
        win.style.opacity = 1;
      } else {
        console.log(err);
      }
    });
  }

  return {
    start : function (appName) {
      console.log(appName);
      var win = loadWindowFrame();
      loadWindowEventHandler(win);
      loadWindowContent(win, appName);
    }
  }

})();