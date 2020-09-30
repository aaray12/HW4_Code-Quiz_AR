var myQuestions = document.querySelector("#questions");
var button1 = document.querySelector("#btn1");
var button2 = document.querySelector("#btn2");
var button3 = document.querySelector("#btn3");
var button4 = document.querySelector("#btn4");
var buttons = document.querySelectorAll("buttonz");

var count = 0;
var score = 0;

var qAndAs=[
    {q: "Question 1", a: "answer 1", wa1: "wrong answer 1", wa2 : "wrong anmswer 2", wa3 : "wrong answer 3"},
    {q: "Question 2", a: "answer 2", wa1: "wrong answer 1", wa2 : "wrong anmswer 2", wa3 : "wrong answer 3"}, 
    {q: "Question 3", a: "answer 3", wa1 : "wrong answer 1",  wa2 : "wrong anmswer 2", wa3 : "wrong answer 3"},
    {q: "Question 4", a: "answer 4", wa1 : "wrong answer 1",  wa2 : "wrong anmswer 2", wa3 : "wrong answer 3"},
    {q: "Question 5", a: "answer 5", wa1 : "wrong answer 1",  wa2 : "wrong anmswer 2", wa3 : "wrong answer 3"},
];

function fillText(){

    myQuestions.textContent = qAndAs[count].q;

    var buttonArray = [button1, button2, button3, button4];
    var i;
    function randomBtn(){
        i = Math.floor(Math.random() * buttonArray.length);
        return buttonArray[i];
    }
    var j = randomBtn();
    j.textContent = qAndAs[count].a;
    buttonArray.splice(i, 1);

    var j = randomBtn();
    j.textContent = qAndAs[count].wa1;
    buttonArray.splice(i, 1);

    var j = randomBtn();
    j.textContent = qAndAs[count].wa2;
    buttonArray.splice(i, 1);

    var j = randomBtn();
    j.textContent = qAndAs[count].wa3;
    buttonArray.splice(i, 1);
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
        count = 0;
        var highScore = localStorage.getItem("High Score");
        if(score > highScore){
            localStorage.setItem("High Score", score);
        }
        alert("Game Over");
        var highScore = localStorage.getItem("High Score");
        console.log(highScore);
        alert("Your Score: " + score + " High Score: " + highScore)
        score = 0;
        fillText();
    }
    fillText();
}


// fillText();
button1.addEventListener("click", checkAnswer);
button2.addEventListener("click", checkAnswer);
button3.addEventListener("click", checkAnswer);
button4.addEventListener("click", checkAnswer);

