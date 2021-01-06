//??? не работают картинки с этим кодом ???
// function map(n) {
//   google.maps.Map.prototype.setCenterWithOffset = function (
//     latlng,
//     offsetX,
//     offsetY
//   ) {
//     var map = this;
//     var ov = new google.maps.Map.OverlayView();
//     ov.onAdd = function () {
//       var proj = this.getProjection();
//       var aPoint = proj.fromLatLngToCOntainerPixel(latlng);
//       aPoint.x = aPoint.x + offsetX;
//       aPoint.y = aPoint.y + offsetY;
//       map.panTo(proj.fromCOntainerPixelToLatLng(aPoint));
//       // map.setCenter(proj.fromCOntainerPixelToLatLng(aPoint));
//     };
//     ov.draw = function () {};
//     ov.setMap(this);
//   };
//   var markers = new Array();
//   var infowindow = new.google.maps.InfoWindow({
//     // pixelOffset:new google.maps.Size(-230,250)
//   });
//   var location = [[new google.maps.latlng(53.819055, 8813694)]];
//   var options = {
//     zoom: 10,
//     panControl: false,
//     mapTypeControl: false,
//     center: location[0][0],
//     scrollwheel: false,
//     mapTypeId: google.maps.mapTypeId.ROADMAP,
//   };
//   var map = new google.maps.Map(document.getElementById("map"), options);
//   var icon = {
//     url: "img/icons/map.svg",
//     scaledSize: new google.maps.Size(18, 20),
//     anchor: new google.maps.Point(9, 10),
//   };
//   for (var i = 0; i < location.length; i++) {
//     var marker = new google.maps.Marker({
//       // icon:icon,
//       position: location[i][0],
//       map: map,
//     });
//     markers.push(marker);
//   }
// }
// if ($("#map").length > 0) {
//   map();
// }
