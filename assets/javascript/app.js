$(document).ready(function () {
    // This variable will hold an array of questions, options, answers, and images for the game.
    let gameQA = [
        {
            question: "Who of these Hall of Famers hit the least amount of World Series home runs in his career?", 
            options: ["Joe DiMaggio", "Chipper Jones", "Trevor Hoffman", "Ken Griffey Jr."],
            answer: 0,
            image: "./assets/images/joedimaggio.jpg"
         },
         {
            question: "Which of these athletes has a notably obscured glabella?", 
            options: ["Michael Phelps", "Michael Strahan", "Anthony Davis", "Dennis Rodman"],
            answer: 2,
            image: "./assets/images/anthonydavis.jpg"
         }, 
         {
            question: "Which baseball hitter holds the record for most total bases in a 9-inning game?", 
            options: ["Gil Hodges", "Barry Bonds", "Derek Jeter", "Shawn Green" ],
            answer: 3,
            image: "./assets/images/shawngreen.jpg"
        }, 
        {
            question: "In boxing, which of the following weight classes is the heaviest?", 
            options: ["Welterweight", "Super Lightweight", "Cruiserweight", "Light Heavyweight" ],
            answer: 2,
            image: "./assets/images/cruiserweight.jpg"
        }, 
        {
            question: "Which NBA franchise has the most individual winners in the Slam Dunk Contest?", 
            options: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Atlanta Hawks" ],
            answer: 3,
            image: "./assets/images/atlantahawks.png"
        }, 
        {
            question: "Which of these music artists has NOT performed on the Super Bowl halftime show?", 
            options: ["Van Halen", "Justin Timberlake", "Beyonce", "Michael Jackson" ],
            answer: 0,
            image: "./assets/images/vanhalen.jpg"
        }, 
        {
            question: "Basketball was invented in the U.S. state that is also home to which of these islands?", 
            options: ["Jekyll Island", "Martha's Vineyard", "Staten Island", "Hilton Head" ],
            answer: 1,
            image: "./assets/images/marthasvineyard.png"
        }, 
        {
            question: "See ya!” is the iconic home run call of what baseball announcer?", 
            options: ["Joe Buck", "Bob Uecker", "Michael Kay", "Rod Allen" ],
            answer: 2,
            image: "./assets/images/michaelkay.jpg"
        },
        {
            question: "What is the fastest sanctioned car racing sport in the world?", 
            options: ["Nascar", "Top Fuel Drag", "Mario Kart", "Formula 1" ],
            answer: 1,
            image: "./assets/images/topfueldrag.jpg"
        },
        {
            question: "Which of these cities currently boasts an NHL team?", 
            options: ["Las Vegas", "Atlanta", "Seattle", "Portland" ],
            answer: 0,
            image: "./assets/images/vegasgoldenknights.png"
        },
        {
            question: "Which city’s NBA team name is also a term for male ballet dancers?", 
            options: ["Toronto", "Golden State", "Miami", "Cleveland" ],
            answer: 3,
            image: "./assets/images/cavaliers.png"
        },        
        {
            question: "Which NFL team does Julio Jones play for?", 
            options: ["Baltimore Ravens", "Oakland Raiders", "Atlanta Falcons", "Chicago Bears" ],
            answer: 2,
            image: "./assets/images/juliojones.jpg"
        }];
    // More variables
    let rightCount = 0;
    let wrongCount = 0;
    let noAnswerCount = 0;
    let timer = 1;
    let intervalId;
    let userChoice ="";
    let ticking = false;
    let questionCount = gameQA.length;
    let choose;
    let index;
    let newArray = [];
       
    // This function will allow the player to click the "Play" button to start the game.
    $("#play").on("click", function () {
            $("#play").hide();
            showQuestion();
            timerRuns();
            for(let i = 0; i < gameQA.length; i++) {
    }
        })
    // This function starts the time and starts to decrements by 1 second.
    function timerRuns(){
        if (!ticking) {
        intervalId = setInterval(decrement, 1000); 
        ticking = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timer").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop timer if reach 0
        if (timer === 0) {
            noAnswerCount++;
            stop();
            $("#answer").html("<p>Time is up! The correct answer is: " + choose.options[choose.answer] + "</p>");
            hidepicture();
        }	
    }
    
    //timer stop
    function stop() {
        ticking = false;
        clearInterval(intervalId);
    }
    //randomly select questions from the array if not already shown
    //display question and loop though and display possible answers
    function showQuestion() {
        //generate random index in array
        index = Math.floor(Math.random()*gameQA.length);
        choose = gameQA[index];
    
    //	if (choose.shown) {
    //		//recursive to continue to generate new index until one is chosen that has not shown in this game yet
    //		showQuestion();
    //	} else {
    //		console.log(choose.question);
            //iterate through answer array and display
            $("#question").html("<h2>" + choose.question + "</h2>");
            for(let i = 0; i < choose.options.length; i++) {
                var userPick = $("<div>");
                userPick.addClass("answerchoice");
                userPick.html(choose.options[i]);
                //assign array position to it so can check answer
                userPick.attr("data-guessvalue", i);
                $("#answer").append(userPick);
    //		}
    }
    
    
    
    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userChoice
        userChoice = parseInt($(this).attr("data-guessvalue"));
    
        //correct guess or wrong guess outcomes
        if (userChoice === choose.answer) {
            stop();
            rightCount++;
            userChoice="";
            $("#answer").html("<p>Correct!</p>");
            hidepicture();
    
        } else {
            stop();
            wrongCount++;
            userChoice="";
            $("#answer").html("<p>Wrong! The correct answer is: " + choose.options[choose.answer] + "</p>");
            hidepicture();
        }
    })
    }
    
    
    function hidepicture () {
        $("#answer").append("<img src=" + choose.image + ">");
        newArray.push(choose);
        gameQA.splice(index,1);
    
        let hidpic = setTimeout(function() {
            $("#answer").empty();
            timer= 1;
    
        //run the score screen if all questions answered
        if ((wrongCount + rightCount + noAnswerCount) === questionCount) {
            $("#question").empty();
            $("#question").html("<h3>Game Over!</h3>");
            $("#answer").append("<h4> Right Answers: " + rightCount + "</h4>" );
            $("#answer").append("<h4> Wrong Answers: " + wrongCount + "</h4>" );
            $("#answer").append("<h4> No Answers: " + noAnswerCount + "</h4>" );
            rightCount = 0;
            wrongCount = 0;
            noAnswerCount = 0;
    
        } else {
            timerRuns();
            showQuestion();
        }}, 3000);
    };
});