var scoresList = document.querySelector("#myScores");
var newDiv = document.createElement("div");
var highScores = JSON.parse(localStorage.getItem("highScores"))
highScores.sort((a, b) => b.score - a.score);
highScores.splice(10);
console.log(highScores.length);

    for(i=0; i < highScores.length; i++){
        var text = document.createElement("li");
       text.textContent = highScores[i].initials +": " + highScores[i].score;
    scoresList.appendChild(text);}
function playAgain(){
    window.location.href = "./game.html";
}
function clearScores(){
    localStorage.clear;
}