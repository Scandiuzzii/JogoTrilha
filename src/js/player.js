class Player {
    constructor(id,name,color) {
        this.player= {
            id:id,
            pecas: [],
            score:0,
            name: name,
            color:color
        };
        this.createPlayers(0);
    }

    createPlayers(id){
        if (id <= 8){
            let token = new Pecas(id+'-'+this.player.id, this.player.id);

            this.player.pecas.push(token);
            this.createPlayers(++id);
        }
    }

    findById(id){
        return this.player.pecas.find(({ e }) => e.id === id)
    }

}