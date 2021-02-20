let timer = document.querySelector(".timer");
var question = $("#question");
var choices = $("#choices");

var startBtn = $("#start-btn");



var heading = $('h1');
var qDiv = $('.qDiv');

var answers = $('.answers')
 

//array storing objects with quiz questions and answers
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correctAnswer: "alerts"
    },
    {
        question: "the condidtion in an if else statement is inclosed within:",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets",
        },
        correctAnswer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "objects",
            d: "all of the above",
        },
        correctAnswer: "all of the above"
    },
    {
        question: "String values must be inclosed within when being assigned to a variable",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses",
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is:",
        answers: {
            a: "javascript",
            b: "terminal",
            c: "console.log",
            d: "for loops",
        },
        correctAnswer: "console.log"
    }
];

var pos = 0;
var currentQuestion = quizQuestions[pos].question;
var chA = quizQuestions[pos].answers.a;
var chB = quizQuestions[pos].answers.b;
var chC = quizQuestions[pos].answers.c;
var chD = quizQuestions[pos].answers.d;

console.log(pos);

var timeLeft = 60;
//Runs timer/ starts first question
function startGame() {
    

    
    /* callQuestions(); */
    
    heading.text(currentQuestion);
    
    //removes start button
    startBtn.remove();

    //removes rules
    qDiv.text('');

    console.log();

    //displays question answers
    qDiv.append("<button class='btn answers' value='a'>"+chA+"</button>");
    qDiv.append("<button class='btn answers' value='b'>"+chB+"</button>");
    qDiv.append("<button class='btn answers' value='c'>"+chC+"</button>");
    qDiv.append("<button class='btn answers' value='d'>"+chD+"</button>");
    
    
    /* gameTimer(); */

    
}

var gameTimer = setInterval(function () {
    
    if (timeLeft > 1) {
        timer.textContent = "timer: " + timeLeft;
        timeLeft--;
    } else {
        timer.textContent = 0;
        clearInterval(gameTimer);
    }
}, 1000);


  
  function checkAnswer(event) {
    var chosenAnswer = event.target;
    if (chosenAnswer.textContent === quizQuestions[pos].correctAnswer) {
        qDiv.append("<p>Correct!</p>");
        setTimeout(nextQuestion, 1000);
    } else {
        qDiv.append("<p>Incorrect!</p>");
        timeLeft -= 10;
        setTimeout(nextQuestion, 1000);
    }
  }

  function nextQuestion() {
    if (pos === quizQuestions.length - 1 || timeLeft === 0) {
        gameOver();
        stopCount();
    } else {
        pos++;

        currentQuestion = quizQuestions[pos].question;
        chA = quizQuestions[pos].answers.a;
        chB = quizQuestions[pos].answers.b;
        chC = quizQuestions[pos].answers.c;
        chD = quizQuestions[pos].answers.d;

        heading.text('');
        qDiv.text('');
        console.log(currentQuestion);
        heading.text(currentQuestion);
        
        qDiv.append("<button class='btn answers' value='a'>"+chA+"</button>");
        qDiv.append("<button class='btn answers' value='b'>"+chB+"</button>");
        qDiv.append("<button class='btn answers' value='c'>"+chC+"</button>");
        qDiv.append("<button class='btn answers' value='d'>"+chD+"</button>");
    }

    console.log(pos); 
    
};

function stopCount() {
    clearInterval(gameTimer);
};
/* var submitScore = $("#submitScore"); */
var submitDiv = $(".questions");
function gameOver() {
    heading.text('');
    qDiv.remove();

    /* var highScoreSubmit = $('<div>').addClass('score-page'); */

    submitDiv.append(submitScoreBtn);
    var submitScoreBtn = $('<button>').attr('id', 'submitScore').text("Submit").addClass("btn");
    /* submitScoreBtn.text("Submit").addClass("btn"); */
    submitDiv.text("Enter Initials:").append('<input class="text-box game-over" type="textbox"/>')
    submitDiv.append(submitScoreBtn);
    submitDiv.append("Your final score is " + timeLeft).addClass('game-over');
    submitScoreBtn.on("click", saveHighScores);
    heading.text("All done!")
    
    
   /*  submitDiv.text("Enter Initials:").append('<input class="text-box game-over" type="textbox"/>')
    submitDiv.append(submitScoreBtn); */
};

function saveHighScores() {
    localStorage.setItem("highScore", JSON.stringify( {"initials": "bjh", "score": timeLeft }));
    submitDiv.text('');
    heading.text('');
    
    heading.text('High Scores');
};


startBtn.on("click", startGame);
qDiv.on('click', checkAnswer);
