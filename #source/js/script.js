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
