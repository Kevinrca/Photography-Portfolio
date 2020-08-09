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






// LIGHTBOX
const LIGHTBOX = document.querySelector(".lightbox");
const imageGalerie = document.querySelectorAll(".galerieImage");
const imageGalerieArray = [];

const lightboxImage = document.createElement('img');  // Image dans la lightbox

imageGalerie.forEach( element => {
  const src = element.getAttribute('src');    // Récupère la source de l'image
  imageGalerieArray.push(src);                // Mettre la source de l'image dans l'array
  

  element.addEventListener("click", event => {
    event.preventDefault();

    LIGHTBOX.classList.add("lightboxActive");       // Faire apparaitre la lightbox
    
    lightboxImage.setAttribute("src", src);         // Donner le src de l'image original à l'image de la lightbox

    LIGHTBOX.appendChild(lightboxImage);
  })
});


// Boutons de la lightbox
const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");
const closeButton = document.querySelector(".closeLightbox");


// NEXT BUTTON
nextButton.addEventListener("click", () => {
  // Récuperer la src de l'image actuellement affiché dans la lightbox
  const currentImageSrc = lightboxImage.getAttribute("src"); 

  // Récupérer l'index de l'image actuel dans l'array
  let currentImageIndex = imageGalerieArray.indexOf(currentImageSrc); 


  if(currentImageIndex === imageGalerieArray.length - 1) {
    currentImageIndex = 0;
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
  else {
    currentImageIndex++
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
});



// PREV BUTTON
prevButton.addEventListener("click", () => {
  const currentImageSrc = lightboxImage.getAttribute("src"); 

  // Récupérer l'index de l'image actuel dans l'array
  let currentImageIndex = imageGalerieArray.indexOf(currentImageSrc); 

  if(currentImageIndex === 0) {
    currentImageIndex = imageGalerieArray.length - 1;
    
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
  else {
    currentImageIndex--;
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
});


closeButton.addEventListener("click", () => {
  LIGHTBOX.classList.remove("lightboxActive");

  LIGHTBOX.removeChild(lightboxImage);
});




function nextImage() {
  const currentImageSrc = lightboxImage.getAttribute("src"); 

  // Récupérer l'index de l'image actuel dans l'array
  let currentImageIndex = imageGalerieArray.indexOf(currentImageSrc); 


  if(currentImageIndex === imageGalerieArray.length - 1) {
    currentImageIndex = 0;
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
  else {
    currentImageIndex++
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
}

function prevImage() {
  const currentImageSrc = lightboxImage.getAttribute("src"); 

  // Récupérer l'index de l'image actuel dans l'array
  let currentImageIndex = imageGalerieArray.indexOf(currentImageSrc); 
  
  if(currentImageIndex === 0) {
    currentImageIndex = imageGalerieArray.length - 1;
    
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
  else {
    currentImageIndex--;
    lightboxImage.setAttribute("src", imageGalerieArray[currentImageIndex]);
  }
}



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