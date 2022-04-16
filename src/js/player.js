class Player {
    constructor() {
        this.player1 = {
            pecas: []
        };

        this.player2 = {
            pecas: []
        };
    }

    createPlayers(id){
        if (id <= 17){
            let player = (9 - this.player1.pecas.length) / (9 - this.player2.pecas.length ) > Math.random() ? 1 : 2;

            let token = new Pecas(id, player);
            
            this[player ==  1 ? 'player1' : 'player2'].pecas.push(token);
            this.createPlayers(++id);
        }
    }

    findById(id){
        return this.player1.pecas.concat(this.player2.pecas).find(({ e }) => e.id === id)
    }

}