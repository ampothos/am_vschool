var square = document.querySelector(".square")

square.addEventListener('mouseover', e => {
    square.classList.toggle("blue")
})

square.addEventListener('mousedown', e => {
    square.classList.toggle("red")
})

square.addEventListener('mouseup', e => {
    square.classList.toggle("yellow")
})

square.addEventListener('dblclick', e => {
    square.classList.toggle("green")
})

document.querySelector("html").addEventListener('wheel', e => {
    square.classList.toggle("orange")
})