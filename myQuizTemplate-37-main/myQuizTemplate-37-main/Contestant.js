class Contestant{
    constructor(){
        this.index = null;
        this.answer = 0;
        this.name = null;
    }
    getCount(){
     var contestantCountRef = database.ref('ParticipantsCount')
     contestantCountRef.on("value",(data)=>{
         ParticipantsCount = data.val()
     })
    }
    updateCount(count){
        database.ref('/').update({
            ParticipantsCount: count
        });
      }
update(){
  var contestantIndex ="contestants/contestants"=this.index
  database.ref(contestantIndex).set({
  name:this.name,
  answer:this.answer
   })
 }
static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestant');
    contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
    })
}
}