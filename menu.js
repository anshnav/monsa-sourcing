// ----Menu animation----//

var menutl = new TimelineLite({ paused:true });

const drawer = document.getElementById("menu");
const toggle = document.getElementById("toggle");
const closeDrawerBtn = document.getElementById("closebtn");


// if the drawer is open or not
let openDrawer = false;

menutl

    .to(".overlay",{display: 'block'})
    .to(".overlay", 0.3, {y: "0%"})
    .to(".overlay", 0.5, {y: "-100%"})
    .to(drawer, 0.5, {opacity: 1 ,display: 'flex', ease: Expo.easeInOut }, '-=0.5')
    .to("#closebtn", { y: "0%", duration: 0.5, stagger: 0.1, opacity: 1 })
    .to("#menuitem", { y: "0%", duration: 0.5, stagger: 0.1, opacity: 1 }, '-=0.5')
    .to(".menu-address-container", { y: "0%", duration: 1, stagger: 0.1, opacity: 1 }, '-=0.8')
    .to(".menu-contact-details", { y: "0%", duration: 1, stagger: 0.1, opacity: 1 }, '-=0.8')
    .to(".menu-social-follow", { y: "0%", duration: 1, stagger: 0.1, opacity: 1 }, '-=0.8')
    
    .reverse();

toggle.onclick = () => {
    openDrawer = menutl.reversed();
    menutl.reversed( !menutl.reversed() );
    
};

 // --Reverse the menu items animations-//
const reverseDrawerTween = () => {
  menutl.reverse();
    openDrawer = menutl.reversed();
    
};

closeDrawerBtn.onclick = reverseDrawerTween;



// ---Register scrolltrigger plugin----//
gsap.registerPlugin(ScrollTrigger);





//------- make sticky the navigation menu on homepage and not on other pages ------------//
// if(document.URL.indexOf("index.php") >= 0){ 

//     document.getElementById("nav").style.position = "fixed";
//   }else{
//     document.getElementById("nav").style.position = "absolute";
// }

    // var menutextcolor = gsap.timeline();

    // menutextcolor
    // .to('.nav-text', 0.1, {color: 'white'})
    // .to('.lines', 0.1, {background: 'white'});
    
   
   
    // ScrollTrigger.create({
    //   trigger: '.home-section-1',
    //   start: "top top",
    //   end: "bottom top",
      // markers: true,
      // animation: menutextcolor,
      // // scrub: true,
      // toggleActions: 'play none none reverse'
   
      
    // }); 

    
  

  

   

