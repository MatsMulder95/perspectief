function loadCarousel(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav:true,
    margin:20,
    autoHeight : true,
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
    el.style.backgroundImage = 'linear-gradient(270.19deg, rgba(236, 240, 241, 0) -2.75%, #ECF0F1 25.84%, #ECF0F1 48.08%, #ECF0F1 76.13%, rgba(236, 240, 241, 0) 98.9%)';
  });
  document.getElementsByClassName('owl-nav').forEach(function (el) {
    el.style.position = 'absolute';
    el.style.width = '100%';
  });
  document.getElementsByClassName('owl-nav').forEach(function (el) {
    el.style.position = 'absolute';
    el.style.width = '100%';
    el.getElementsByTagName('button').forEach(function (btn) {
      btn.style.fontSize = '2rem'
    })
  })
}

function drawBackground(el, fill, fillWeight, fillStyle, bowing, stroke, strokeWidth, roughness) {
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  var canvas = document.createElement("CANVAS");
  canvas.width = width;
  canvas.height = height;
  const rc = rough.canvas(canvas);
  rc.rectangle(10, 10, width-20, height-20,{
    fill: fill,
    fillWeight: fillWeight,
    fillStyle: fillStyle,
    bowing: bowing,
    stroke: stroke,
    strokeWidth: strokeWidth,
    roughness: roughness,
  });
  el.style.background_size = 'contain';
  el.style.background_repeat = 'no-repeat';
  el.style.background = 'url('+canvas.toDataURL()+')';
}



function rotateLogo(){
  anime({
    targets: [document.getElementById('logo')],
    translateX: 250
  });
}

function switchCarousel(el){
  document.getElementsByClassName(el.getAttribute('carousel')).forEach(function (item){
    item.style.zIndex = 5
    item.style.opacity = 0
  })
  document.getElementsByClassName(el.getAttribute('carousel')+'-controls').forEach(function (item){
    item.classList.remove('active')
  })
  const item = document.getElementById(el.getAttribute('carousel-item'))
  item.style.zIndex = 6
  item.style.opacity = 1
  el.classList.add('active')
}
