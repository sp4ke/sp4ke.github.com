// Generated by CoffeeScript 1.8.0
(function() {
  angular.module('myApp.directives', []).directive('appVersion', [
    'version', function(version) {
      return function(scope, elm, attrs) {
        return elm.text(version);
      };
    }
  ]).directive('hoverShow', function() {
    return {
      link: function(scope, elm, attrs) {
        elm.bind('mouseover', {
          attrs: attrs
        }, function(ev) {
          return elm.closest('.projects').find('.' + ev.data.attrs.hoverShow).show();
        });
        return elm.bind('mouseout', {
          attrs: attrs
        }, function(ev) {
          return elm.closest('.projects').find('.' + ev.data.attrs.hoverShow).hide();
        });
      }
    };
  }).directive('customScroll', function() {
    return {
      link: function(scoe, elm, attrs) {
        return $(elm).mCustomScrollbar({
          theme: 'dark-2'
        });
      }
    };
  }).directive('copyToClipboard', function() {
    return {
      link: function(scope, elm, attrs) {
        return elm.bind('click', function() {
          return window.prompt('You can safely copy&past my bitcoin address :-)', elm.text());
        });
      }
    };
  }).directive('carousel', function() {
    return {
      scope: {
        carousel: '='
      },
      link: function(scope, elm, attrs) {
        var cIndex, carousel, img;
        carousel = scope.carousel;
        img = elm.find('img')[1];
        cIndex = 0;
        img.src = carousel[cIndex];
        return setInterval(function() {
          $(img).toggleClass('fadeIn fadeOut');
          setTimeout(function() {
            return $(img).hide();
          }, 100);
          if (cIndex < carousel.length - 1) {
            cIndex += 1;
          } else {
            cIndex = 0;
          }
          return setTimeout(function() {
            img.src = carousel[cIndex];
            $(img).toggleClass('fadeOut fadeIn');
            return $(img).show();
          }, 200);
        }, 4500);
      }
    };
  });

}).call(this);
