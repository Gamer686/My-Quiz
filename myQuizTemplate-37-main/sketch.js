var canvas, backgroundImg;
var gameState = 0;
var ParticipantsCount;
var allContestants;
var answer;
var database;
var question,contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
quiz = new Quiz();
quiz.getState()
quiz.start()
}


function draw(){
  background("white");
  if(ParticipantsCount === 4){
    quiz.update(1);
  }
if(gameState ===1){
  clear();
  quiz.play();
}
  
}