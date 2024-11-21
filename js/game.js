// ============================================ DOM Main part starts =================================================================

    // =============== Player 1 DOM part starts ======================
    let playerOne          = document.querySelector(".playerOne")
    let inputPlayerOne     = document.querySelector(".inputPlayerOne")
    let playerOneButton    = document.querySelector(".playerOneButton")
    // *************** Player 1 DOM part ends ************************

    // =============== Player 2 DOM part starts ======================
    let playerTwo          = document.querySelector(".playerTwo")
    let inputPlayerTwo     = document.querySelector(".inputPlayerTwo")
    let playerTwoButton    = document.querySelector(".playerTwoButton")
    // *************** Player 2 DOM part ends ************************

    // =============== Player 3 DOM part starts ======================
    let playerThree        = document.querySelector(".playerThree")
    let inputPlayerThree   = document.querySelector(".inputPlayerThree")
    let playerThreeButton  = document.querySelector(".playerThreeButton")
    // *************** Player 3 DOM part ends *************************

// ================ chance DOM starts ===========================
    let chance             = 3
    let chance3            = 3
    let chanceCount        = document.querySelector(".chanceCount")
    let chanceCount3       = document.querySelector(".chanceCount3")
// *************** chance DOM Ends ******************************

// =============== Others DOM part starts ======================
    let playerName         = document.querySelector(".playerName")
    let error              = document.querySelector(".error")
    let winner             = document.querySelector(".winner")
    let result             = document.querySelector(".result")
    let gameTitle          = document.querySelector(".gameTitle")
    let commonText         = document.querySelector(".commonText")
    let mainDiv            = document.querySelector(".mainDiv")
    let inputNumber1       = document.querySelector(".inputNumber1")
    let inputNumber        = document.querySelector(".inputNumber")
    let main               = document.querySelector(".main")
// *************** Others DOM part ends ************************

// ===================== card button DOM =======================
    let cardButton         = document.querySelector(".cardButton")
    let mainCard           = document.querySelector(".mainCard")

// ******************* card button DOM ends *******************

// ===================== Player 023 DOM =======================
    let player023              = document.querySelector(".player023")
    let player023Button        = document.querySelector(".player023Button")

// ===================== Player 0230 DOM =======================
    let player0230             = document.querySelector(".player0230")
    let player0230Button       = document.querySelector(".player0230Button")
// ********************* XXXXXXXXXXX *******************************

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DOM Main part ends >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// ====================================== Function starts ================================================================

// ============== card Function starts =================

cardButton.addEventListener("click", () => {
    mainCard.style      = "display:none"
    mainDiv.style       = "opacity:1"
})

// ************ card function ends *********************

    chanceCount.innerHTML  = chance
    chanceCount.style      = "color:#06D001"
    chanceCount3.innerHTML =  chance3
    chanceCount3.style     = "color:#06D001"

// ~~~~~~~~~~~~~~```` Player 1, 2, 3 Enter Press Function starts```~~~~~~~~~~~~~~~

let playerOneEnter = (item) => {
    if(item.key == "Enter"){
        playerOneFun()
    }
}

let playerTwoEnter = (item) => {
    if(item.key == "Enter"){
        playerTwoFun()
    }
}

let playerThreeEnter = (item) => {
    if(item.key == "Enter"){
        playerThreeFun()
    }
}
// ******************* Player 1, 2, 3 Enter Key Function ends *******************************

// =========================````````` Player 1, 2, 3 Error Function Starts``````````======================

let player1Error = () =>{
    if(inputPlayerOne.value == ""){
        error.innerHTML        = "Required field!"
        playerOne.style        = "display: block ; border: 1px solid red"
    }else if(inputPlayerOne.value < 0 || inputPlayerOne.value > 10){
        error.innerHTML        = "Enter number between 0 to 10"
        playerOne.style        = "display: block ; border: 1px solid red"
        inputPlayerTwo.value  = ""
    }
}

let player2Error = () =>{
    if(inputPlayerTwo.value == ""){
        error.innerHTML        = "Required field!"
        playerTwo.style        = "display: block ; border: 1px solid red"
    }else if(inputPlayerTwo.value < 0 || inputPlayerTwo.value > 10){
        error.innerHTML        = "Enter number between 0 to 10"
        playerTwo.style        = "display: block ; border: 1px solid red"
        inputPlayerTwo.value  = ""
    }
}

