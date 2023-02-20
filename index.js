// Ejercicios: Nivel 1
// Crear un archivo index.html y poner cuatro elementos p: Obtenga el primer párrafo utilizando document.querySelector(tagname) y el nombre de la etiqueta
const firstParagraph = document.querySelector('p')
console.log("🚀 ~ file: index.js:4 ~ firstParagraph", firstParagraph, firstParagraph.textContent)
// Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
const st = document.getElementById('st')
console.log("🚀 ~ file: index.js:7 ~ Obtener cada uno de los párrafos st", st)
const nd = document.getElementById('nd')
console.log("🚀 ~ file: index.js:9 ~  Obtener cada uno de los párrafos nd", nd)
const rd = document.getElementById('rd')
console.log("🚀 ~ file: index.js:11 ~ Obtener cada uno de los párrafos rd", rd)
const fth = document.getElementById('fth')
console.log("🚀 ~ file: index.js:13 ~ Obtener cada uno de los párrafos fth", fth)
// Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
const allParagraphs = document.querySelectorAll('p')
console.log("🚀 ~ file: index.js:16 ~ allParagraphs", allParagraphs)
// Recorrer nodeList y obtener el contenido del texto de cada párrafo
allParagraphs.forEach(p => console.log('Recorrer nodeList y obtener el contenido del texto de cada párrafo', p.textContent))
// Establecer un textContent para el párrafo del cuarto párrafo,Fourth Paragraph
allParagraphs[3].textContent = 'Fourth Paragraph'
// Establezca los atributos class para todos los párrafos utilizando diferentes métodos de establecimiento de atributos
allParagraphs[0].setAttribute('class', 'p-first')
allParagraphs[0].className = 'p-first'
allParagraphs[1].setAttribute('class', 'p-second')
allParagraphs[1].className = 'p-second'
allParagraphs[2].setAttribute('class', 'p-third')
allParagraphs[2].className = 'p-third'
allParagraphs[3].setAttribute('class', 'p-fourth')
allParagraphs[3].className = 'p-fourth'
// Ejercicios: Nivel 2
// Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
const paragraphs = document.querySelector('.paragraphs')
paragraphs.style.cssText = `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width: 100%;
`
allParagraphs[0].style.cssText = `background-color : green; color:white; height:30px;width:650px; padding:10px;text-align:center;`
allParagraphs[1].style.cssText = `background-color : red; color:black; height:30px;width:650px; padding:10px;text-align:center;`
allParagraphs[2].style.cssText = `background-color : orange; color:white; height:30px;width:650px; padding:10px;text-align:center;`
allParagraphs[3].style.cssText = `background-color : blue; color:white; height:30px;width:650px; padding:10px;text-align:center;`

// Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo
for (let i = 0; i < allParagraphs.length; i++) {
    i % 2 === 0 ? allParagraphs[i].style.cssText = `color:green` : allParagraphs[i].style.cssText = `color:red`
}
// Ejercicios: Nivel 3
// DOM: Mini proyecto 1
// Desarrolle la siguiente aplicación, utilice los siguientes elementos HTML para empezar. 
// Obtendrá el mismo código en la carpeta de inicio. 
// Aplique todos los estilos y la funcionalidad utilizando sólo JavaScript.
// El color del año cambia cada 1 segundo
// El color de fondo de la fecha y la hora cambia cada dos segundos
// El reto completado tiene fondo verde
// El desafío en curso tiene fondo amarillo
// Los próximos retos tienen fondo rojo
document.querySelector('.wrapper').style.cssText = `
    display:flex; 
    flex-direction:column;
    width:100%;
    justify-content:center;
    align-items: center;`
document.querySelector('h2').style.cssText = `font-family: system-ui; 
    text-decoration:underline;
    font-weight: 200;`
document.querySelector('h1').innerHTML = `Asabeneh Yetayeh retos en <span>2020</span>`
document.querySelector('h1').style.cssText = `font-family: system-ui;`
document.querySelector('ul').style.cssText = `list-style:none;width:650px;margin:0;padding:0;`
const list = document.querySelectorAll('li')
for (let i = 0; i < list.length; i++) {
    if (i === 0) {
        list[i].style.cssText = `background-color:green;padding:20px 30px;width:100%;border:2px solid white;`
    } else if (i === 1) {
        list[i].style.cssText = `background-color:yellow;padding:20px 30px;width:100%;border:2px solid white;`
    } else {
        list[i].style.cssText = `background-color:red;padding:20px 30px;width:100%;border:2px solid white;`
    }
}
const date = document.createElement('div')
const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }
date.textContent = `${new Date().toLocaleDateString('en-GB', dateOptions)}`
const ul = document.querySelector('ul')
document.querySelector('.wrapper').insertBefore(date, ul)
date.setAttribute('id', 'date')
setInterval(() => {
    const genRanHex = (size = 6) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    document.querySelector('span').style.cssText = `color:#${genRanHex()};font-size:80px`
    document.querySelector('#date').style.cssText = `background-color:#${genRanHex()};padding:10px 25px;margin-bottom:10px;`
}, 200)
