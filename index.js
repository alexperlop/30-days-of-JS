import { countriesFile } from "./countries.js"
import { asabenehChallenges2020 } from "./info.js"

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
    const detail = document.createElement('details')
    const p = document.createElement('p')
    const link = document.createElement('a')
    list[i].appendChild(link).textContent = `${asabenehChallenges2020.challenges[i].name}`
    link.setAttribute('href', `${asabenehChallenges2020.challenges[i].githubUrl}`)
    list[i].appendChild(detail)
    list[i].appendChild(p).textContent = `${asabenehChallenges2020.challenges[i].status}`
    const summary = document.createElement('summary')
    detail.appendChild(summary)
    summary.textContent = `${asabenehChallenges2020.challenges[i].topics[0]}`
    const ul = document.createElement('ul')
    detail.appendChild(ul)
    asabenehChallenges2020.challenges[i].topics.map(topic => {
        const li = document.createElement('li')
        ul.appendChild(li).textContent = `${topic}`
    })

    if (i === 0) {
        list[i].style.cssText = `display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:green;
        padding:20px 30px;
        width:100%;
        border:2px solid white;`
    } else if (i === 1) {
        list[i].style.cssText = `display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:yellow;
        padding:20px 30px;
        width:100%;
        border:2px solid white;`
    } else {
        list[i].style.cssText = `display: flex;
        justify-content: space-between;
        align-items: center;
        background-color:red;
        padding:20px 30px;
        width:100%;
        border:2px solid white;`
    }
}
const h1 = document.createElement('h1')
document.querySelector('.wrapper').appendChild(h1)
h1.textContent = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`
const div = document.createElement('div')
document.querySelector('.wrapper').appendChild(div)
div.setAttribute('id', 'social-container')

for (let i = 0; i < asabenehChallenges2020.author.socialLinks.length; i++) {
    let icon = asabenehChallenges2020.author.socialLinks[i].fontawesomeIcon
    if (icon) {
        let span = document.createElement('span')
        document.querySelector('#social-container').appendChild(span)
        span.setAttribute('id', `${asabenehChallenges2020.author.socialLinks[i].social}`)
        document.querySelector(`#${asabenehChallenges2020.author.socialLinks[i].social}`).innerHTML = `<a href=${asabenehChallenges2020.author.socialLinks[i].url}>${icon}</a>`
        document.querySelector(`#${asabenehChallenges2020.author.socialLinks[i].social} a`).style.cssText = `
            padding:10px;
            color:black;
        `
        document.querySelector(`#${asabenehChallenges2020.author.socialLinks[i].social} i`).style.cssText = `
            font-size:30px;
        `
    }
}

const p = document.createElement('p')
p.setAttribute('class', 'bio')
document.querySelector('.wrapper').appendChild(p).textContent = `${asabenehChallenges2020.author.bio}`
document.querySelector('.bio').style.cssText = `
    width: 655px;
    text-align:center;
`
const listContainer = document.createElement('div')
document.querySelector('.wrapper').appendChild(listContainer)
listContainer.setAttribute('id', 'listContainer')
const listTitles = document.createElement('ul')
listTitles.innerHTML = '<h3>Titles</h3>'
document.querySelector('#listContainer').appendChild(listTitles)
listTitles.setAttribute('id', 'listTitles')
for (let i = 0; i < asabenehChallenges2020.author.titles.length; i++) {
    let li = document.createElement('li')
    document.querySelector('#listTitles').appendChild(li)
    li.innerHTML = `${asabenehChallenges2020.author.titles[i][0]} ${asabenehChallenges2020.author.titles[i][1]}`
    li.style.cssText = `
    list-style:none;`
}


const listSkills = document.createElement('ul')
listSkills.innerHTML = '<h3>Skills</h3>'
document.querySelector('#listContainer').appendChild(listSkills)
listSkills.setAttribute('id', 'listSkills')
for (let i = 0; i < asabenehChallenges2020.author.skills.length; i++) {
    let li = document.createElement('li')
    document.querySelector('#listSkills').appendChild(li)
    li.innerHTML = `${asabenehChallenges2020.author.skills[i]}`
    li.style.cssText = `
    list-style:none;`
}

