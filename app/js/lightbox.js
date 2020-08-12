

const imageGalerie = document.querySelectorAll(".galerieImage");
const imageGalerieArray = [];







class Lightbox {
    
    static initLightbox() {
        imageGalerie.forEach( element => {
            const imageSrc = element.getAttribute('src');
            imageGalerieArray.push(imageSrc);

            element.addEventListener("click", (e) => {
                e.preventDefault();

                let imageIndex = imageGalerieArray.indexOf(e.currentTarget.getAttribute("src"));

                new Lightbox(imageGalerieArray[imageIndex]);
            })
        })
    }
    
    
    constructor(url) {
        this.url = url;
        this.element = this.buildDOM();
        this.image = this.loadImage(this.url);
        document.body.appendChild(this.element);

        this.onKeyUp = this.onKeyUp.bind(this);
        document.addEventListener("keyup", this.onKeyUp);
    }


    buildDOM = () => {
        const lightboxDOM = document.createElement("div");

        lightboxDOM.classList.add("lightbox");

        lightboxDOM.innerHTML = `
            <div class="imageContainer"></div>
        
            <button class="closeLightbox">close</button>

            <div class="nextButton">
                <button class="next">next</button>
            </div>
            <div class="prevButton">
                <button class="prev">prev</button>
            </div>`;
         
        lightboxDOM.querySelector(".closeLightbox").addEventListener("click", this.close.bind(this));
        lightboxDOM.querySelector(".nextButton").addEventListener("click", this.next.bind(this));
        lightboxDOM.querySelector(".prevButton").addEventListener("click", this.prev.bind(this));
        
        return lightboxDOM;
    }

    loadImage = (url) => {
        this.url = null;
        const imageContainer = this.element.querySelector(".imageContainer");
        const image = document.createElement("img");
        this.url = url;

        image.setAttribute("src", url);
        imageContainer.innerHTML = "";
        imageContainer.appendChild(image);
    }


    close = (e) => {
        e.preventDefault();

        this.element.classList.add("fadeOut");
        window.setTimeout(() => {
            this.element.parentElement.removeChild(this.element);
        }, 300);
        document.removeEventListener("keyup", this.onKeyUp);
    }

    next = (e) => {
        e.preventDefault();
        let i = imageGalerieArray.indexOf(this.url);
        
        if(i >= imageGalerieArray.length - 1) {
            i = 0;
            this.loadImage(imageGalerieArray[i]);
        }
        else {
            this.loadImage(imageGalerieArray[i + 1]);
        }
    }

    prev = (e) => {
        e.preventDefault();
        let i = imageGalerieArray.indexOf(this.url);
        
        if(i <= 0) {
            i = imageGalerieArray.length - 1;
            this.loadImage(imageGalerieArray[i]);
        }
        else {
            this.loadImage(imageGalerieArray[i - 1]);
        }
    }

    onKeyUp = (e) => {
        
        if(e.key === "Escape") {
            this.close(e);
        }
        if(e.key === "ArrowRight") {
            this.next(e);
        }
        if(e.key === "ArrowLeft") {
            this.prev(e);
        }
    }

}

Lightbox.initLightbox();
