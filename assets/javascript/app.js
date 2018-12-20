$(document).ready(function (){

    // List of questions, options, answers, and photos associated with the correct answers.
    let gameQA = [
        {
            question: "Who of these Hall of Famers hit the least amount of World Series home runs in his career?", 
            choice: ["Joe DiMaggio", "Chipper Jones", "Trevor Hoffman", "Ken Griffey Jr."],
            answer: 0,
            photo: "assets/images/joedimaggio.jpg"
         },
         {
            question: "Which of these athletes has a notably obscured glabella?", 
            choice: ["Michael Phelps", "Michael Strahan", "Anthony Davis", "Dennis Rodman"],
            answer: 2,
            photo: "assets/images/anthonydavis.jpg"
         }, 
         {
            question: "Which baseball hitter holds the record for most total bases in a 9-inning game?", 
            choice: ["Gil Hodges", "Barry Bonds", "Derek Jeter", "Shawn Green" ],
            answer: 3,
            photo: "assets/images/shawngreen.jpg"
        }, 
        {
            question: "In boxing, which of the following weight classes is the heaviest?", 
            choice: ["Welterweight", "Super Lightweight", "Cruiserweight", "Light Heavyweight" ],
            answer: 2,
            photo: "assets/images/cruiserweight.jpg"
        }, 
        {
            question: "Which NBA franchise has the most individual winners in the Slam Dunk Contest?", 
            choice: ["Chicago Bulls", "Los Angeles Lakers", "Boston Celtics", "Atlanta Hawks" ],
            answer: 3,
            photo: "assets/images/atlantahawks.png"
        }, 
        {
            question: "Which of these music artists has NOT performed on the Super Bowl halftime show?", 
            choice: ["Van Halen", "Justin Timberlake", "Beyonce", "Michael Jackson" ],
            answer: 0,
            photo: "assets/images/vanhalen.jpg"
        }, 
        {
            question: "Basketball was invented in the U.S. state that is also home to which of these islands?", 
            choice: ["Jekyll Island", "Martha's Vineyard", "Staten Island", "Hilton Head" ],
            answer: 1,
            photo: "assets/images/marthasvineyard.png"
        }, 
        {
            question: "See ya!” is the iconic home run call of what baseball announcer?", 
            choice: ["Joe Buck", "Bob Uecker", "Michael Kay", "Rod Allen" ],
            answer: 2,
            photo: "assets/images/michaelkay.jpg"
        },
        {
            question: "What is the fastest sanctioned car racing sport in the world?", 
            choice: ["Nascar", "Top Fuel Drag", "Mario Kart", "Formula 1" ],
            answer: 1,
            photo: "assets/images/topfueldrag.jpg"
        },
        {
            question: "Which of these cities currently boasts an NHL team?", 
            choice: ["Las Vegas", "Atlanta", "Seattle", "Portland" ],
            answer: 0,
            photo: "assets/images/vegasgoldenknights.jpg"
        },
        {
            question: "Which city’s NBA team name is also a term for male ballet dancers?", 
            choice: ["Toronto", "Golden State", "Miami", "Cleveland" ],
            answer: 3,
            photo: "assets/images/cavaliers.png"
        },        
        {
            question: "Which NFL team does Julio Jones play for?", 
            choice: ["Baltimore Ravens", "Oakland Raiders", "Atlanta Falcons", "Chicago Bears" ],
            answer: 2,
            photo: "assets/images/juliojones.jpg"
        }];
    
    // More variables
    let correctCount = 0;
    let wrongCount = 0;
    let unanswerCount = 0;
    let timer = 20;
    let intervalId;
    let userGuess ="";
    let running = false;
    let qCount = options.length;
    let pick;
    let index;
    let newArray = [];
    let holder = [];

    


















})