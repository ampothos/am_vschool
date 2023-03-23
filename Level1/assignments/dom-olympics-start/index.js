let head = document.querySelector("header")

head.textContent = "JavaScript Made This!!"

let messagelist = document.querySelectorAll(".message")
messagelist[0].textContent = "I have something very silly to talk about"
messagelist[1].textContent = "I love silly stuff"
messagelist[3].textContent = "Actually, I'm just a simple farmer, tending to my memes"


document.getElementById("clear-button").addEventListener("click", () => {
    for(let m of messagelist) {
        m.textContent = ""
    }
})

let dropdown = document.getElementById("theme-drop-down")
dropdown.addEventListener("change", e => {
    e.preventDefault()
    let left = document.getElementsByClassName("left")
    let right = document.getElementsByClassName("right")

    if (e.value == "theme-two") {
        left.classList.add("red")
        right.classList.add("black")
    }
    else {
        
    }
})