import 'normalize.css/normalize.css';
import './stylesheets/app.scss';
import smoothScroll from 'smoothscroll';

// Enable smooth scroll
document.querySelectorAll('[data-scroll-target]').forEach(elem => {
  elem.addEventListener('click', e => {
    if (e.target.matches('a')) {
      var targetElem = document.querySelector(e.target.dataset['scrollTarget']);
      smoothScroll(targetElem);
    }
  });
});

// Toggle sticky nav on scroll
var navbar = document.querySelector('nav');
window.addEventListener('scroll', e => {
  if (window.scrollY > navbar.offsetTop + navbar.clientHeight) {
    navbar.classList.add('fixed');
  }
  else {
    navbar.classList.remove('fixed');
  }
});

// Show modal on click
var modalOverlay = document.querySelector('.modal-overlay');
document.querySelector('button#call-to-action')
  .addEventListener('click', e => {
    modalOverlay.classList.add('open');
  });

modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove('open');
  }
});

document.querySelector('button.modal-close').addEventListener('click', e => {
  modalOverlay.classList.remove('open');
});

// Initialize map
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
