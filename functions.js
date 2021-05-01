

// Function to follow when timer runs out 
function sendMessage() {
    alert("Time is up");  
  }
  


//Timer function
function setTime() {
    // Sets interval in variable
    var secondsLeft = 30;    
    var timer = document.createElement("h1");
    document.body.children[0].appendChild(timer);
    timer.setAttribute("style", "font-size: 40px; float: right; margin: auto;");
    var timerInterval = setInterval(function() {
      secondsLeft--;
    //   timer.textContent = secondsLeft + "SLKDJFLSKDFJLKDFJS";
      timer.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
        return;
      }
  
    }, 1000);
}




//Main part of the page
    //Header: Quiz challenge
    function mainpage() {
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
            //hiding the first "Quiz challenge" page when you click button
            document.body.children[1].style.display = "none";
            //Clicking start button triggers first question
            setTime();
            firstQuestion();
            //click start button triggers creating a timer 
            return;
          };


        // startQuizbutton.onclick(firstQuestion); 

    }


//Question for Tutor, how can I get my question to show on a new line?    
//1st Question
    //first question: Which of these characters is a mutant in the movie Xmen?
    //Choices: spiderman, wolverine, superman, wonderwoman, make these options into buttons
    function firstQuestion() {

        var firstQuestion = document.createElement("h2");
        firstQuestion.textContent = "Which of these characters is a mutant in the Xmen movies?"; 
        document.body.children[2].appendChild(firstQuestion);
        firstQuestion.setAttribute("style", "font-size: 50px; display: block; text-align: center;");

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
        question1Choice4.innerHTML = "Wonderomwan";
        //add the button to the page
        document.body.children[2].appendChild(question1Choice4);
        question1Choice4.setAttribute("style", "font-size: 50px; display: block; margin: auto; text-align: center;");

    }


        //When question is answered INCORRECTLY, subtract time from timer
        //When question is answered CORRECTLY, present another question
    
    //second question: Generally, what color is grass?
    //red, blue, green, purple, make these options into buttons
        //When question is answered INCORRECTLY, subtract time from timer
        //When question is answered CORRECTLY, present another question


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

//View highscores page
    //Highscores header
    //ordered list of users
    //Button of "Restart Quiz"
    //Button of "Clear Highscores"



    //functions
mainpage();
