var tl=gsap.timeline()

tl.from("h2",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5
})
tl.from("h4",{
  y:-20,
  opacity:0,
  duration:1,
  delay:0.3,
  stagger:0.2
})
tl.from("h1",{
  opacity:0,
  y:30,
  duration:0.5,
  scale:0.2
})