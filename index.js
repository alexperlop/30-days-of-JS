let playerInfo = []

const form = document.querySelector('#form')
const table = document.getElementsByTagName('tbody')[0]

const printTable = () => {
    table.innerHTML = ''
    playerInfo.forEach((player, i) => {
        const newRow = document.createElement('tr')
        i++
        const newContent = `
        <td>
            <p>${player.name} ${player.lastName}</p>
            <small>Jan 20, 2022</small>
        </td>
        <td>${player.country}</td>
        <td>${player.score}</td>
        <td class="last-row">
            <button class="delete" id="${i}">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash3" viewBox="0 0 16 16">
                    <path
                        d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
            </button>
            <button class="increment" id="${i}">+5</button>
            <button class="decrement" id="${i}">-5</button>
        </td>`

        newRow.innerHTML = newContent
        const deleteBtn = newRow.querySelector('.delete')
        deleteBtn.addEventListener('click', function () {
            const index = playerInfo.indexOf(player)
            if (index !== -1) {
                playerInfo.splice(index, 1)
                playerInfo.sort((a, b) => parseInt(b.score) - parseInt(a.score))
                printTable()
            }
        })

        const incrementBtn = newRow.querySelector('.increment')
        incrementBtn.addEventListener('click', function () {
            player.score = parseInt(player.score) + 5
            playerInfo.sort((a, b) => parseInt(b.score) - parseInt(a.score))
            printTable()
        })

        const decrementBtn = newRow.querySelector('.decrement')
        decrementBtn.addEventListener('click', function () {
            player.score = parseInt(player.score) - 5
            if (player.score < 0) {
                player.score = 0
            }
            playerInfo.sort((a, b) => parseInt(b.score) - parseInt(a.score))
            printTable()
        })
        table.appendChild(newRow)
    })
}


const addPlayer = (name, lastName, country, score) => {
    const newPlayer = {
        id: playerInfo.length + 1,
        name,
        lastName,
        country,
        score
    }
    playerInfo.push(newPlayer)
    playerInfo.sort((a, b) => parseInt(b.score) - parseInt(a.score))
    printTable()
}

const onHandleSubmit = (event) => {
    event.preventDefault()
    const { name, lastName = event.target['last-name'], country, score } = event.target
    const nameIsNull = name.value.trim() === '' || !name.value
    const lastNameIsNull = lastName.value.trim() === '' || !lastName.value
    const countryIsNull = country.value.trim() === '' || !country.value
    const scoreIsNull = score.value.trim() === '' || !score.value

    if (nameIsNull || lastNameIsNull || countryIsNull || scoreIsNull) {
        document.querySelector('.alert-container').style.display = 'flex'
    } else {
        document.querySelector('.alert-container').style.display = 'none'
        addPlayer(name.value, lastName.value, country.value, score.value)
        name.value = ''
        lastName.value = ''
        country.value = ''
        score.value = ''
    }
}

form.addEventListener('submit', (event) => { onHandleSubmit(event) })
