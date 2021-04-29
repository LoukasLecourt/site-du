var menu = document.querySelector(".menu")
var navbar = document.querySelector(".navbar")
var menuLinks = document.querySelectorAll(".menuLink")

menu.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    menu.classList.toggle("showClose")
}

menuLinks.forEach( 
    function(menuLink) { 
      menuLink.addEventListener("click", toggleHamburger) 
    }
)

var menunyr = document.querySelector(".nyroma")
var navbarnyr = document.querySelector(".navbarnyr")
var menuLinksNyr = document.querySelectorAll(".menuLinknyr")

menunyr.addEventListener("click", toggleHamburger2)

function toggleHamburger2(){
    navbarnyr.classList.toggle("showNavNyr")
    menunyr.classList.toggle("showClose")
}

menuLinksNyr.forEach( 
    function(menuLinknyr) { 
      menuLinknyr.addEventListener("click", toggleHamburger2) 
    }
)