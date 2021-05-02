var userScore = 0;

//Timer on main page 
var timer = document.createElement("h1");
document.body.children[0].appendChild(timer);
timer.setAttribute("style", "font-size: 40px; float: right; margin: auto;");
secondsLeft = 30;
timer.textContent = secondsLeft + " seconds left";




// Function to follow when timer runs out 
function sendMessage() {
  //hide timer
  // document.body.children[0].style.display = "none";
  //display main page 
  document.body.children[1].style.display = "";
  //hide the 3 questions  
  document.body.children[2].style.display = "none";
  document.body.children[3].style.display = "none";
  document.body.children[4].style.display = "none";
//hide user entry page
  document.body.children[5].style.display = "none";
  //hide highscores page
  document.body.children[6].style.display = "none";

  alert("Time is up");
}


//Main part of the page
//Header: Quiz challenge
function mainpage() {


  //Create the Start Quiz button
  var viewHighscoresbutton = document.createElement("button");
  viewHighscoresbutton.innerHTML = "View Highscores";
  //add the Quiz button to the page
  document.body.children[1].appendChild(viewHighscoresbutton);
  viewHighscoresbutton.setAttribute("style", "font-size: 40px; float: left; margin: auto;");
  
//   //Clicking start button triggers 
//   viewHighscoresbutton.onclick = function(){
  
//   if(displayHighPage = undefined) {
//     alert("no scores!")
//   }  else {
//   //display main page 
//   document.body.children[1].style.display = "none";
//   //hide the 3 questions  
//   document.body.children[2].style.display = "none";
//   document.body.children[3].style.display = "none";
//   document.body.children[4].style.display = "none";
// //hide user entry page
//   document.body.children[5].style.display = "none";
//   //hide highscores page
//   document.body.children[6].style.display = "";   
//     return;
//   }
// }



  var Quizchallenge = document.createElement("h2");
  Quizchallenge.textContent = "QUIZ CHALLENGE!"; 
  document.body.children[1].appendChild(Quizchallenge);
  Quizchallenge.setAttribute("style", "font-size: 50px; display: block");

  //Text: Try to answer the questions within the time limit on the top right.
  //Incorrect answers will deduct 10seconds
  var quizrules = document.createElement("p");
  quizrules.textContent = "Click the 'Start Quiz' button to begin the Quiz. Try to answer the questions within the time limit on the top right. Incorrect answers will deduct 10 seconds. ";
  document.body.children[1].appendChild(quizrules);
  quizrules.setAttribute("style", "font-size: 35px; display: block");
  
  
  //Create the Start Quiz button
  var startQuizbutton = document.createElement("button");
  startQuizbutton.innerHTML = "START QUIZ";
  //add the Quiz button to the page
  document.body.children[1].appendChild(startQuizbutton);
  
  //Clicking start button triggers 
  startQuizbutton.onclick = function(){
      document.body.children[0].children[0].style.display = "";
      //hiding the first "Quiz challenge" page when you click button
      document.body.children[1].style.display = "none";
      //Clicking start button triggers first question
      secondsLeft = 30;
      
    //Timer function
    function setTime() {
      //display timer
      document.body.children[0].style.display = "";
      var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds left";

        if(secondsLeft <= 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and send alert and show main page
          sendMessage();
          //reset timer
          secondsLeft = 30;    
          return;
        }

      }, 1000);
    }
    setTime();


      runFirstQuestion();
      //click start button triggers creating a timer 
      userScore = 0;
      return;
    };

}






