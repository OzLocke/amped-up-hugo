const nav = document.getElementById('nav');
const navSignup = document.getElementById('nav-signup');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 1 || document.documentElement.scrollTop >= 1 ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");

        navSignup.classList.add("white-on-blue");
        navSignup.classList.remove("teal-on-white");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        
        navSignup.classList.add("teal-on-white");
        navSignup.classList.remove("white-on-blue");
    } 
};