let player3Error = () =>{
    if(inputPlayerThree.value == ""){
        error.innerHTML         = "Required field!"
        playerThree.style       = "display: block ; border: 1px solid red"
    }else if(inputPlayerThree.value < 0 || inputPlayerThree.value > 10){
        error.innerHTML         = "Enter number between 0 to 10"
        playerThree.style       = "display: block ; border: 1px solid red"
        inputPlayerThree.value  = ""
    }
}

// XXXXXXXXXXXXXXXXXXXXXXXXX Player 2, 3 Error Box Function Starts XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// ~~~~~~~~~~~~~~```` Player 1 button click Function starts```~~~~~~~~~~~~~~~

let playerOneFun = () => {
    if(inputPlayerOne.value == ""){
        player1Error()
    }else{
        if(inputPlayerOne.value < 0 || inputPlayerOne.value > 10){
            player1Error()
        }else{
            error.innerHTML      = ""
            playerOne.style      = "display:none"
            player023.style      = "display:block"
            playerName.innerHTML = ""
        }
    } 
}

// ~~~~~~~~~~~~~~```` Player 023 (1st player er pore j card ashbe) button click Function starts```~~~~~~~~~~~~~~~

player023Button.addEventListener("click", () => {
    player023.style      = "display:none"
    playerTwo.style      = "display:block"
    error.innerHTML      = ""
    playerName.innerHTML = "Player - 2"
})

// ~~~~~~~~~~~~~~```` Player 2 button click Function starts```~~~~~~~~~~~~~~~

let playerTwoFun = () => {
    if (inputPlayerTwo.value == ""){
        player2Error()           
    }else{
        if(inputPlayerTwo.value < 0 || inputPlayerTwo.value > 10){
            player2Error()             
        }else{
            error.innerHTML                 = ""
            if(inputPlayerOne.value == inputPlayerTwo.value) {
                playerName.innerHTML        = ""
                gameTitle.style             = "display:none"
                playerTwo.style             = "display:none"
                winner.style                = "display:block"
                result.innerHTML            = "Player 2 Winner"
                error.innerHTML             = "Congratulations"
                error.style                 = "color:#E4B1F0; left: 22px; letter-spacing: 2px; "
            }else{
                chance--
                chanceCount.innerHTML       = chance
                inputPlayerTwo.value        = "" 
                playerTwo.style             = "display:block ; border:1px solid blue"
                if(chance == 0){
                    playerName.innerHTML    = ""
                    player0230.style        = "display:block"
                    playerTwo.style         = "display:none"
                }
            }
        }
    } 
} 

// ~~~~~~~~~~~~~~```` Player 0230 (2nd player er pore j card ashbe) button click Function starts```~~~~~~~~~~~~~~~

player0230Button.addEventListener("click", () => {
    player0230.style     = "display:none"
    playerThree.style    = "display:block"
    playerTwo.style      = "display:none"
    error.innerHTML      = ""
    playerName.innerHTML = "Player - 3"
})

// ~~~~~~~~~~~~~~```` Player 3 button click Function starts```~~~~~~~~~~~~~~~

let playerThreeFun = () => {
    if (inputPlayerThree.value == ""){
        player3Error()               
    }else{
        if(inputPlayerThree.value < 0 || inputPlayerThree.value > 10){
            player3Error()                     
        }else{
            error.innerHTML                 = ""
            if(inputPlayerOne.value == inputPlayerThree.value) {
                playerName.innerHTML        = ""
                gameTitle.style             = "display:none"
                playerThree.style           = "display:none"
                winner.style                = "display:block"
                result.innerHTML            = "Player 3 Winner"
                error.innerHTML             = "Congratulations"
                error.style                 = "color:#E4B1F0; left: 22px" 
            }else{
                chance3--
                playerThree.style             = "display:block ; border:1px solid rgb(115, 193, 20)"
                chanceCount3.innerHTML      = chance3
                inputPlayerThree.value      = "" 
                if(chance3 == 0){
                    playerName.innerHTML    = ""
                    gameTitle.style         = "display:none"
                    playerThree.style       = "display:none"
                    winner.style            = "display:block"
                    result.innerHTML        = "Player 1 Winner"
                    error.innerHTML         = "Congratulations"
                    error.style             = "color:#E4B1F0; left:22px"
                    inputNumber.style       = "display:block"
                    inputNumber1.innerHTML  = inputPlayerOne.value

                }
            }
        }
    } 
} 

// ********************* Function Ends *******************************