//Question for Tutor, how can I get my question to show on a new line?    
//1st Question
//first question: Which of these characters is a mutant in the movie Xmen?
//Choices: spiderman, wolverine, superman, wonderwoman, make these options into buttons
function runFirstQuestion() {

//make sure Question has not already been ran
if (!runFirstQuestion.isRunning) {
//Create first question if it hasn't already been generated

  var firstQuestionTitle = document.createElement("h2");
  firstQuestionTitle.textContent = "Which of these characters is a mutant in the Xmen movies?"; 
  document.body.children[2].appendChild(firstQuestionTitle);
  firstQuestionTitle.setAttribute("style", "font-size: 50px; display: block; text-align: center;");

  var question1Choice1 = document.createElement("button");
  question1Choice1.innerHTML = "Spiderman";
  //add the button to the page
  document.body.children[2].appendChild(question1Choice1);
  question1Choice1.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");

  var question1Choice2 = document.createElement("button");
  question1Choice2.innerHTML = "Wolverine";
  //add the button to the page
  document.body.children[2].appendChild(question1Choice2);
  question1Choice2.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");

  var question1Choice3 = document.createElement("button");
  question1Choice3.innerHTML = "Superman";
  //add the button to the page
  document.body.children[2].appendChild(question1Choice3);
  question1Choice3.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");

  var question1Choice4 = document.createElement("button");
  question1Choice4.innerHTML = "Wonderwoman";
  //add the button to the page
  document.body.children[2].appendChild(question1Choice4);
  question1Choice4.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
  
  //will indicate the question has already been created
  runFirstQuestion.isRunning = true;
} else {
  document.body.children[2].style.display = "";
  return;
}

  //When question is answered INCORRECTLY, subtract time from timer
  if (question1Choice1 != undefined && question1Choice2 != undefined && question1Choice3 != undefined && question1Choice4 != undefined) 
  {
    question1Choice1.onclick = function() {
      secondsLeft -= 10;
      return;
    }
    question1Choice2.onclick = function() {
      userScore += 10;
      //When question is answered CORRECTLY, present another question
      runSecondQuestion();
      return;
  
    } 
    question1Choice3.onclick = function() {
      secondsLeft -= 10;
      return;
    }

    question1Choice4.onclick = function() {
      secondsLeft -= 10;
      return;
    }

  }
}

//second question: Generally, what color is grass?
//Red, Blue, Green, Purple, make these options into buttons
  //When question is answered INCORRECTLY, subtract time from timer
  //When question is answered CORRECTLY, present another question
function runSecondQuestion() {
  //hide the prev question
  document.body.children[2].style.display = "none";

  //make sure Question has not already been ran
  if (!runSecondQuestion.isRunning) {
  //Create first question if it hasn't already been generated
  
    var secondQuestionTitle = document.createElement("h2");
    secondQuestionTitle.textContent = "Generally, what color is grass?"; 
    document.body.children[3].appendChild(secondQuestionTitle);
    secondQuestionTitle.setAttribute("style", "font-size: 50px; display: block; text-align: center;");
  
    var question2Choice1 = document.createElement("button");
    question2Choice1.innerHTML = "Red";
    //add the button to the page
    document.body.children[3].appendChild(question2Choice1);
    question2Choice1.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
  
    var question2Choice2 = document.createElement("button");
    question2Choice2.innerHTML = "Green";
    //add the button to the page
    document.body.children[3].appendChild(question2Choice2);
    question2Choice2.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
  
    var question2Choice3 = document.createElement("button");
    question2Choice3.innerHTML = "Blue";
    //add the button to the page
    document.body.children[3].appendChild(question2Choice3);
    question2Choice3.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
  
    var question2Choice4 = document.createElement("button");
    question2Choice4.innerHTML = "Purple";
    //add the button to the page
    document.body.children[3].appendChild(question2Choice4);
    question2Choice4.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
    
    //will indicate the question has already been created
    runSecondQuestion.isRunning = true;
  } else {
    document.body.children[3].style.display = "";
    return;
  }
  
    //When question is answered INCORRECTLY, subtract time from timer
    if (question2Choice1 != undefined && question2Choice2 != undefined && question2Choice3 != undefined && question2Choice4 != undefined) 
    {
      question2Choice1.onclick = function() {
        secondsLeft -= 10;
        return;
      }
      question2Choice2.onclick = function() {
        userScore += 10;
        //When question is answered CORRECTLY, present another question
        runThirdQuestion();
        return;
    
      } 
      question2Choice3.onclick = function() {
        secondsLeft -= 10;
        return;
      }
  
      question2Choice4.onclick = function() {
        secondsLeft -= 10;
        return;
      }
  
    }
  }











