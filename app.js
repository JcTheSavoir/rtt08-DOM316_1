
let gamePieces = {
    rock: 'https://static.vecteezy.com/system/resources/previews/023/289/772/original/a-lifelike-rock-formation-inspired-by-nature-set-against-a-transparent-background-generative-ai-png.png',
    paper: 'https://static.vecteezy.com/system/resources/previews/009/340/337/original/white-crumpled-paper-balls-for-design-element-png.png',
    sza: 'https://png.pngtree.com/png-vector/20231031/ourmid/pngtree-scissors-black-scissors-blade-png-image_10404910.png'
}

let playerOnesTurn = true
//=-----------------------------------{VARIABLES}
let p1Stage = document.querySelector('.playerOne')
let p2Stage = document.querySelector('.playerTwo')
let name = document.querySelector('.name')


let rockImg = document.createElement('img')
rockImg.setAttribute('src', gamePieces.rock)
rockImg.setAttribute('class','rock')
let paperImg = document.createElement('img')
paperImg.setAttribute('src', gamePieces.paper)
paperImg.setAttribute('class','paper')
let szaImg = document.createElement('img')
szaImg.setAttribute('src', gamePieces.sza)
szaImg.setAttribute('class','sza')

//---------------------------------QUERRYSELECTORS

//-----------------------------------{FUNCTIONS}
//-------------------------------------------------------------------
const addToBoard = (item, whichPlayer) => {
    let currentPlayer = document.querySelector(`.${whichPlayer}`)
    currentPlayer.append(item)
    if(playerOnesTurn === false) {
        return 
    }
    playerOnesTurn = false
    console.log('Should be false now')
    console.log(playerOnesTurn);
    if (playerOnesTurn === false) {
        generateMove()
        console.log("should generate move")   
    }
}

const generateMove = () => {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomNumber);

    if(randomNumber === 1) {
        addToBoard(rockImg, 'playerTwo')
    } else if(randomNumber === 2) {
        addToBoard(paperImg, 'playerTwo')
        playerOnesTurn = true
    } else {
        addToBoard(szaImg, 'playerTwo')
        playerOnesTurn = true
    }
    playerOnesTurn = true
    console.log(playerOnesTurn)
}

const selectNames = () => {
    let username = prompt("Enter Player Ones Name")
    name.innerHTML = username
}

const playerOneGo = () => {
    alert("Player 1's Turn")
    
}



const startGame = () => {
    selectNames()
    alert("player One select Move")
    generateMove()
}


//--------------------------Another Way to handle game pieces----------------------------------------------
/*------------------------------Requires changing "addToBoard" in the html file
const addToBoard1 = (item, whichPlayer) => {
    let currentPlayer = document.querySelector(`.${whichPlayer}`)
    currentPlayer.append(item)
    console.log(`Player Two Choose ${item}`)
    generateMove()
}
const addToBoard2 = (item, whichPlayer) => {
    let currentPlayer = document.querySelector(`.${whichPlayer}`)
    currentPlayer.append(item)
    console.log(`Player Two Choose ${item}`)
}


const generateMove = () => {
    let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
    console.log(randomNumber);
    
    if(randomNumber === 1) {
        addToBoard2(rockImg, 'playerTwo')
    } else if(randomNumber === 2) {
        addToBoard2(paperImg, 'playerTwo')
    } else {
        addToBoard2(szaImg, 'playerTwo')
    }
}
*/
