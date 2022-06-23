const images = ["img0.jpg","img1.jpg","img2.jpg"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

console.log(bgImage)

bgImage.src=`img/${chosenImage}`

document.body.appendChild(bgImage)

bgImage.setAttribute('id','background')