function loadCarousel(){
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    dots: false,
    nav:true,
    margin:20,
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

function rotateLogo() {
  var $elem = $("#logo-rotation");

  $({deg: 0}).animate({deg: -360}, {
    duration: 500,
    step: function(now) {
      // in the step-callback (that is fired each step of the animation),
      // you can use the `now` paramter which contains the current
      // animation-position (`0` up to `angle`)
      $elem.css({
        transform: 'rotate(' + now + 'deg)'
      });
    }
  });

}

