// заместо не раб карты
var map;
var marker;
function initMap() {
  map = new ymaps.Map("yandexmap", {
    center: [56.039017, 92.894853],
    zoom: 16,
  });
  marker = new ymaps.Placemark([56.039017, 92.894853], {
    hintContent: "Расположение",
    balloonContent: "Это наша организация",
  });
  map.geoObjects.add(marker);
}
ymaps.ready(initMap);
