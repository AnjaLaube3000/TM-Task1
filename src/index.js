import Splide from '@splidejs/splide'
// new Splide('.splide').mount();

document.addEventListener( 'DOMContentLoaded', function () {
  // new Splide('.splide').mount();
  new Splide('.splide', {
    type:'fade',
    perPage: 1,
    padding:0,
    gap: 0,
    rewind: true,
    // width: '1000px',
    height: '500px',
    speed: '0.8s',
    autoplay: true,
    easing: 'ease',
    // easing: 'cubic-bezier(.645,.045,.335,1)',
    arrows: false,
    pagination: false

  }).mount()


})
