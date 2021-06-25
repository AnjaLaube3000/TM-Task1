import Splide from '@splidejs/splide'

document.addEventListener('DOMContentLoaded', function () {

  let basicOptions = {
    type: 'slide',
    perPage: 1,
    rewind: true,
    speed: 1000,
    autoplay: true,
    easing: 'cubic-bezier(.645,.045,.335,1)',
    arrows: true,
    pagination: false,
    interval: 1000 * 5,
    pauseOnHover: false,
    pauseOnFocus: false,
    keyboard: false,
    drag: false,
  };
  let splideOne = new Splide('#one', Object.assign({ isNavigation: true }, basicOptions));
  let splideTwo = new Splide('#two', basicOptions);
  splideOne.sync(splideTwo);
  splideOne.mount();
  splideTwo.mount();
})


// // //event listener for arrows
// const onMouseMove = (e) => {
//   e.target.querySelectorAll('.splide__arrows button').forEach((btn) => {
//     btn.style.left = e.pageX + 'px'
//     btn.style.top = e.pageY + 'px'
//   });
// }
// document.querySelectorAll('.splide').forEach((Sel) => { Sel.addEventListener('mousemove', onMouseMove); })