const listQualifications = document.createElement('ul')
listQualifications.innerHTML = '<h3>Qualifications</h3>'
document.querySelector('#listContainer').appendChild(listQualifications)
listQualifications.setAttribute('id', 'listQualifications')
for (let i = 0; i < asabenehChallenges2020.author.qualifications.length; i++) {
    let li = document.createElement('li')
    document.querySelector('#listQualifications').appendChild(li)
    li.innerHTML = `${asabenehChallenges2020.author.skills[i]}`
    li.style.cssText = `
    list-style:none;`
}
document.querySelector('#listContainer').style.cssText = `
display:flex;
justify-content:center;
align-items:start;`

const aside = document.createElement('div')
document.querySelector('.wrapper').appendChild(aside)
aside.setAttribute('id', 'keywords')
const keyTitle = document.createElement('h1')
document.querySelector('#keywords').appendChild(keyTitle).textContent = 'Keywords'
document.querySelector('#keywords h1').style.cssText = `
width: 100%;
font-size:20px;`
const genRanHex = (size = 6) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
    let li = document.createElement('div')
    document.querySelector('#keywords').appendChild(li)
    li.innerHTML = `# ${asabenehChallenges2020.keywords[i]}`
    li.style.cssText = `border-radius:15px; padding:8px;margin:5px; background-color:#${genRanHex()};`
}
document.querySelector('#keywords').style.cssText = `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;`

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
const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
const container = document.createElement('div')
document.querySelector('.wrapper').appendChild(container).setAttribute('class', 'container')
document.querySelector('.container').style.cssText = `display:flex;flex-direction:row;flex-wrap:wrap;color:white;`
for (let i = 0; i <= 100; i++) {
    console.log("🚀 ~ file: index.js:11 ~ i", i)
    const div = document.createElement('div')
    document.querySelector('.container').appendChild(div)
    div.textContent = i
    i % 2 === 0 ? div.style.cssText = `width:200px;height:200px;background-color:green;display:flex;justify-content:center;align-items:center;font-size:32px; font-weight:bold; font-family:system-ui;margin:15px` : div.style.cssText = `width:200px; height:200px;background-color:yellow;display:flex;justify-content:center;align-items:center;font-size:32px; font-weight:bold; font-family:system-ui;margin:15px`
    if (isPrime(i)) {
        div.style.cssText = `width:200px; height:200px;background-color:red;display:flex;justify-content:center;align-items:center; font-size:32px; font-weight:bold; font-family:system-ui;margin:15px`
    }
}
const countries = document.createElement('div')
const title = document.createElement('h1')
const subTitle = document.createElement('h2')
const info = document.createElement('p')
document.querySelector('.wrapper').appendChild(title).setAttribute('class', 'title')
document.querySelector('.title').textContent = 'world countries list'.toUpperCase()
document.querySelector('.title').style.cssText = `font-size:60px;text-align:center; font-family:system-ui;margin-top:100px;`
document.querySelector('.wrapper').appendChild(subTitle).setAttribute('class', 'subTitle')
document.querySelector('.subTitle').textContent = `Total numbers of countries: ${countriesFile.length}`.toUpperCase()
document.querySelector('.subTitle').style.cssText = `text-align:center; font-family:system-ui;margin:0px`

document.querySelector('.wrapper').appendChild(info).setAttribute('class', 'info')
document.querySelector('.info').textContent = `30DaysOfJavaScript: DOM-Day-2`
document.querySelector('.info').style.cssText = `text-align:center; font-family:system-ui;margin:0px`


document.querySelector('.wrapper').appendChild(countries).setAttribute('class', 'countries')
document.querySelector('.countries').style.cssText = `display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;margin-top:60px;`

for (let i = 0; i < countriesFile.length; i++) {
    console.log("🚀 ~ file: index.js:11 ~ i", countriesFile[i])
    const div = document.createElement('div')
    document.querySelector('.countries').appendChild(div)
    console.log("🚀 ~ file: index.js:31 ~ countriesFile[i].name", countriesFile[i].name)
    div.textContent = countriesFile[i].name
    div.style.cssText = `width:200px; height:200px;background-color:white;display:flex;justify-content:center;align-items:center; font-size:32px; font-weight:bold; font-family:system-ui;border:10px solid grey; margin:15px; text-align:center;`

}
