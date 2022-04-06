let selectedColor = "red"
const painting = document.querySelector(".painting")

painting.addEventListener('click', function(e) {
    e.target.style.backgroundColor = selectedColor
})

painting.addEventListener('dblclick', function(e) {
    e.target.style.backgroundColor = "white"
})

let colorBoxes = document.querySelectorAll(".color-choice")

for(let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener('click', function() {
        selectedColor = colorBoxes[i].id
    })
}

let clearButton = document.querySelector("#clear-button")

clearButton.addEventListener('click', function() {
    document.querySelectorAll(".pixel").forEach(function(element) {
        element.style.backgroundColor = "white"
    })
})

// let blueBox = document.querySelector("#blue")

// blueBox.addEventListener('click', function() {
//     selectedColor = "blue"
// })

// let redBox = document.querySelector("#red")

// redBox.addEventListener('click', function() {
//     selectedColor = "red"
// })

// let yellowBox = document.querySelector("#yellow")

// yellowBox.addEventListener('click', function() {
//     selectedColor = "yellow"
// })

// let greenBox = document.querySelector("#green")

// greenBox.addEventListener('click', function() {
//     selectedColor = "green"
// })