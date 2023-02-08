const body = document.getElementById("body");
const bright = document.getElementById('bright');
const aside = document.getElementById('aside')
const artSec = document.getElementById('art-sec')
const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("closebtn");
const sidenav = document.getElementById("sidenav");

hamburger.addEventListener('click', () => {
    sidenav.style.width = "64%";
    body.style.background = "rgba(0, 0, 0, .5)";
    bright.style.filter = "brightness(40%)";
    aside.style.filter = 'brightness(40%)';
    artSec.style.filter = 'brightness(40%)';
    });
    
    closebtn.addEventListener('click', () => {
        sidenav.style.width = "0%" ;
        body.style.background = "hsl(36, 100%, 99%)";
        bright.style.filter = "brightness(100%)";
        aside.style.filter = 'brightness(100%)';
        artSec.style.filter = 'brightness(100%)';
    });