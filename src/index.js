import 'normalize.css/normalize.css';
import './stylesheets/app.scss';

function initMap(mapElem) {
  var officeLocation = {
    lat: -37.815341,
    lng: 144.958493
  };
  var map = new google.maps.Map(mapElem, {
    zoom: 15,
    center: officeLocation
  });
  var marker = new google.maps.Marker({
    position: officeLocation,
    map: map,
    title: 'Teamsquare'
  });
}

initMap(document.querySelector('#map'));
