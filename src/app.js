const outer = document.querySelector('.gallery_box_outer');
const cardname = document.querySelector('.card h1');
var elementimg = document.querySelectorAll('.gallery_box_in img');
var wheelcounter = 0;
var counter = 0;

window.addEventListener('load', function () {
  window.addEventListener('wheel', function (e) {
    if (e.wheelDelta === -120) {
      counter -= 40;
      outer.style.transform = `perspective(1300px) rotateX(0deg) rotateY(${counter}deg)`;
    } else {
      function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false);
      }
    }
  });
});

window.addEventListener('load', function () {
  setTimeout(function () {
    cardname.innerText = elementimg[wheelcounter].getAttribute('alt');
  }, 3000);
  window.addEventListener('wheel', function (e) {
    if (e.wheelDelta === -120) {
      wheelcounter += 1;
      if (wheelcounter > 8) {
        wheelcounter = 0;
      }
      cardname.innerText = elementimg[wheelcounter].getAttribute('alt');
    } else {
      function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false);
      }
    }
  });
});
