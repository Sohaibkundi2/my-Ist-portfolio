// making mobile responsive nav bar and tougle
let barIcon = document.querySelector(".three_lines")
let crossIcon = document.querySelector(".cross")

let tl = gsap.timeline()
tl.from(".full",{
    duration:.6,
    opacity:0,
    x:400,
    delay:.5,
    display:"none"
})
tl.from(".mobile_content li",{
    duration:.6,
    opacity:1,
    x:400,
    stagger: 0.2,
})
tl.pause()
barIcon.addEventListener("click",()=>{
    tl.play()
})
crossIcon.addEventListener("click",()=>{
    tl.reverse()
})

// nav bar

let tl1 = gsap.timeline();

tl1.from(".nav_logo", {
  delay: 0.5,
  opacity: 0,
  y: -20,
  color: "#ff9900",
});

tl1.from(".nav_content li", {
  opacity: 0,
  y: -20,
  color: "#ff9900",
  duration: 1,
  stagger: 0.3,
});

let tl2 = gsap.timeline();

tl2.from(".hero_img img", {
  duration: 1,
  x: -100,
  opacity: 0,
});