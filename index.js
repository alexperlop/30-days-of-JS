// Diccionario de planetas y su gravedad relativa a la Tierra
const planet_gravity = {
    "Mercurio": {
        value: 3.7,
        img: 'https://assets.stickpng.com/images/580b585b2edbce24c47b2709.png'
    },
    "Venus": {
        value: 8.87,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Venus.png/600px-Venus.png'
    },
    "Tierra": {
        value: 9.81,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/1024px-Earth_Western_Hemisphere_transparent_background.png'
    },
    "Marte": {
        value: 3.711,
        img: 'https://www.pngall.com/wp-content/uploads/13/Mars-PNG-File.png'
    },
    "Jupiter": {
        value: 24.79,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Jupiter.png/1200px-Jupiter.png'
    },
    "Saturno": {
        value: 10.44,
        img: 'https://assets.stickpng.com/images/580b585b2edbce24c47b270d.png'
    },
    "Urano": {
        value: 8.69,
        img: 'https://static.vecteezy.com/system/resources/previews/011/178/729/non_2x/uranus-elements-of-this-image-furnished-by-nasa-free-png.png'
    },
    "Neptuno": {
        value: 11.15,
        img: 'https://cdn-icons-png.flaticon.com/512/3594/3594089.png'
    },
    "Plutón": {
        value: 0.62,
        img: 'https://static.vecteezy.com/system/resources/previews/016/536/742/non_2x/pluto-watercolor-planet-png.png'
    }
};

// Función para calcular el peso en diferentes planetas
const calculateWeight = (mass, planet) => {
    console.log("🚀 ~ file: index.js:16 ~ calculateWeight ~ planet:", planet)
    console.log("🚀 ~ file: index.js:16 ~ calculateWeight ~ mass:", mass)
    const gravity = planet_gravity[planet].value;
    const weight = mass * gravity;

    document.querySelector('.planet-wrap').style.cssText = `display: flex; background-color: rgba(243, 237, 237, 0.2);padding:30px 60px;`
    document.querySelector('.planet').style.cssText = `
        display: flex;
        justify-content: center;
        align-items: center;
    `
    document.querySelector('.error').style.cssText = `
            display:none;
        `
    document.querySelector('img').setAttribute('src', `${planet_gravity[planet].img}`)
    document.querySelector('.title span').innerText = `${planet}`
    document.querySelector('.circle').innerText = `${weight.toFixed(2)} N`
}

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const number = e.target[0].value
    const planet = e.target[1].value

    const reg = new RegExp('^[0-9]+$')
    const isNum = reg.test(number)

    if (isNum) {
        calculateWeight(number, planet)
    } else {
        document.querySelector('.planet-wrap').style.cssText = `
            display:none;
        `
        document.querySelector('.planet').style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(243, 237, 237, 0.2);
        `
        document.querySelector('.error').style.cssText = `
            display:inline;
        `
    }
})