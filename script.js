//current page is set to zero to match with array value
var currentPage = 0;
var correct = 0;
var myQuiz = [
    ["Question 1", "A 123", "B 345", "C 456", "D hello", "A 123"],
    ["Question 2", "Ayooo", "Boo", "Code", "Dude", "Boo"],
    ["Question 3", "A", "B", "C", "D", "D"],
    ["Question 4", "A", "B", "C", "D", "A"]
]

var scores = [];

// 3 different pages of the quiz 
var startPage = document.getElementById("quizStart");
var quizPages = document.getElementById("quizContent");
var resultsPage = document.getElementById("quizComplete");

//Initiate quiz upon click 
function beginQuiz(){
   
    startPage.classList.add("hide");
    startPage.classList.remove("show");
    quizPages.classList.add("show");
    quizPages.classList.remove("hide");

    //on click function start timer 
    var count = 150;
    var interval = setInterval(function(){
    document.getElementById('count').innerHTML=count;
    count--;
    if (count === 0){
        clearInterval(interval);
        document.getElementById('count').innerHTML='Done';
    }
    }, 1000);

}

document.getElementById("btnStart").addEventListener("click", beginQuiz);


var answers = document.getElementsByClassName("answers");
console.log(`Quiz is ${myQuiz.length} questions long`);
var myQuestion = document.getElementById("questions");
/* 
    console.log(myQuestion.children[0]);
    console.log(myQuestion.children[1]);
    console.log(myQuestion.children[2]);
    console.log(myQuestion.children[3]); */


var myHeader = document.getElementById("quizHeader");
var answersClass = document.getElementsByClassName("answer");
console.log(`number of possible answers ${answersClass.length}`);

document.getElementById("questions").addEventListener("click", myAnswer);
document.getElementById("questions").addEventListener("click", checkScore);
document.getElementById("questions").addEventListener("click", nextQuestion);


checkPage();


function myAnswer() {
    var idAnswer = event.target.textContent;
    console.log(event.target.textContent)
    if(myQuiz[currentPage][5]==idAnswer){
        console.log('Correct Answer');
        return correct++;
    } else{
        console.log('Wrong Answer');
    }

}

function checkScore(){
    console.log(`Scored ${correct}`)
}

function completeQuiz(){
    quizPages.classList.add("hide");
    quizPages.classList.remove("show");
    resultsPage.classList.add("show");
    resultsPage.classList.remove("hide");

    init();

    var scoresList = document.querySelector(".results");

    function renderScores() {
        // Clear scores element 
        scoresList.innerHTML = "";
      
        // Render a new li for each todo
        for (var i = 0; i < scores.length; i++) {
          var scores = scores[i];
      
          var li = document.createElement("li");
          li.textContent = scores;
          li.setAttribute("data-index", i);

          todoList.appendChild(li);
        }
      }

    function init() {
        // Get stored scores from localStorage
        // Parsing the JSON string to an object
        var storedScores = JSON.parse(localStorage.getItem("scores"));
      
        // If scores were retrieved from localStorage, update the scores array to it
        if (storedScores !== null) {
          scores = storedScores;
        }
      
        // Render scores to the DOM
        renderScores();

    }

}

function nextQuestion() {
    if(currentPage < (myQuiz.length-1)){
        currentPage++;
        checkPage(currentPage);
    } else {
        console.log("Quiz is complete")
        completeQuiz();
    }
   
}

function checkPage() {
    console.log(`you are on page ${currentPage+1}`);
    myHeader.innerHTML = myQuiz[currentPage][0];
    for (var i=0; i<4; i++)
    {
        myQuestion.children[i].innerHTML = myQuiz[currentPage][i+1]
        // console.log(`Child ${i} is`+myQuestion.children[i].innerHTML);
    }
}


