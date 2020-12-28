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

// продолжение на 40:44
