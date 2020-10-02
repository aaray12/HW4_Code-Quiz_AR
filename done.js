
var score = localStorage.getItem("score");
document.querySelector("#YS").textContent = "Your Score: " + score;


function clicked(){
    var initials = document.getElementById("initials").value;
    // localStorage.setItem("myInitials", initials)
    // localStorage.setItem(initials, initials + ": " + score)
    var highScores = JSON.parse(localStorage.getItem("highScores"))|| [];

    var scores = {
        score: score,
        initials: initials,
    }
    highScores.push(scores);
    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.href = "./highscore.html";
}