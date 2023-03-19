var playerChoice;
var chosen;
var house;
player_score = Number(document.getElementById('score_board').innerText);

house_score = 0;
var winner;
var message = document.getElementById('message');
var choices = ['rock','paper','scissors'];
var player = document.getElementById('player');
var house_choice = document.getElementById('house_choice');
const main1= document.querySelector('.main');
const main2 = document.querySelector('.main2');
var message_cont = document.getElementById('message_cont');
const rules =  document.getElementById('imgcont');
function events(type){
  main1.style.display = 'none';
  main2.style.display = 'flex';
  playerChoice = type 
  player.src = `./images/icon-${type}.svg`
  
     function randomPlay(){
        let random = Math.floor((Math.random() * 3));
        return choices[random];

       
}

     house = randomPlay();
     house_choice.src = `./images/icon-${house}.svg`

    //descision
    if(playerChoice === 'paper' && house === 'rock' || playerChoice == 'scissors' && house === 'paper' || playerChoice === 'rock' && house === 'scissors'){
        message.innerText = 'YOU WIN';
        player_score += 1;
        document.getElementById('score_board').innerText = player_score;
    }
    else if(house === 'paper' && playerChoice === 'rock' || house === 'scissors' && playerChoice === 'paper' || house === 'rock' && playerChoice === 'scissors') {
        message.innerText = 'YOU LOSE';
        player_score -= 1;
        document.getElementById('score_board').innerText = player_score;
    }
    else{
        message.innerText = 'TIED GAME';
    }

        //Logging
    message_cont.style.display = 'flex';
}
function repeat(){
 main1.style.display = 'flex';
  main2.style.display = 'none';  
  message_cont.style.display = 'NONE'; 
}

function RulesFunc(type){
   if(type === 'open'){
     rules.style.display = 'flex';
    
   }
   else{
     rules.style.display = 'none';
    
   }
}




// const choices = ['rock', 'paper', 'scissors'];
// const main1 = document.querySelector('.main');
// const main2 = document.querySelector('.main2');
// const messageCont = document.getElementById('message_cont');
// const message = document.getElementById('message');
// const playerScoreDisplay = document.getElementById('score_board');
// const player = document.getElementById('player');
// const houseChoice = document.getElementById('house_choice');

// let playerScore = 0;

// function playGame(type) {
//   main1.style.display = 'none';
//   main2.style.display = 'flex';

//   const playerChoice = type;
//   player.src = `./images/icon-${playerChoice}.svg`;

//   function getRandomChoice() {
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
//   }

//   const houseChoiceValue = getRandomChoice();
//   houseChoice.src = `./images/icon-${houseChoiceValue}.svg`;

//   if (
//     (playerChoice === 'paper' && houseChoiceValue === 'rock') ||
//     (playerChoice === 'scissors' && houseChoiceValue === 'paper') ||
//     (playerChoice === 'rock' && houseChoiceValue === 'scissors')
//   ) {
//     message.innerText = 'YOU WIN';
//     playerScore += 1;
//   } else if (
//     (houseChoiceValue === 'paper' && playerChoice === 'rock') ||
//     (houseChoiceValue === 'scissors' && playerChoice === 'paper') ||
//     (houseChoiceValue === 'rock' && playerChoice === 'scissors')
//   ) {
//     message.innerText = 'YOU LOSE';
//     playerScore -= 1;
//   } else {
//     message.innerText = 'TIED GAME';
//   }

//   playerScoreDisplay.innerText = playerScore.toString();
//   messageCont.style.display = 'flex';
// }

// function repeat() {
//   main1.style.display = 'flex';
//   main2.style.display = 'none';
//   messageCont.style.display = 'none';
// }
