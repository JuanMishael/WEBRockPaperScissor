function gameWinProc(coms,user){
    if(coms == 'rock' && user == 'scissor'  || coms == 'scissor' && user == 'paper' || coms == 'paper' && user == 'rock'){
        console.log('YOU LOSE')
        console.log(coms+user)
    }
    else if(coms == 'rock' && user == 'paper'  || coms == 'scissor' && user == 'rock' || coms == 'paper' && user == 'scissor'){
        console.log('YOU WIN')
        console.log(coms+user)
    }
    else{
        console.log('DRAW')
        console.log(coms+user)
    }   
}

function choiceGetter(rndm,userattack){
    switch(rndm){
        case 0:
            //rock
            gameWinProc('rock',userattack)
            break
        case 1:
            //paper
            gameWinProc('paper',userattack)
            break
        default:
            //scissors
            gameWinProc('scissor',userattack)
            break
    }
}
const rock = document.querySelector('[data-rock]')
const paper = document.querySelector('[data-paper]')
const scissor = document.querySelector('[data-scissors]')


rock.addEventListener('click', button => {
    // do something
    //const random = Math.round(Math.random() * 3)
    const random = Math.round(Math.random() * 2)
    choiceGetter(random,'rock')
})  
paper.addEventListener('click', button => {
    //do something
    const random = Math.round(Math.random() * 2)
    choiceGetter(random,'paper')
})
scissor.addEventListener('click', button => {
    //do something
    const random = Math.round(Math.random() * 2)
    choiceGetter(random,'scissor')
})