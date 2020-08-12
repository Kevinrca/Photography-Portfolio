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