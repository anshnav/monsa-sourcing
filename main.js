

// ---Disable scroll on webpages for 2 seconds for preloader screen to fadeout--//

document.onload = myfunction();

function myfunction() {
  var enablescroll = gsap.timeline();
  enablescroll.to("body", {overflow: 'scroll'},'+=2');
}

// Fadeout Loader screen with jquery
// $(window).on("load",function(){
//   $("#overlayloader").fadeOut("slow");
// });
// Scroll to top on reload of homepage

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
//   }

$(function(){
  $("#nav-placeholder-menu2").load("menu-2.html");
});


// Jquery code to include navigation in all the pages
$(function(){
  $("#nav-placeholder").load("menu.html");
});

// Jquery code to include footer in all pages
$(function(){
  $("#foot-placeholder").load("footer.html");
});

// Jquery code to include footer2 in all pages
$(function(){
  $("#foot2-placeholder").load("footer-2.html");
});


// ---Black overlay loader animation
  var loaderanim = gsap.timeline();
  loaderanim.fromTo(".loaderbar", 1, { x: 0, opacity: 1}, {delay: 0.5, x: 50, opacity:0});
  loaderanim.fromTo(".overlayloader", 1, {opacity: 1}, {opacity:0, display: 'none'});
  


var section1anim = gsap.timeline();

section1anim.fromTo(".home-section1-left", 2, {scale: 0.9, opacity: 0}, {scale:1, opacity:1, ease:Expo.easeOut});

section1anim.fromTo(".home-section1-right", 2, { opacity: 0, display: 'none'}, {opacity:1, display: 'flex', ease:Expo.easeOut},'-=1');

section1anim.fromTo(".intro-heading", 0.8, {y: -100, opacity: 0}, {y:0, opacity:1, ease:Expo.easeOut}, '-=1');
section1anim.fromTo(".intro-para", 0.8, {y: -100, opacity: 0}, {y:0, opacity:1}, '-=1');

section1anim.fromTo(".company-intro-wrapper", 0.8, {y: -200, opacity: 0}, {y:0, opacity:1}, '-=1');
section1anim.fromTo(".explore-btn", 0.8, {y: 200, opacity: 0}, {y:0, opacity:1}, '-=1');





gsap.registerPlugin(ScrollTrigger);

const section2anim = gsap.timeline();

section2anim.fromTo(".home-section2-left", 0.8, {opacity: 0}, {opacity: 1});
section2anim.fromTo(".home-section2-right", 0.8, {opacity: 0, display: 'none'}, {opacity: 1, display: 'flex'});
section2anim.fromTo("#section2heading", 0.8, {y: -100, opacity: 0}, {y: 0, opacity:1}, '-=0.5');
section2anim.fromTo("#section2para", 0.8, {y: -30, opacity: 0}, {y: 0, opacity:1});
section2anim.fromTo("#section2btn", 0.8, { opacity: 0}, {opacity:1}, '-=0.5');




ScrollTrigger.create({
    trigger: ".home-section-2",
    animation: section2anim,
    // markers: true,
    start: "top center",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
  });



  const section3anim = gsap.timeline();

  section3anim.fromTo(".home-section3-left", 0.8, {opacity: 0}, {opacity: 1});
  section3anim.fromTo(".home-section3-right", 0.8, {opacity: 0, display: 'none'}, {opacity: 1, display: 'flex'});
  section3anim.fromTo("#section3heading", 0.8, {y: -100, opacity: 0}, {y: 0, opacity:1}, '-=0.5');
  section3anim.fromTo("#section3para", 0.8, {y: -30, opacity: 0}, {y: 0, opacity:1});
  section2anim.fromTo("#section3btn", 0.8, { opacity: 0}, {opacity:1});


ScrollTrigger.create({
    trigger: ".home-section-3",
    animation: section3anim,
    // markers: true,
    start: "top center",
    // end: "top 100px",
    // toggleClass: "active",
    // pin: true,
    // scrub: 1,
  });




// ---Register the scrollto plugin
//   gsap.registerPlugin(ScrollToPlugin);


// document.getElementById('explorebtn').onclick = function() {scrolldown()};



// function scrolldown(){

//   gsap.to(window, {duration: 1, scrollTo: "#section2"});
// }




// Jquery code to scroll to section
$("#explorebtn").click(function() {
  $('html, body').animate({
      scrollTop: $("#section2").offset().top
  }, 500);
});



// ---Fadein animation for content----//


const reveal = gsap.utils.toArray('.fadein');

reveal.forEach((fadein, i) => {
  const anim = gsap.fromTo(fadein, {autoAlpha: 0, y: 50}, {duration: 2, autoAlpha: 1, y: 0});
  ScrollTrigger.create({
    trigger: fadein,
    start: "top bottom",
    animation: anim,
    toggleActions: 'play none none none'
    
  });
});