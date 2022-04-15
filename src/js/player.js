class Player {
    constructor() {
        this.player1 = [];
        this.player2 = [];
    }

    createPlayers(id){
        if (id <= 17){
            let player = (9 - this.player1.length) / (9 - this.player2.length ) > Math.random() ? 1 : 2;

            let token = new Pecas(id, player);
            
            this[player ==  1 ? 'player1' : 'player2'].push(token);
            this.createPlayers(++id);
        }
    }
}