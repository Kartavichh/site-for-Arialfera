let center = [59.926206, 30.319434];
function init(){
    let map = new ymaps.Map('map1', {
        center: center,
        zoom: 16
    });

let placemark = new ymaps.Placemark(center, {}, {
    iconLayout: 'default#image'
});
map.geoObjects.add(placemark);
}
ymaps.ready(init);