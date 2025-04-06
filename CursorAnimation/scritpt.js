var main= document.querySelector("#main")

var cursor= document.querySelector("#cursor")

var image= document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
    duration:1,
    ease:"back.out"

  })
})

image.addEventListener("mouseenter",function(){
  gsap.to(cursor,{
    scale:4
  })
})
image.addEventListener("mouseleave",function(){
  gsap.to(cursor,{
    scale:1
  })
})