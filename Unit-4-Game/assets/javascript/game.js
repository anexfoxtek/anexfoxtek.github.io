// Sets all variables to zero to start
var wins = 0;
var losses = 0;
var userScore = 0;

// Generate random number
// Number is 19 - 120
var compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Display number to user
$("#randomCompGen").html('Random Number: ' + compNumber);

// crystal values
// User doesn't see values yet
var cryst1 = Math.floor(Math.random() * 12) + 1;
var cryst2 = Math.floor(Math.random() * 12) + 1;
var cryst3 = Math.floor(Math.random() * 12) + 1;
var cryst4 = Math.floor(Math.random() * 12) + 1;

// Reset function for round 
function reset(){
    userScore = 0;
    $('#currentScore').html(userScore);
    compNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#randomCompGen").html('Random Number: ' + compNumber);
    cryst1 = Math.floor(Math.random() * 12) + 1;
    cryst2 = Math.floor(Math.random() * 12) + 1;
    cryst3 = Math.floor(Math.random() * 12) + 1;
    cryst4 = Math.floor(Math.random() * 12) + 1;
};

// check to see if score is equal to Computer
function gameCheck(){
    if (userScore == compNumber){  // Adds points and resets after the ground
        wins++;
        $('#win').html('Wins: '+ wins);
        alert("Good Job!");
        reset();
    }
    else if (userScore > compNumber){ // resets game after points
        losses++;
        $('#lose').html('Losses: '+ losses);
        alert("Why don't we try that again?");
        reset();
    }
}

// Give values and wait for event click 
// Displays Current Score
// Resets after check

$('#crystal1').click(function(){
    userScore = userScore + cryst1;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal2').click(function(){
    userScore = userScore + cryst2;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal3').click(function(){
    userScore = userScore + cryst3;
    $('#currentScore').html(userScore);
    gameCheck();
});

$('#crystal4').click(function(){
    userScore = userScore + cryst4;
    $('#currentScore').html(userScore);
    gameCheck();
});