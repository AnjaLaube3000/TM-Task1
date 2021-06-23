import Splide from '@splidejs/splide'

document.addEventListener( 'DOMContentLoaded', function () {
  slider_one()
  slider_two()
  // global_carousel__ctrl();
})

function slider_one() {
  const one = new Splide('#one', {
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
}

function slider_two() {
  const one = new Splide('#two', {
    type: 'fade',
    perPage: 1,
    padding: 0,
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
}


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
