// ------ VARIABLE ------ //
let $window = $(window);

// ------ READY FUNCTION ------ //
$(document).ready(function(){
    "use strict"; 
    
    setInterval(timer, 1000);
    setInterval(backgroundColor, 1000);
    setInterval(massage, 1000);
});

        /**************
         == FUNCTION ==
        **************/

// ------ particles.js config ------ //
particlesJS('particle',
  {
    "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "random"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 9,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
  }
);

// ------ CLOCK ------ //
function timer(){
    "use strict";

    let date = new Date();

    let clock = moment(date).format('hh : mm : ss')

    $('#clock').html(clock);

    let hour = date.getSeconds();

    return hour; 
}

// ------ BACKGROUND ------ //
function backgroundColor(){
    "use strict";

    let clock = timer()

    if(clock >= 30){
        $('#background').css({"background-color":"#FB804A",
                              "transition-duration":"5s",
                              "color":"#FFFFFF"
                            });
    } else {
        $('#background').css({"background-color":"#99FBF1",
                              "transition-duration":"5s",
                              "color":"#000000"
                             });
    }

}

function massage(){
  "use strict"

  let $massage = $('#massage');
  let string = $massage.attr('data-element').split(',')

  let clock = timer();
  if(clock >= 30){
    $massage.html(string[0])
  } else{
    $massage.html(string[1])
  }
}


