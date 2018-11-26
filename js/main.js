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

  if (!animCount.error) {
    animCount.start();
  } else {
    console.log(animCount.error);
  }
}

//Timer

var

  // store a reference for each element
  _firstEl = $('.first'),
  _secondEl = $('.second'),
  _thirdEl = $('.third'),
  _fourthEl = $('.fourth'),
  _highlightedEls = $('.highlighted'),
  _triggerEl = $('.iniciar'),

  _fps = 60,

  // whole duration in ms
  _duration = 5000, //cambiarThis

  // alert time in ms (from start)
  _alertTime = 4000, //nah

  // the alert CSS class to be added
  _alertClass = 'alert',

  // a reference to the setInterval used later
  _interval,

  /*Dibujo magico*/
  _draw = function(value, total, alertValue, alertClass) {

    // calculates the resulting angle (in degrees)
    var angle = Math.floor((value * 180) / (total / 2));

    // when still on the first half of the transition,
    // just update rotation for the first two semi-circles
    if (angle < 180) {
      _firstEl.css('-webkit-transform', 'rotate(' + (180 + angle) + 'deg)');
      _secondEl.css('-webkit-transform', 'rotate(' + angle + 'deg)');
    }

    // if we have passed half the way, set first and second semi-circles to a fixed rotation
    // and continue animating the two other ones
    else {
      // increment previous calculation
      angle = angle + 180;
      _firstEl.css('-webkit-transform', 'rotate(720deg)');
      _secondEl.css('-webkit-transform', 'rotate(540deg)');
      _thirdEl.css('-webkit-transform', 'rotate(' + (180 + angle) + 'deg)');
      _fourthEl.css('-webkit-transform', 'rotate(' + angle + 'deg)');
    }

    // check if we have reached the alert value, and add the alert class
    if (value >= alertValue) {
      _highlightedEls.addClass(alertClass);
    }

  },

  /**
   * Resets all rotations on the semi-circles.
   */
  _reset = function(alertClass) {
    _firstEl.css('-webkit-transform', '');
    _secondEl.css('-webkit-transform', '');
    _thirdEl.css('-webkit-transform', '');
    _fourthEl.css('-webkit-transform', '');
    _highlightedEls.removeClass(alertClass);
  },

  /**
   * A simple setInterval function, that will trigger the draw() method
   * upon a given fps rate, until reaching a specified duration.
   */
  _go = function(duration, alert, alertClass) {

    // define counter and delay between intervals
    // (miliseconds calculated from previously defined fps rate)
    var count = 0,
      delay = Math.floor(1 / _fps * 1000);

    _interval = window.setInterval(function() {

      // adds to the counter
      count = count + delay;

      // checks if interval is complete, and clears interval
      if (count >= duration) {
        window.clearInterval(_interval);

        setInterval(function() {
          $('.jaid').text("Empezamos!");
          $('#section0').addClass('transit');
        }, 700);

        $('#section0').click(function () {
          fullpage_api.moveSectionDown();
        });
      }

      _draw(count, duration, alert, alertClass);

    }, delay);
  };

_triggerEl.click(function() {
  _reset(_alertClass);
  _go(_duration, _alertTime, _alertClass);
  counter('text-transition', 5, 0, 10);
});

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
