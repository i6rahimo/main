function getYaMap() {
  if (window.innerWidth >= 992) {
    $("#map").length > 0 && 
    ymaps.ready(function () {
      var o = new ymaps.Map("map", { center: [55.991641, 37.821881], controls: ["zoomControl"], zoom: 12 }, { searchControlProvider: "yandex#search" }),
        e = new ymaps.Placemark([55.987392, 37.925227], { iconCaption: "Вишера", balloonContent: "Московская область, г. Ивантеевка, Санаторный проезд, д.1" });
      o.behaviors.disable("scrollZoom"), o.geoObjects.add(e);
    })
  }
  if (window.innerWidth < 992) {
    $("#map").length > 0 && 
    ymaps.ready(function () {
      var o = new ymaps.Map("map", { center: [55.987392, 37.925227], controls: ["zoomControl"], zoom: 12 }, { searchControlProvider: "yandex#search" }),
        e = new ymaps.Placemark([55.987392, 37.925227], { iconCaption: "Вишера", balloonContent: "Московская область, г. Ивантеевка, Санаторный проезд, д.1" });
      o.behaviors.disable("scrollZoom"), o.geoObjects.add(e);
    })
  }
}