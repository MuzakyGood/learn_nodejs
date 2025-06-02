const Player1 = require("./player1");
const Player2 = require("./player2");

const fighting = (player1, player2) => {
    if(player1.strength > player2.strength) {
      player1.attack();
      return;
    }
   
    if(player2.strength > player1.strength) {
      player2.attack();
      return;
    }
   
    console.log('Player1 and Player2 have same strength');
}
 
const player1 = new Player1();
const player2 = new Player2();
 
fighting(player1, player2);