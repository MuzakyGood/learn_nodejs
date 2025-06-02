class Player2 {
    constructor() {
      this.strength = Math.floor(Math.random() * 100);
    }
   
    attack() {
      console.log('Player2: (Swing Sword!)\nGame: Player2 Win!')
    }
}

module.exports = Player2;