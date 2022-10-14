function loco(){
    gsap.registerPlugin(ScrollTrigger);
 

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();
}
loco();



gsap.to("#box1",{
    scale: 1.8,
    duration: 2,
    delay: 1,
})
gsap.to("#box2",{
    scrollTrigger:{
    trigger: "#box2",
    scroller: "#main",
    // markers: true,
    start:"top 35%",
    end: "bottom 60%",
    scrub: "true",
    // duration: 6,
    },
    rotate: 360,
    duration: 5,
})
gsap.to("#box3",{
    scrollTrigger:{
        trigger: "#box3",
        scroller: "#main",
        // markers: true,
        start: "bottom 90%",
        end: "top 5%",
        // scrub: true,
    },
    x: 800,
    duration: 3,
})