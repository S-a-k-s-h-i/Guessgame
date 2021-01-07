let randomNumber=Math.floor(Math.random()*100)+1;
console.log(randomNumber);
var high=document.querySelector('.high');
var equal=document.querySelector('.equal');
var low=document.querySelector('.low');
var result=document.querySelector('.result');
var guessedNo=document.querySelector('.guessedNo');
let resetButton;

high.addEventListener('click',() => {
    if(randomNumber>50){
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                        result.textContent='You Win';
                        result.style.background='green';
                        
                    }else{
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                       result.textContent='You loose';
                       result.style.background='red';
                    }
                    setGameOver();
});

equal.addEventListener('click',() => {
    if(randomNumber==50){
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                        result.textContent='You Win';
                        result.style.background='green';
                        
                    }else{
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                       result.textContent='You loose';
                       result.style.background='red';
                    }
                    setGameOver();
});

low.addEventListener('click',() => {
    if(randomNumber<50){
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                        result.textContent='You Win';
                        result.style.background='green';
                        
                    }else{
                        guessedNo.textContent="Generated Random No: "+randomNumber;
                       result.textContent='You loose';
                       result.style.background='red';
        
                    }
                    setGameOver();
});

function setGameOver(){
    high.disabled=true;
    equal.disabled=true;
    low.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='Start new Game';
    resetButton.className="btn btn-secondary";
    document.getElementById("resultp").appendChild(resetButton);
    resetButton.addEventListener('click',reset);
}

function reset(){
    guessedNo.textContent='';
    result.textContent='';
    resetButton.parentNode.removeChild(resetButton);
    high.disabled=false;
    equal.disabled=false;
    low.disabled=false;
    randomNumber=Math.floor(Math.random()*100)+1;
}

// console.log(userInput);
// if (userInput.toLowerCase()=='high'){
//     if(randomNumber>50){
//         console.log('You Wins');
//     }else{
//         console.log('Wrong')
//     }
// }
// else if(userInput.toLowerCase()=='equals'){
//     if(randomNumber==50){
//         console.log('You Wins')
//     }else{
//         console.log('Wrong')
//     }
// }
// else{
//     if(randomNumber<50){
//         console.log('You Wins')
//     }else{
//         console.log('Wrong')
//     }
// }
