let timer = document.querySelector(".timer");
let question = document.querySelector("#question");
let choices = document.querySelector("#choices");

var startGame = document.querySelector(".start-btn");
startGame.addEventListener("click", countDown);

//array storing objects with quiz questions and answers
var quizQuestions = [
    {
        question: "question 1",
        answers: {
            a: "1",
            b: "2",
            c: "3",
            d: "4",
        },
        correctAnswer: ""
    },
    {
        question: "question 2",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "question 3",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "q4",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    },
    {
        question: "q5",
        answers: {
            a: "",
            b: "",
            c: "",
            d: "",
        },
        correctAnswer: ""
    }
];


//Runs timer
function countDown() {
    var timeLeft = 60;
    startGame.disabled = false;
    showQuestions();
    
    var gameTimer = setInterval(function () {
    
        if (timeLeft > 1) {
            timer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else {
            timer.textContent = 0;
            clearInterval(gameTimer);
        }
    }, 1000);
}



function showQuestions() {
    
    var pos = 0;
    /* if(pos >= quizQuestions.length){
      question.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
      get("test_status").innerHTML = "Test completed";
      // resets the variable to allow users to restart the test
      pos = 0;
      correct = 0;
      // stops rest of renderQuestion function running when test is completed
      return false;
    } */
    
    /* for (i=0; i <= quizQuestions.length; i++) {
        pos += 1;  
    } */

    console.log(pos);

    var currentQuestion = quizQuestions[pos].question;

    chA = quizQuestions[pos].answers.a;
    chB = quizQuestions[pos].answers.b;
    chC = quizQuestions[pos].answers.c;
    chD = quizQuestions[pos].answers.d;
    
    
    // display the question
    question.innerHTML = currentQuestion;
    // display the answer options
    // the += appends to the data we started on the line above
    /* Object.assign(choices.style, styles); */
    


    choices.innerHTML = "<button value='a'>"+chA+"</button>";
    choices.innerHTML += "<button value='b'>"+chB+"</button>";
    choices.innerHTML += "<button value='c'>"+chC+"</button>";
    choices.innerHTML += "<button value='d'>"+chD+"</button>";
    /* choices.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
    choices.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
    choices.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chD+"</label><br><br>"; */
    
  }
