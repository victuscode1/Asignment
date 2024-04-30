//  Taking username from the input
function submitUsername() {
    // Get the value entered by the user
    var username = document.getElementById("username").value;
    console.log("Username entered:", username);
}





// jumping on the topic
function startQuiz(topic) {
    document.querySelector('.container-H').style.display = 'none'; // Hide home page
    document.querySelector('.container-Q').style.display = 'block'; // Show quiz page
    document.getElementById('toPic-Name').textContent = 'Quiz Topic: ' + topic; // Set quiz topic
    console.log(topic);

    

    // Start timer for quiz (adjust time as needed)
    var quizTime = 100; // Time in seconds
    var timerInterval = setInterval(function() {
        quizTime--;
        document.getElementById('timeR').textContent = 'Time Remaining: ' + quizTime + 's';
        if (quizTime <= 0) {
            clearInterval(timerInterval);
            submitQuiz(); // Submit quiz when time is up
        }
    }, 1000);
    
    
    
     // Populate questions and options based on the selected topic
    //  if (topic === 'PipeAndCistern') {
    //     // Question 1
    //     document.getElementById('quesTion').textContent = "In how many minutes will a pipe fill a cistern if it takes 8 minutes to empty the cistern?";
    //     document.getElementById('oP1').textContent = "A) 8 minutes";
    //     document.getElementById('oP2').textContent = "B) 16 minutes";
    //     document.getElementById('oP3').textContent = "C) 24 minutes";
    //     document.getElementById('oP4').textContent = "D) 32 minutes";
        






    // }

}


// Function to submit the quiz
function submitQuiz() {
    // Get the user's answers and perform any necessary validation
    var answers = getSelectedAnswers(); // Implement this function to retrieve selected answers
    
    // Send the answers to the server or process them locally
    // For now, let's assume we just log them to the console
    console.log("Submitted answers:", answers);
    
    // Optionally, you can display a confirmation message to the user
    alert("Quiz submitted successfully!");
    
    // Redirect the user to the quiz result page or any other page
    window.location.href = "quiz_result.html"; // Adjust the URL as needed
}


// Initialize score outside the function
var scoRe = 0;

// Function to handle user submission
function checkAnswer(selectedOption) {
    // Logic to check the selected answer
    // Get the selected answer from the button text
    var selectedAnswer = selectedOption.textContent.trim();

    // Get the correct answer for the current question
    var correctAnswer = questions[currentQuestionIndex].answer;

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        // Correct answer
        console.log("Correct!");
        scoRe++; // Increment score
    } else {
        // Incorrect answer
        console.log("Incorrect!");
    }
    
    // Update the displayed score
    document.getElementById("scoRe").innerHTML = "SCORE:  ",+ scoRe;
}



// Function to load the next question
function loadNextQuestion() {
    // Implement logic to load the next question
    // For demonstration purposes, let's assume you have an array of questions and a variable to track the current question index
    //  currentQuestionIndex[0]=1;
    // Check if there are more questions to display
    if (currentQuestionIndex < questions.length ) {
        // Increment the current question index to move to the next question
        currentQuestionIndex++;

        const questionNumber = currentQuestionIndex +1; // Enter the desired question number here
document.getElementById("qNo").innerHTML = questionNumber;
        
        // Get the next question from the array
        var nextQuestion = questions[currentQuestionIndex];
        
        // Display the next question on the quiz interface
        displayQuestion(nextQuestion);
    } 
    
    else {
        // If there are no more questions, display a message to the user
        alert("You have completed all the questions!");
    }
}

// Function to display a question on the quiz interface
function displayQuestion(question) {
    // Implement logic to display the question on the quiz interface
    // This function will vary based on your specific HTML structure and how you're storing the questions
    
    // For demonstration purposes, let's assume you have elements in your HTML to display the question text and options
    // You would update these elements with the content of the next question

    // Example:
    document.getElementById('quesTion').textContent = question.text;
    document.getElementById('oP1').textContent = question.options[0];
    document.getElementById('oP2').textContent = question.options[1];
    document.getElementById('oP3').textContent = question.options[2];
    document.getElementById('oP4').textContent = question.options[3];
}

