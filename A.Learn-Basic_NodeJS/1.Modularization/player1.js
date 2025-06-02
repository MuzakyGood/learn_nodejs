class Player1 {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
   
    attack() {
      console.log('Player1: (Swing Sword!)\nGame: Player1 Win!')
    }
}

module.exports = Player1;