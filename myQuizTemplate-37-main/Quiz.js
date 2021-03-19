class Quiz{
    constructor(){}
getState(){
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState = data.val()
    })
}
   update(state) {
       database.ref('/').update({
           gameState:state
       });
   }
   async start(){
       if(gameState===0){
           contestant = new Contestant();
           var contestantCountRef = await database.ref('ParticipantsCount').on("value");
           if(contestantCountRef.exists()){
            ParticipantsCount = contestantCountRef.val();
            constestant.getCount();
           }
           question =new Question()
           question.display();
       }
   }
   play(){
       question.hide();
       background("black");
       fill(0)
       textSize(30)
       text("Result of the Quiz",340,50);
       text("-----------------",320,65)
       Contestant.getPlayerInfo();
       if(allContestants !== undefined){
           debugger;
           var display_ANswers =230;
           fill("Blue")
           textSize(20)
           text("NOTE:Contestant who answered correct are highlighted in Pink color!",130,230);

           for(var plr in allContestants){
               debugger;
               var correctAns = "2";
               if(correctAns === allContestants[plr].answer)
               fill("pink")
               else
               fill("green");
               display_ANswers+=30;
               textSize(20);
               text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_ANswers)
           }
       }
   }
}