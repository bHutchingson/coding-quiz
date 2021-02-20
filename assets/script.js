let timer = $(".timer");
var question = $("#question");
var choices = $("#choices");

var startBtn = $("#start-btn");

var highScoresList = $('#highScoresList')

var heading = $('h1');
var qDiv = $('.qDiv');

var answers = $('.answers')

var initials;
var submitDiv = $(".questions");
 

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
//runs game timer
var gameTimer = setInterval(function () {
    
    if (timeLeft > 1) {
        timer.textContent = "timer: " + timeLeft;
        timeLeft--;
    } else {
        timer.textContent = 0;
        clearInterval(gameTimer);
    }
}, 1000);


  //checks if answers are correct
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
  };

  //goes to the next question once the previous question is answered
  function nextQuestion() {
    if (pos === quizQuestions.length - 1 || timeLeft === 0) {
        gameOver();
        stopCount();
    } else {
        pos++;

        //sets the pos to the next question and answers
        currentQuestion = quizQuestions[pos].question;
        chA = quizQuestions[pos].answers.a;
        chB = quizQuestions[pos].answers.b;
        chC = quizQuestions[pos].answers.c;
        chD = quizQuestions[pos].answers.d;

        //clears previous question
        heading.text('');
        qDiv.text('');

        //displays new question and answers
        heading.text(currentQuestion);
        qDiv.append("<button class='btn answers' value='a'>"+chA+"</button>");
        qDiv.append("<button class='btn answers' value='b'>"+chB+"</button>");
        qDiv.append("<button class='btn answers' value='c'>"+chC+"</button>");
        qDiv.append("<button class='btn answers' value='d'>"+chD+"</button>");
    }
};

//ends game timer
function stopCount() {
    clearInterval(gameTimer);
};

//displays screen to record and save initials and score
function gameOver() {
    heading.text('');
    qDiv.text('');
    submitDiv.append(heading);

    /* var highScoreSubmit = $('<div>').addClass('score-page'); */

    submitDiv.append(submitScoreBtn);
    var submitScoreBtn = $('<button>').attr('id', 'submitScore').text("Submit").addClass("btn");
    
    submitDiv.text("Enter Initials:")/* .append('<input class="text-box game-over" type="textbox"/>') */
    /* var initialsInput = submitDiv.append('<input class="text-box game-over" type="textbox"/>'); */

    /* var initialsInput = $('<input/>');
    initialsInput.attr({type: 'text', name: 'text', placeholder: 'initials'}).attr('id', 'initials-text'); */
    var initialsInput = $('<input type="text"/>').attr('id', 'initials-text');

    submitDiv.append(initialsInput);
    submitDiv.append(submitScoreBtn);
    initials = $('initials-text').val();
    submitDiv.append("Your final score is " + timeLeft).addClass('game-over');
    heading.text("All done!");
    localStorage.setItem("score", timeLeft);
    localStorage.setItem("initials", initials);
    /* localStorage.setItem("highScore", JSON.stringify({"initials": initials, "score": timeLeft })); */
    submitScoreBtn.on("click", saveHighScores);
    
    

   
   /*  submitDiv.text("Enter Initials:").append('<input class="text-box game-over" type="textbox"/>')
    submitDiv.append(submitScoreBtn); */
};

//saves highscores
function saveHighScores(event) {
    event.preventDefault();
    /* localStorage.setItem("highScore", JSON.stringify({"initials": initials, "score": timeLeft })); */
    submitDiv.text('');
    heading.text('');
    heading.text('High Scores');
    highScoreList = $('ol');
    submitDiv.append(highScoreList);
    var highScoreUser = $('li');
    highScoreUser.text = (localStorage.getItem(initials) + localStorage.getItem(timeLeft));
    var goBackBtn = $('<button>').attr('id', 'submitScore').text("Go Back").addClass("btn");
    submitDiv.append(goBackBtn);
    var clearHighScoresBtn = $('<button>').attr('id', 'submitScore').text("Clear Highscores").addClass("btn");
    submitDiv.append(clearHighScoresBtn);
    
    
};


startBtn.on("click", startGame);
qDiv.on('click', checkAnswer);
