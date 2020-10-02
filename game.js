var myQuestions = document.querySelector("#questions");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var buttons = document.querySelectorAll("buttonz");

var count = 0;
var score = 0;

var qAndAs=[
    {q: "How many Oscars does Tom Hanks have?", a: "0", wa1: "1", wa2 : "2", wa3 : "3"},
    {q: "Which one of these is the TV show Tom Hanks starred in?", a: "Bosom Buddies", wa1: "Breast Brothers", wa2 : "Boobs Noobs", wa3 : "Chest Cousins"}, 
    {q: "Which one of these Tom Hanks movies did NOT co-star Meg Ryan", a: "The Terminal", wa1 : "You've Got Mail",  wa2 : "Joe Versus The Volcano", wa3 : "Sleepless In Seattle"},
    {q: "How many acting credits does Tom Hanks have", a: "75-99", wa1 : "25-49",  wa2 : "50-74", wa3 : "100+"},
    {q: "What movie did Tom Hanks Direct?", a: "That Thing You Do", wa1 : "The Green Mile",  wa2 : "Sully", wa3 : "Castaway"},
];

function fillText(){

    myQuestions.textContent = qAndAs[count].q;
    

    var buttonArray = [button1, button2, button3, button4];
    var answerArray = [qAndAs[count].a, qAndAs[count].wa1, qAndAs[count].wa2, qAndAs[count].wa3];
    var i;
    var counter = 0;
    for(g=0; g < 4; g++){
    function randomBtn(){
        i = Math.floor(Math.random() * buttonArray.length);
        return buttonArray[i];
    }
    var j = randomBtn();
    j.textContent = answerArray[counter];
    buttonArray.splice(i, 1);
    counter++;
}
}
fillText();

function checkAnswer(){
    if (this.textContent != qAndAs[count].a){
        alert("Incorrect!");
    }
    else{
        alert("Correct!");
        score++;
    }
    count++;
    if (count >= qAndAs.length){
        localStorage.setItem("score", score);
        window.location.href = "./done.html";
    }
    else{fillText();}
}

button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

