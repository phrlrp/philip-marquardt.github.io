const maskmen = document.querySelector(".maskmen");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const psymbol = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");


const tl = new TimelineMax();

tl.fromTo(maskmen,1, {height: '0%'}, {height: '80%', ease: Power2.easeInOut})
.fromTo(maskmen, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, "-=1.2")
.fromTo(headline, 1.2, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.7")
.fromTo(psymbol, 1.2, {opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.7");
