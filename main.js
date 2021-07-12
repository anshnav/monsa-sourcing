
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }



  var loaderanim = gsap.timeline();
  loaderanim.fromTo(".loaderbar", 1, { x: 0, opacity: 1}, {delay: 0.5, x: 50, opacity:0});
  loaderanim.fromTo(".overlayloader", 1, {opacity: 1}, {opacity:0, display: 'none'});











var section1anim = gsap.timeline();

section1anim.fromTo(".home-section1-left", 2, {scale: 0.9, opacity: 0}, {scale:1, opacity:1, ease:Expo.easeOut});

section1anim.fromTo(".home-section1-right", 2, {x: 200, opacity: 0, display: 'none'}, {x:0, opacity:1, display: 'flex', ease:Expo.easeOut},'-=1');

section1anim.fromTo(".intro-heading", 0.8, {y: -100, opacity: 0}, {y:0, opacity:1, ease:Expo.easeOut}, '-=1');
section1anim.fromTo(".intro-para", 0.8, {y: -100, opacity: 0}, {y:0, opacity:1}, '-=1');

section1anim.fromTo(".company-intro-wrapper", 0.8, {y: -200, opacity: 0}, {y:0, opacity:1}, '-=1');
section1anim.fromTo(".explore-btn", 0.8, {y: 200, opacity: 0}, {y:0, opacity:1}, '-=1');





gsap.registerPlugin(ScrollTrigger);

const section2anim = gsap.timeline();

section2anim.fromTo(".home-section2-left", 0.8, {opacity: 0}, {opacity: 1});
section2anim.fromTo(".home-section2-right", 0.8, {x: 400, opacity: 0, display: 'none'}, {x: 0, opacity: 1, display: 'flex'});
section2anim.fromTo("#section2heading", 0.8, {y: -100, opacity: 0}, {y: 0, opacity:1});
section2anim.fromTo("#section2para", 0.8, {opacity: 0}, {opacity:1});




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
  section3anim.fromTo(".home-section3-right", 0.8, {x: 400, opacity: 0, display: 'none'}, {x: 0, opacity: 1, display: 'flex'});
  section3anim.fromTo("#section3heading", 0.8, {y: -100, opacity: 0}, {y: 0, opacity:1});
  section3anim.fromTo("#section3para", 0.8, {opacity: 0}, {opacity:1});



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