function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navItems");
    const navItems = document.querySelectorAll(".pageLinks li");
    const navSocial = document.querySelectorAll(".social");

    burger.addEventListener('click', () => {
        
        //Nav transition
        nav.classList.toggle("navActive");

        //Items transition
        navItems.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navItemsFade 0.5s ease forwards ${index / 11 + 0.1}s`;
            }
        });

        navSocial.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navItemsFade 0.5s ease forwards ${index / 11 + 0.5}s`;
            }
        });


        //Burger transition
        burger.classList.toggle("toggle");
    });
}

navSlide();


// Masonry Grid
var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
        itemSelector: '.grid-item',
        gutter: 8
});







/*

// ANIMATION


var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

*/