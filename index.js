const rock_div=document.getElementById('rock');
const paper_div=document.getElementById('paper');
const scissors_div=document.getElementById('scissors');
const user_score=document.getElementById('userScore');
const comp_score=document.getElementById('compScore');
const result=document.getElementById('result');
var userScore=0;
var compScore=0;

function win(compChoice,userChoice){
    userScore++;
    user_score.innerHTML=userScore;
    var smalluser="user".fontsize(3).sub();
    var smallcomp="comp".fontsize(3).sub();
    result.innerHTML=`${userChoice}${smalluser} beats ${compChoice}${smallcomp}. you win!!`;
    document.getElementById(userChoice).classList.add('green');
   setTimeout(function() {
     document.getElementById(userChoice).classList.remove('green')},3000);
}
function lose(compChoice,userChoice){
    compScore++;
    comp_score.innerHTML=compScore;
    var smalluser="user".fontsize(3).sub();
    var smallcomp="comp".fontsize(3).sub();
    result.innerHTML=`${compChoice}${smallcomp} beats ${userChoice}${smalluser}. you lose!!`;
    document.getElementById(userChoice).classList.add('red');
    setTimeout(function() {
      document.getElementById(userChoice).classList.remove('red')},1000);
}
function draw(compChoice,userChoice){
    var smalluser="user".fontsize(3).sub();
    var smallcomp="comp".fontsize(3).sub();
    result.innerHTML=`${compChoice}${smallcomp} is equal to ${userChoice}${smalluser}. draw!!`;
    document.getElementById(userChoice).classList.add('gray');
    setTimeout(function() {

    document.getElementById(userChoice).classList.remove('gray')},1000);
}
function game(userChoice){
  let choice=["rock","paper","scissors"];
  var Random=Math.floor(Math.random()*3);
  var compChoice=choice[Random];
  if(compChoice===userChoice){
    draw(compChoice,userChoice);
  }
  else if (choice[(Random+1)%3]==userChoice) {
    win(compChoice,userChoice);
  }
  else{
    lose(compChoice,userChoice);
  }
}

rock_div.addEventListener('click',function() {
   game("rock");
})
paper_div.addEventListener('click',function() {
   game("paper");
})
scissors_div.addEventListener('click',function() {
   game("scissors");
})
