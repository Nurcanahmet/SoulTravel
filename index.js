//  menuyu acma ve kapama islemini yerine getirir.   
const menuBtn = document.getElementById("menu-btn");
const navLinks =  document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


// menu simgesine basarken kontrol eder eger menu aciksa kapanma simgesini gosterir kapliysa menu menunu normal simgeisni gosterir
menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");

});

//menudei bir baglantiya tikladignda meuyu kapatir

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");   // open sinifjni kpatir bu da menuyu kapatir.
    menuBtnIcon.setAttribute("class", "ri-menu-line");  ///menu simgesi normal hale gelir( kapali hale )
});

const scrollRevealOption ={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal().reveal(".header-image img",{
    ...scrollRevealOption,
    origin: "right",
} );

scrollReveal().reveal(".header-content h1",{
    ...scrollRevealOption,
    delay:500,
} );

scrollReveal().reveal(".header-content p",{
    ...scrollRevealOption,
    delay:1000,
} );

scrollReveal().reveal(".header-content form",{
    ...scrollRevealOption,
    delay:1500,
} );

scrollReveal().reveal(".header-content .bar",{
    ...scrollRevealOption,
    delay:2000,
} );

scrollReveal().reveal(".header-image-card",{
    duration:1000,
    interval:500,
    delay:2500,
} );