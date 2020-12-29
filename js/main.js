// main.js =====================================================================================
// сбор всех JS скриптов проекта
// @prepros-append jq-start.js;
// @prepros-append responsive.js;
// @prepros-append forms.js;
// @prepros-append script.js;
// @prepros-append jq-end.js;

// js-start.js =====================================================================================

// responsive.js =====================================================================================
// Adaptive function
// скрипт при котором можно один блок при опред разрешении перекинуть внутрь другого блока

// эл-ам window привязываем JavaScript обработчик событий "resize" (срабатывает при изменении размеров окна браузера), и запускает function adaptive_function с переданым параметром `окно. внутренняя ширина`
$(window).resize(function (event) {
  adaptive_function(window.innerWidth);
});
// запуск функции со слушателем изменения экрана без jQuery. тоже самое что с вурху
// window.onresize = function (event) {
//   adaptive_function(window.innerWidth);
// };

function adaptive_function(width) {
  // блок скрытого бургера
  var headerBurger = $(".header-burger");
  // класс языков
  var headerLang = $(".header-top-lang");
  // класс меню
  var headerMenu = $(".header-bottom-menu");
  // е\и ширина меньше 767
  if (width < 767) {
    // е\и в языках нет класса done
    if (!headerLang.hasClass("done")) {
      // то блоку header-top-lang добавит класс "done" и добавить его в блок header-burger
      headerLang.addClass("done").appendTo(headerBurger);
    }
  } else {
    // е\и в языках есть класса done
    if (headerLang.hasClass("done")) {
      // то у блока headerLang добавит класс "done" и добавить его в начало блока (prepend - `перед именем`) header-top
      headerLang.removeClass("done").prependTo($(".header-top"));
    }
  }
  // е\и ширина меньше 767
  if (width < 767) {
    // е\и у меню нет класса done
    if (!headerMenu.hasClass("done")) {
      // то блоку header-bottom-menu добавит класс "done" и добавить его в блок header-burger
      headerMenu.addClass("done").appendTo(headerBurger);
    }
  } else {
    // перебираем все элементы each (перебор `каждого` элем. коллекции jQuery, выполняя при этом функцию для каждого из них)
    $.each(headerMenu, function (index, val) {
      // е/и у эл. класс --right
      if ($(this).hasClass("header-bottom-menu--right")) {
        // е/и есть класс done
        if ($(this).hasClass("done")) {
          // у этих эл.
          $(this)
            //удалить done
            .removeClass("done")
            // и переместить в header-bottom__column в позицию 3 (так как индекс 2, счёт 3)
            .prependTo($(".header-bottom__column").eq(2));
        }
      } else {
        // е/и
        if ($(this).hasClass("done")) {
          $(this)
            //удалить done
            .removeClass("done")
            // и переместить в header-bottom__column в позицию 1 (так как индекс 0, счёт 1)
            .prependTo($(".header-bottom__column").eq(0));
        }
      }
    });
  }
}

// function adaptive_function() {
//   var w = $(window).outerWidth();
//   var h = $(window).outerHeight();
//   adaptive_header(w, h);
// }
// adaptive_function();

// forms.js =====================================================================================

// script.js =====================================================================================
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBarry: function () {
    return navigator.userAgent.match(/BlackBarry/i);
  },
};
if (isMobile.any()) {
}

if (location.hash) {
  var hsh = location.hash.replace("#", "");
  if ($(".popup-" + hsh).length > 0) {
    popupOpen(hsh);
  } else if ($("div." + hsh).length > 0) {
    $("body,html").animate(
      { scrollTop: $("div." + hsh).offset().top },
      500,
      function () {}
    );
  }
}
$(".wrapper").addClass("loaded");

var act = "click";
if (isMobile.iOS()) {
  var act = "touchstart";
}

$(".header-menu__icon").click(function (event) {
  $(this).toggleClass("active");
  $(".header-menu").toggleClass("active");
  if ($(this).hasClass("active")) {
    $("body").data("scroll", $(window).scrollTop());
  }
  $("body").toggleClass("lock");
  if (!$(this).hasClass("active")) {
    $("body,html").scrollTop(parseInt($("body").data("scroll")));
  }
});

// ZOOM
if ($(".gallery").length > 0) {
  baguetteBox.run(".gallery", {
    //Custom option
  });
}

// POPUP
$(".pl").click(function (event) {
  var pl = $(this).attr("href").replace("#", "");
  var v = $(this).data("vid");
  popupOpen(pl, v);
});

// js-end.js =====================================================================================

