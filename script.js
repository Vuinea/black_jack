let card1 = Math.floor(Math.random() * 11) + 1;
let card2 = Math.floor(Math.random() * 11) + 1; 
let stringCard1 = String(card1); 
let stringCard2 = String(card2); 


if (card1 === 11 && card1 + card2 > 21) {
    let chance = Math.floor(Math.random() * 2);
    if (chance === 0) {
        card1 = 1; 
        stringCard1 = "11 (now 1)"; 
    } else {
        card2 = 1; 
        stringCard2 = "11 (now 1)"; 
    }
}

var playerCards = [stringCard1, " " + stringCard2];
var playerOverallScore = card1 + card2;

card1 = Math.floor(Math.random() * 11) + 1;
card2 = Math.floor(Math.random() * 11) + 1; 
stringCard1 = String(card1); 
stringCard2 = String(card2); 
if (card1 === 11 && card1 + card2 > 21) {
    let chance = Math.floor(Math.random() * 2);
    if (chance === 0) {
        card1 = 1; 
        stringCard1 = "11 (now 1)"; 
    } else {
        card2 = 1; 
        stringCard2 = "11 (now 1)"; 
    }
}  
var dealerCards = [stringCard1, " " + stringCard2];
var dealerOverallScore = card1 + card2;





function startGame() {
    document.getElementById("pre-game").style.display = "none" ; 
    document.getElementById("real-game").style.display = "block";
    playerTurn(true);
};

function playerTurn(start) {
    document.getElementById("dealer").style.display = "none"; 
    if (start === false) {
        let newCard = Math.floor(Math.random() * 11) + 1;
        let stringNewCard = String(newCard);
        if (playerCards.includes("11") && playerOverallScore + newCard > 21) {
            let indexOf11 = playerCards.indexOf("11");
            playerCards[indexOf11] += "(now 1)"; 
            playerOverallScore -= 10; 
        } else if (newCard === 11 && playerOverallScore + newCard > 21) {
            newCard = 1;
            stringNewCard = "11 (now 1)";   
        }   

        playerCards.push(" " +  stringNewCard);
        playerOverallScore += newCard; 
    }
    
    document.getElementById("player-cards").textContent = playerCards;
    document.getElementById("player-score").textContent = playerOverallScore; 

    if (playerOverallScore < 17) {  
        document.getElementById("message").textContent = "Draw A Card";
    } else if (playerOverallScore < 21) {
        document.getElementById("message").textContent = "Drawing A Card Is Risky"; 
    } else if (playerOverallScore === 21) {
        document.getElementById("message").textContent = "Blackjack";
    } else {
        document.getElementById("message").textContent = "You Lose :(";
        dealerTurn(); 
    }
};

function dealerTurn() {
    // getting rid of player buttons 
    document.getElementById("player-buttons").style.display = "none";
    // showing dealer and end part 
    document.getElementById("dealer").style.display = "block";      
    while (dealerOverallScore < 17) {
        let newCard = Math.floor(Math.random() * 11) + 1;
        let stringNewCard = String(newCard); 
        if (dealerCards.includes("11") && dealerOverallScore + newCard > 21) {
            let indexOf11 = dealerCards.indexOf("11"); 
            dealerCards[indexOf11] += "(now 1)"; 
            dealerCards -= 10; 
        } else if (newCard === 11 && dealerOverallScore + newCard > 21) {
            newCard = 1;
            stringNewCard = "11 (now 1)";
        }
        dealerCards.push(" " + stringNewCard);
        dealerOverallScore += newCard; 
    }

    document.getElementById("dealer-cards").textContent = dealerCards;
    document.getElementById("dealer-score").textContent = dealerOverallScore;
    eval(); 
}

function eval() {
    // player wins 
    if (playerOverallScore > dealerOverallScore && playerOverallScore < 22 || playerOverallScore < 22 &&  dealerOverallScore >= 22) {
        document.getElementById("message").textContent = "You Win!"; 
    } // player loses 
    else if (playerOverallScore > 21 && dealerOverallScore <= 21 || playerOverallScore < dealerOverallScore && dealerOverallScore <= 21) {
        document.getElementById("message").textContent = "You Lose :("; 
    } else if (playerOverallScore < 22 && playerOverallScore === dealerOverallScore || dealerOverallScore > 21 && playerOverallScore > 21) {
        document.getElementById("message").textContent = "Draw!"; 
    }
};


