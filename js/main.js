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
  // е\и ширина меньше 751
  if (width < 751) {
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
  // е\и ширина меньше 751
  if (width < 751) {
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

// burger. нажатие на кнопку, приписка класса, скролл
// при нажатии на бургер классу header-burger добавиться класс active
$(".header-menu__icon").click(function (event) {
  $(this).toggleClass("active");
  $(".header-burger").toggleClass("active");
  if ($(this).hasClass("active")) {
    $("body").data("scroll", $(window).scrollTop());
  }
  $("body").toggleClass("lock");
  if (!$(this).hasClass("active")) {
    $("body,html").scrollTop(parseInt($("body").data("scroll")));
  }
});

// так как картинка контентная, и часто будет меняться то замена её через css будет не удобна (напр. background). распологаем через html и применяем класс ibg.
// IBG (класс от фри.по.жиз.) - этот класс, через JS, обраб картинку которая, находиться внутри оболочки с этим классом, и делает её фоном, при этом сама картинка в html (можно из кода менять картинку, устанавливать позиционирование css по макету)
// 1:11:38 и 1:17:07 код у фриПоЖиз
function ibg() {
  $.each($(".ibg"), function (index, val) {
    if ($(this).find("img").length > 0) {
      $(this).css({
        "background-image": 'url("' + $(this).find("img").attr("src") + '")',
        // или адрес указать "url('../../img/block_1/01.jpg')",
      });
    }
  });
}
ibg();
// попытка на JS
// function ibg() {
//   var privClass = document.getElementsByClassName("private__image");
//   privClass[0].style.backgroundImage = "url('../../img/block_1/01.jpg')";
//   // if (getPrivClass) {
//   //   var getImgTag = document.body.getElementsByTagName("img");
//   //   var getIbg = document.body.getElementsByClassName("ibg");
// }
// ibg();

// var isMobile = {
//   Android: function () {
//     return navigator.userAgent.match(/Android/i);
//   },
//   BlackBarry: function () {
//     return navigator.userAgent.match(/BlackBarry/i);
//   },
// };
// if (isMobile.any()) {
// }

// if (location.hash) {
//   var hsh = location.hash.replace("#", "");
//   if ($(".popup-" + hsh).length > 0) {
//     popupOpen(hsh);
//   } else if ($("div." + hsh).length > 0) {
//     $("body,html").animate(
//       { scrollTop: $("div." + hsh).offset().top },
//       500,
//       function () {}
//     );
//   }
// }
// $(".wrapper").addClass("loaded");

// var act = "click";
// if (isMobile.iOS()) {
//   var act = "touchstart";
// }

// // ZOOM
// if ($(".gallery").length > 0) {
//   baguetteBox.run(".gallery", {
//     //Custom option
//   });
// }

// // POPUP
// $(".pl").click(function (event) {
//   var pl = $(this).attr("href").replace("#", "");
//   var v = $(this).data("vid");
//   popupOpen(pl, v);
//   return false;
// });
// function popupOpen(pl, v) {
//   $(".popup").removeClass("active").hide();
//   if (!$(".header-menu").hasClass("active")) {
//     $("body").data("scroll", $(window).scrollTop());
//   }
//   if (!isMobile.any()) {
//     $("body")
//       .css({ paddingRight: $(window).outerWidht() - $("wrapper").outerWidht() })
//       .addClass("losk");
//     $(".pdb").css({
//       paddingRight: $(window).outerWidht() - $("wrapper").outerWidht(),
//     });
//   } else {
//     setTimeout(function () {
//       $("body").addClass("losk");
//     }, 300);
//   }
//   history.pushState("", "", "#" + pl);
//   if (v != "" && v != null) {
//     $(".popup-" + pl + " .popup-video__value").html(
//       '<iframe src="https://www.youtube.com/embed/' +
//         v +
//         '?autoplay=1"  allowe="avtoplay; encrypted-media"></iframe>'
//     );
//   }
//   $(".popup-" + pl)
//     .fadeIn(300)
//     .delay(300)
//     .addClass("active");

//   if ($(".popup-" + pl).find(".slick-slider").length > 0) {
//     $(".popup-" + pl)
//       .find(".slick-slider")
//       .slick("setPosition");
//   }
// }
// function openPopupById(popup_id) {
//   $("#" + popup_id)
//     .fadeIn(300)
//     .delay(300)
//     .addClass("active");
// }
// function popupClose() {
//   $(".popup").removeClass("active").fadeOut(300);
//   if (!$(".header-menu").hasClass("active")) {
//     if (!isMobile.any()) {
//       setTimeout(function () {
//         $("body").css({ paddingRight: 0 });
//         $(".pdb").css({ paddingRight: 0 });
//       }, 200);
//       setTimeout(function () {
//         $("body").removeClass("lock");
//         $("body,html").scrollTop(parseInt($("body").data("scroll")));
//       }, 200);
//     } else {
//       $("body").removeClass("lock");
//       $("body,html").scrollTop(parseInt($("body").data("scroll")));
//     }
//   }
//   $(".popup-video__value").html("");

//   history.pushState("", "", window.location.href.split("#")[0]);
// }
// $(".popup-close, .popup__close").click(function (event) {
//   popupClose();
//   return false;
// });
// $(".popup").click(function (e) {
//   if (
//     !$(e.target).is(".popup>.popup-table>.cell *") ||
//     $(e.target).is(".popup-close") ||
//     $(e.target).is("popup__close")
//   ) {
//     popupClose();
//     return false;
//   }
// });
// $(document).on("keydown", function (e) {
//   if (e.which == 27) {
//     popupClose();
//   }
// });

// $(".goto").click(function () {
//   var el = $(this).attr("href").replace("#", "");
//   var offset = 0;
//   $("body,html").animate(
//     { scrollTop: $("." + el).offset().top + offset },
//     500,
//     function () {}
//   );

//   if ($(".header-menu").hasClass("active")) {
//     $(".header-menu,header-menu__icon").removeClass("active");
//   }
//   return false;
// });

// // так как картинка контентная, и часто будет меняться то замена её через css будет не удобна (напр. background). распологаем через html и применяем класс ibg.
// // IBG (класс от фри.по.жиз.) - этот класс, через JS, обраб картинку которая, находиться внутри оболочки с этим классом, и делает её фоном, при этом сама картинка в html (можно из кода менять картинку, устанавливать позиционирование css по макету)
// // function ibg() {
// //   $.each($(".ibg"), function (index, val) {
// //     if ($(this).find("img").length > 0) {
// //       $(this).css(
// //         "background-image",
// //         'url("' + $(this).find("img").attr("src") + '")'
// //       );
// //     }
// //   });
// // }
// // ibg();

// // Клик вне области
// $(document).on("click touchstart", function (e) {
//   if (!$(e.target).is(".select *")) {
//     $(".select").removeClass("active");
//   }
// });

// // UP
// $(window).scroll(function () {
//   var w = $(window).width();
//   if ($(window).scrollTop() > 50) {
//     $("#up").fadeIn(300);
//   } else {
//     $("#up").fadeOut(300);
//   }
// });
// $("#up").clicl(function (event) {
//   $("body,html").animate({ scrollTop: 0 }, 300);
// });

// $("body").on("click", "tab__navitem", function (event) {
//   var eq = $(this).index();
//   if ($(this).hasClass("parent")) {
//     var eq = $(this).parent().index();
//   }
// });

// js-end.js =====================================================================================

