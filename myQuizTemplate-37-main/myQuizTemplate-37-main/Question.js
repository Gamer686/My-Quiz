class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter YOUR Name Here...");
        this.input2 = createInput("Enter correct Option...");
        this.button = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
 }
 hide(){
     this.title.hide();
     this.input1.hide();
     this.button.hide();
     this.input2.hide();
 }
 display(){
     this.title.html("MY Quiz Game")
     this.option1.html("1:")
     this.option1.position(150,100)

     this.question.html("Question:which is the biggest stick?")
     this.question.position(150,0)
     this.option1.html("1:insect")
     this.option1.position(150,100)
     this.option2.html("2:lipstick")
     this.option2.position(150,120)
     this.option3.html("3:I dont known")
     this.option3.position(150,140)
     this.option4.html("4: broomStick?")
     this.option4.position(150,160)

    
     this.input1.position(150,230)
     this.input2.position(350,230)
     this.button.position(290,300)

     this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        ParticipantsCount +=1
        contestant.index = ParticipantsCount;
        contestant.update();
        contestant.updateCount(ParticipantsCount);
     });
 }
}