//third question: Generally, what color is the sun?
//Yellow, Brown, Green, Purple, make these options into buttons
  //When question is answered INCORRECTLY, subtract time from timer
  //When question is answered CORRECTLY, present another question
  function runThirdQuestion() {
  
    //hide the prev question
    document.body.children[3].style.display = "none";
  
    //make sure Question has not already been ran
    if (!runThirdQuestion.isRunning) {
    //Create first question if it hasn't already been generated
    
      var thirdQuestionTitle = document.createElement("h2");
      thirdQuestionTitle.textContent = "Generally, what color is the sun?"; 
      document.body.children[4].appendChild(thirdQuestionTitle);
      thirdQuestionTitle.setAttribute("style", "font-size: 50px; display: block; text-align: center;");
    
      var question3Choice1 = document.createElement("button");
      question3Choice1.innerHTML = "Brown";
      //add the button to the page
      document.body.children[4].appendChild(question3Choice1);
      question3Choice1.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
    
      var question3Choice2 = document.createElement("button");
      question3Choice2.innerHTML = "Yellow";
      //add the button to the page
      document.body.children[4].appendChild(question3Choice2);
      question3Choice2.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
    
      var question3Choice3 = document.createElement("button");
      question3Choice3.innerHTML = "Green";
      //add the button to the page
      document.body.children[4].appendChild(question3Choice3);
      question3Choice3.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
    
      var question3Choice4 = document.createElement("button");
      question3Choice4.innerHTML = "Purple";
      //add the button to the page
      document.body.children[4].appendChild(question3Choice4);
      question3Choice4.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");
      
      //will indicate the question has already been created
      runThirdQuestion.isRunning = true;
    } else {
      document.body.children[4].style.display = "";
      return;
    }
    
      //When question is answered INCORRECTLY, subtract time from timer
      if (question3Choice1 != undefined && question3Choice2 != undefined && question3Choice3 != undefined && question3Choice4 != undefined) 
      {
        question3Choice1.onclick = function() {
          secondsLeft -= 10;
          return;
        }
        question3Choice2.onclick = function() {
          userScore += 10;


          //When question is answered CORRECTLY, Log user score
          logUserScore();
          return;
      
        } 
        question3Choice3.onclick = function() {
          secondsLeft -= 10;
          return;
        }
    
        question3Choice4.onclick = function() {
          secondsLeft -= 10;
          return;
        }
    
      }
    }
  




//when all questions answered correctly, timer reaches 0
    //stop timer
    //store timer value into "score"
    //reset timer to 0
    //Tell user "You're done!" as a header
    //Tell user "Your final score is X."





//Prompt user for initials 
    //"Enter Initials:"
    //Create Submit button
    //Log Initials to local storage
    //Once user clicks submit, direct them to Highscores page





    //functions
function logUserScore() {

  //hide the prev question
  document.body.children[4].style.display = "none";

  if (!logUserScore.isRunning) {

  var quizComplete = document.createElement("h2");
  quizComplete.textContent = "The quiz is complete!"; 
  document.body.children[5].appendChild(quizComplete);
  quizComplete.setAttribute("style", "font-size: 50px; display: block");

  var presentScore = document.createElement("p");
  presentScore.textContent = "Your final score is " + userScore + "." + " Enter your initials below.";
  document.body.children[5].appendChild(presentScore);
  presentScore.setAttribute("style", "font-size: 35px; display: block");
  
  
  var writeInitials = document.createElement("input");
  writeInitials.setAttribute("type", "text")
  writeInitials.setAttribute("style", "display: inline")
  document.body.children[5].appendChild(writeInitials);

  //Create the Start Quiz button
  var submitInitials = document.createElement("button");
  submitInitials.innerHTML = "SUBMIT";
  submitInitials.setAttribute("style", "display: inline")
  //add the Quiz button to the page
  document.body.children[5].appendChild(submitInitials);
      
  //Clicking start button triggers 
  submitInitials.onclick = function(){
    displayHighPage();
  }

  logUserScore.isRunning = true;
  } else {
    document.body.children[5].style.display = "";
    return;
  }


  function displayHighPage() {
    document.body.children[5].style.display = "none";

    if (!displayHighPage.isRunning) {
    var highscores = document.createElement("h2");
    highscores.textContent = "Highscores"; 
    document.body.children[6].appendChild(highscores);
    highscores.setAttribute("style", "font-size: 50px; display: block");
  

    var scoreList = document.createElement("ol");
    scoreList.textContent = "1. TP 30"; 
    document.body.children[6].appendChild(scoreList);
    scoreList.setAttribute("style", "font-size: 20px; display: block");
  
    //Create the reutrn to main page button
    var returnMainPage = document.createElement("button");
    returnMainPage.innerHTML = "Return to main page";
    document.body.children[6].appendChild(returnMainPage);
    secondsLeft = 30;
    displayHighPage.isRunning = true;
  }  else {
      document.body.children[6].style.display = "";
      secondsLeft = 30;
      return;
    }
    returnMainPage.onclick = function(){
     document.body.children[1].style.display = "";
     //hide the 3 questions  
     document.body.children[2].style.display = "none";
     document.body.children[3].style.display = "none";
     document.body.children[4].style.display = "none";
   //hide user entry page
     document.body.children[5].style.display = "none";
     //hide highscores page
     document.body.children[6].style.display = "none";
   
    }
  


    //Button of "Restart Quiz"
    //Button of "Clear Highscores"
      userScore = 0;
      return;
    }
  }


mainpage();
