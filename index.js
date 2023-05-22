import { infoWebApp } from './info.js'

document.querySelector('.person-name').textContent = infoWebApp.challengeTitle
document.querySelector('.description').textContent = infoWebApp.description

const clearSkillList = () => {
    setTimeout(() => {
        document.querySelector('.slider').innerHTML = ''
    }, 1200)
}
const createSkillList = ({ icon, text }) => {
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    carouselItem.innerHTML = `<span class='icon'>${icon}</span><span class='skill'>${text}</span>`
    return carouselItem
}

const createTopicsList = (text) => {
    console.log("🚀 ~ file: index.js:19 ~ createTopicsList ~ text:", text)
    const carouselItem = document.createElement('div')
    carouselItem.classList.add('carousel-item')
    carouselItem.innerHTML = `<p class='feature'>${text}</p>`
    return carouselItem
}

const startCarouselSkills = () => {
    const container = document.querySelector('.slider')
    const carouselItems = infoWebApp.skills.map(createSkillList)

    let currentItemIndex = 0
    const showNextItem = () => {
        carouselItems[currentItemIndex].classList.remove('active')
        currentItemIndex++
        if (currentItemIndex >= carouselItems.length) {
            currentItemIndex = 0
        }

        carouselItems[currentItemIndex].classList.add('active')

    }
    container.append(...carouselItems)
    carouselItems[currentItemIndex].classList.add('active')
    setInterval(showNextItem, 5000)
}
const startCarouselTopics = () => {
    const topicsContainer = document.querySelector('.features')
    const carouselTopics = infoWebApp.challenges.map(challenge => createTopicsList(challenge.topics[0]))

    let currentItemIndex = 0
    const showNextItem = () => {
        carouselTopics[currentItemIndex].classList.remove('active')
        currentItemIndex++
        if (currentItemIndex >= carouselTopics.length) {
            currentItemIndex = 0
        }
        carouselTopics[currentItemIndex].classList.add('active')
    }
    topicsContainer.append(...carouselTopics)
    carouselTopics[currentItemIndex].classList.add('active')
    setInterval(showNextItem, 5000)
}
startCarouselSkills()
startCarouselTopics()

infoWebApp.challenges.map(challenge => {
    const li = document.createElement('li')
    li.textContent = challenge.name
    document.querySelector('.result-list').appendChild(li)
})
