//Create a dinamic text which every letter has different colors and that color changes every second.
const text = '30 days of JavaScript challenge 2020 Asabeneh Yetayeh'
let index = 0
const textEl = document.getElementById('text')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'orange', 'purple', 'brown', 'black', 'gray']
const wrapper = document.querySelector('.wrapper')
setInterval(() => {
    textEl.innerHTML = ''
    text.split('').forEach((letter) => {
        const span = document.createElement('span')
        span.innerText = letter
        span.style.color = colors[Math.floor(Math.random() * colors.length)]
        textEl.appendChild(span)
    })
    wrapper.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}, 1000)
