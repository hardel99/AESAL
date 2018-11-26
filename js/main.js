var setThis = new fullpage('#fullpage');

fullpage_api.setAllowScrolling(false);
fullpage_api.setKeyboardScrolling(true);

var cont = 0;

document.getElementById('section1').addEventListener('click', function() {
  if (cont < 2) {
    fullpage_api.moveSlideRight();
    cont++;
  } else {
    fullpage_api.moveSectionDown();
    cont = 0;
  }
});

var normal = document.getElementsByClassName('sample');

for (var j = 0; j < normal.length; j++) {
  normal[j].addEventListener('click', function() {
    fullpage_api.moveSectionDown();
  });
}

document.getElementById('section4').addEventListener('click', function() {
  if (cont == 0) {
    var x = document.getElementsByClassName('detail');
    var y = document.getElementsByClassName('clima');

    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('switch');
      y[i].classList.add('back');
    }

    cont++;
  } else {
    fullpage_api.moveSectionDown();
    cont = 0;
  }
});

document.getElementById('section3').addEventListener('click', function() {
  if (cont == 0) {
    counter('counting', 0, 342584, 2);
    cont++;
  } else {
    fullpage_api.moveSectionDown();
    cont = 0;
  }
});

//Easing outCubic
var easingFn = function(t, b, c, d) {
  var ts = (t /= d) * t;
  var tc = ts * t;
  return b + c * (tc + -3 * ts + 3 * t);
}

function counter(n, s, e, t) {
  var animCount = new CountUp(n, s, e, 0, t, {
    useEasing: true,
    easingFn: easingFn,
    useGrouping: true,
    separator: ',',
    decimal: '.',
  });

  if(!animCount.error){
    animCount.start();
  } else{
    console.log(animCount.error);
  }
}

/*var animCount = new CountUp('counting', 0, 12000000, 0, 2.5, {
  useEasing: true,
  easingFn: easingFn,
  useGrouping: true,
  separator: ',',
  decimal: '.',
});

if(!animCount.error){
  animCount.start();
} else{
  console.log(animCount.error);
}*/