// Example array of questions (replace this with your actual data)


var questions = [
    {
        text: "A pipe can fill a cistern in 15 hours, while another pipe can empty it in 20 hours. If both pipes are opened simultaneously, how long will it take to fill the cistern?",
        options: ["8 hrs", "12 hrs", "34 hrs", "32 hrs"],
        answer: "12 hrs"
    },
    {
        text: "If a pipe can fill a tank in 12 hours and another pipe can empty it in 16 hours, how long will it take to fill the tank if both pipes are opened simultaneously?",
        options: ["8 hrs", "12 hrs", "34 hrs", "32 hrs"],
        answer: "8 hrs"
    },

    {
        text: "A tap can fill a tank in 6 hours, and a pipe can empty the same tank in 8 hours. If both are opened together, how long will it take to fill the tank?",
        options: ["8 hrs", "12 hrs", "16 hrs", "32 hrs"],
        answer: "16 hrs"
    },
    {
        text: "A pipe can fill a cistern in 4 hours, but due to a leak, it takes 6 hours to fill the cistern. How long will the leak take to empty the full cistern?",
        options: ["8 hrs", "12 hrs", "16 hrs", "32 hrs"],
        answer: "12 hrs"
    },

    {
        text: "A tap can fill a tank in 8 hours, and a pipe can empty the tank in 12 hours. If both tap and pipe are opened simultaneously, how long will it take to fill the tank?",
        options: ["8 hrs", "24 hrs", "16 hrs", "32 hrs"],
        answer: "24 hrs"
    },
    
    {
        text: "A pipe can fill a tank in 3 hours, while another pipe can empty the same tank in 5 hours. If both pipes are opened together, how long will it take to fill the tank?",
        options: ["8 hrs", "24 hrs", "16 hrs", "6 hrs"],
        answer: "6 hrs"
    },

    {
        text: "A pipe can fill a tank in 10 hours, and another pipe can empty it in 15 hours. If both pipes are opened together, how long will it take to fill the tank?",
        options: ["8 hrs", "24 hrs", "16 hrs", "30 hrs"],
        answer: "30 hrs"
    },

    {
        text: "A pipe can fill a tank in 5 hours, while another pipe can empty it in 7 hours. If both pipes are opened together, how long will it take to fill the tank?",
        options: ["3.5 hrs", "24 hrs", "16 hrs", "32 hrs"],
        answer: "3.5 hrs"
    },

    {
        text: "A pipe can fill a tank in 6 hours, while another pipe can empty it in 8 hours. If both pipes are opened together, how long will it take to fill the tank?",
        options: ["8 hrs", "24 hrs", "7 hrs", "32 hrs"],
        answer: "7 hrs"
    },
];

// Variable to track the current question index
var currentQuestionIndex = -1; // Initialize to -1 to start with the first question






// Initialize variables for quiz result




var participantName = "";
var totalTimeTaken = "";
var totalQuestions = questions.length;
var attempts = 0;
var correctQuestions = 0;
var wrongQuestions = 0;
var scorePercentage = 0;

// Function to start the quiz again
function startQuizAgain() {
    location.reload(); // Reload the page to start the quiz again
}

// Function to go to the home page
function goToHome() {
    window.location.href = "index.html"; // Redirect to the home page
}

// Function to submit the quiz result
function submitQuizResult() {
    // Get participant name from input
    participantName = document.getElementById("participant-name").value;
    // Calculate score percentage
    scorePercentage = (correctQuestions / totalQuestions) * 100;

    // Display quiz result
    document.getElementById("participant-name").textContent = participantName;
    document.getElementById("total-time").textContent = totalTimeTaken;
    document.getElementById("total-questions").textContent = totalQuestions;
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("correct-questions").textContent = correctQuestions;
    document.getElementById("wrong-questions").textContent = wrongQuestions;
    document.getElementById("score-percentage").textContent = scorePercentage.toFixed(2) + "%";
}




















