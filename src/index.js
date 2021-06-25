import Splide from '@splidejs/splide'

document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#one', {
    type:'slide',
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
    arrows: true,
    // arrowPath: 'public/images/yellow-arrow-left.svg',
    pagination: false
  }).mount().sync(true),

  new Splide ('#two', {
      type: 'slide',
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
      arrows: true,
      // arrowPath: 'public/images/yellow-arrow-right.svg',
      pagination: false
    }).mount().sync(true)

})


// // //event listener for arrows
// let arrow = document.querySelector('button')
// const onMouseMove = (e) => {
//   arrow.style.left = e.pageX + 'px'
//   arrow.style.top = e.pageY + 'px'
// }
// document.addEventListener('mousemove', onMouseMove)


// let circle = document.getElementById('circle');
// const onMouseMove = (e) => {
//   circle.style.left = e.pageX + 'px';
//   circle.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);
