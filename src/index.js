import Splide from '@splidejs/splide'

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#one', {
    type:'fade',
    perPage: 1,
    // padding:0,
    // gap: 0,
    rewind: true,
    speed: '0.8s',
    autoplay: true,
    easing: 'ease',
    updateOnMove: true,
    // easing: 'cubic-bezier(.645,.045,.335,1)',
    // swipeDistanceThreshold: 150,
    // flickVelocityThreshold: 0.5,
    // flickPower: 500,
    // flickMaxPages: 1,
    arrows: false,
    pagination: false
  }).mount().sync(true),

  new Splide ('#two', {
      type: 'fade',
      perPage: 1,
      // padding: 0,
      // gap: 0,
      rewind: true,
      speed: '0.8s',
      autoplay: true,
      easing: 'ease',
      updateOnMove: true,
      // easing: 'cubic-bezier(.645,.045,.335,1)',
      // swipeDistanceThreshold: 150,
      // flickVelocityThreshold: 0.5,
      // flickPower: 500,
      // flickMaxPages: 1,
      arrows: false,
      pagination: false
    }).mount().sync(true)
  // slider_one()
  // slider_two()
  // global_carousel__ctrl();
})




// function global_carousel__ctrl() {
//   var elms = document.getElementsByClassName("splide");
//   for (var i = 0; i < elms.length; i++) {
//     new Splide(elms[i], {
//       perPage: 1,
//       padding: 0,
//       gap: 0,
//       rewind: true,
//       // width: '1000px',
//       height: '500px',
//       speed: '0.8s',
//       autoplay: true,
//       easing: 'ease',
//       // easing: 'cubic-bezier(.645,.045,.335,1)',
//       arrows: false,
//       pagination: false
//     }).mount();
//   }
// }
