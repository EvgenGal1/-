// Adaptive function
// скрипт при котором можно один блок при опред разрешении перекинуть внутрь другого блока
$(windows).resize(function (event) {
  adaptive_function();
});
function adaptive_function(w, h) {
  // блок headerMenu
  var headerMenu = $("header-menu");
  // класс языков
  var headerLang = $(".header-top-lang");
  // е\и ширина меньше 768
  if (w < 767) {
    // е\и в языках нет класса done
    if (!headerLang.hasClass("done")) {
      // то блоку headerLang добавит класс "done" и добавить его в блок headerMenu
      headerLang.addClass("done").appendTo(headerMenu);
    }
  } else {
    // е\и в языках есть класса done
    if (headerLang.hasClass("done")) {
      // то блоку headerLang добавит класс "done" и добавить его в начало блока (prepend - `перед именем`) header-top
      headerLang.removeClass("done").prependTo($(".header-top"));
    }
  }
}

// function adaptive_function() {
//   var w = $(window).outerWidth();
//   var h = $(window).outerHeight();
//   adaptive_header(w, h);
// }
// adaptive_function();
