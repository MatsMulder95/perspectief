function loadCarousel(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav:true,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  })
  document.getElementsByClassName('owl-stage-outer').forEach(function (el) {
    el.style.backgroundColor = '#ECF0F1'
  });
  document.getElementsByClassName('owl-nav').forEach(function (el) {
    el.style.position = 'absolute';
    el.style.width = '100%';
  })
  document.getElementsByClassName('owl-nav').forEach(function (el) {
    el.style.position = 'absolute';
    el.style.width = '100%';
    el.getElementsByTagName('button').forEach(function (btn) {
      btn.style.fontSize = '2rem'
    })
  })
}
