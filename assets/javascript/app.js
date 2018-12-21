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
            question: "'See ya!' is the iconic home run call of what baseball announcer?", 
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
    let timer = 15;
    let intervalId;
    let userChoice ="";
    let ticking = false;
    let questionCount = gameQA.length;
    let choose;
    let index;
    let newArray = [];
    let holder = [];
    
   
    
    // This function will allow the player to click the "Play" button to start the game.
    $("#play").on("click", function () {
            $("#play").hide();
            showQuestion();
            timerRuns();
            for(let i = 0; i < gameQA.length; i++) {
            holder.push(gameQA[i]);
            }
        })

        // This function starts the timer and will decrement by 1 second.
        function timerRuns(){
            if (!ticking) {
            intervalId = setInterval(decrement, 1000);
            ticking = true;
            }
        }

        // The time will appear and show it counting down the seconds.
        function decrement() {
            $("#timer").html("<h3>Time Left: " + timer + "</h3>");
            timer --;
    
            // If the timer hits 0 before the player selects an answer, the "Time's Up!" message will appear with the correct answer displayed.
            if (timer === 0) {
                noAnswerCount++;
                stopFunction();
                $("#answer").html("<h2><b>Time's Up! The correct answer is: " + choose.options[choose.answer] + "</b></h2>");
                hidepicture();
            }
        }
    
        // Stop function for the timer.
        function stopFunction() {
            ticking = false;
            clearInterval(intervalId);
        }

        // Questions will be randomly selected from the gameQA array and the options to choose from will be displayed.
        function showQuestion() {
            index = Math.floor(Math.random()*gameQA.length);
            choose = gameQA[index];
    
        // Loop through answer options and display.
        $("#question").html("<h3>" + choose.question + "</h3>");
            for(let i = 0; i < choose.options.length; i++) {
                let userSelection = $("<div>");
                userSelection.addClass("answerOptions");
                userSelection.html(choose.options[i]);

        // The array position needs to be assigned so the answer can be checked.
        userSelection.attr("data-pickvalue", i);
        $("#answer").append(userSelection);
        }

        // This click function will allow the player to choose an answer.
        // click function to select answer and outcomes
        $(".answerOptions").on("click", function () {
            //grab array position from userChoice
            userChoice = parseInt($(this).attr("data-pickvalue"));
            
            // This statement will compare the player's answer with the correct answer.
            // Correct or Wrong will appear on the screen dependent on the outcome.
            if (userChoice === choose.answer) {
                stopFunction();
                rightCount++;
                userChoice="";
                $("#answer").html("<h2><b>Correct!</b></h2>");
                hidepicture();
                
            } else {
                stopFunction();
                wrongCount++;
                userChoice="";
                $("#answer").html("<h2><b>Wrong! The correct answer is: " + choose.options[choose.answer] + "</b></h2>");
                hidepicture();
            }
        })
        }

        function hidepicture () {
            $("#answer").append("<img src=" + choose.image + ">");
            newArray.push(choose);
            gameQA.splice(index,1);

            var hidepics = setTimeout(function() {
                $("#answer").empty();
                timer= 15;         
            
            // The screen with the finals results will appear if all of the counts equal the amount of questionCount.
            if ((wrongCount + rightCount + noAnswerCount) === questionCount) {
                $("#question").empty();
                $("#question").html("<h1>Game Over!</h1>");
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
        }
    });