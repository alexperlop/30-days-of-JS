
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const form = document.querySelector('.wrapper')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const inputVal = document.querySelector('#content').value
    buildSquare(inputVal)
})

const buildSquare = (number) => {
    const enterBtn = document.querySelector('.enter')
    const label = document.querySelector('#contetLabel')
    const container = document.querySelector('.container')

    if (number && number.trim() !== '') {
        const reg = new RegExp('^[0-9]+$')
        const isNum = reg.test(number)
        if (isNum) {
            for (let i = 0; i <= number; i++) {
                const div = document.createElement('div')
                container.appendChild(div)
                div.textContent = i
                i % 2 === 0 ? div.style.cssText = `width:200px;height:200px;background-color:green;display:flex;justify-content:center;align-items:center;font-size:32px; font-weight:bold; font-family:system-ui;margin:15px` : div.style.cssText = `width:200px; height:200px;background-color:yellow;display:flex;justify-content:center;align-items:center;font-size:32px; font-weight:bold; font-family:system-ui;margin:15px`
                if (isPrime(i)) {
                    div.style.cssText = `width:200px; height:200px;background-color:red;display:flex;justify-content:center;align-items:center; font-size:32px; font-weight:bold; font-family:system-ui;margin:15px`
                }
            }
            label.innerHTML = ''
        } else {
            label.innerHTML = 'input value must be a number'
            enterBtn.style.cssText = 'margin: 0 0 0 25px;'
            container.innerHTML = ''
        }
    } else {
        label.innerHTML = 'Enter a number to generate a square'
        enterBtn.style.cssText = 'margin: 0 0 0 25px;'
        container.innerHTML = ''
    }
}
document.addEventListener('keypress', (e) => {
    printKey(e)
})

const printKey = ({ key, charCode, code }) => {
    key.trim() === '' ? key = code : key = key
    document.querySelector('.press-info').innerText = 'You pressed'
    document.querySelector('.keypress').innerHTML = `${key}`
    document.querySelector('.key-number').innerText = `${charCode}`
    document.querySelector('.key-number').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
        color:green; 
        font-size:32px;
        font-weight:bold;
    `
}
