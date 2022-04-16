const tabuleiro = document.getElementById('tabuleiro')

class Tabuleiro {
    constructor () {
        this.tabuleiro = [];
        this.position = null;
        this.players = new Player();
    }

    createTabuleiro(){
        for (let ring = 1; ring <= 3; ring++) {
            for (let x = 0; x <= 2; x++) {
                for (let y = 0; y <= 2; y++) {
                    if(x * y === 1) continue

                    let id = '' + ring + x + y;

                    this.tabuleiro.push({
                        id: id,
                        isOccupied: false
                    })

                    const posicaoTabuleiro = document.createElement('div')
                    posicaoTabuleiro.className = 'posicaoTabuleiro'
                    posicaoTabuleiro.id = id 
                    posicaoTabuleiro.style.gridColumnStart = 5 + id[0] * ( id[1] -1 )
                    posicaoTabuleiro.style.gridRowStart = 5 + id[0] * ( id[2] - 1 )
                    tabuleiro.appendChild(posicaoTabuleiro)
                    
                }
            }
        }

        this.players.createPlayers(0);

    }
    
    findByIdTabuleiro(id){
        return this.tabuleiro.find(({ e }) => e.id === id)
    }

    findUnoccupied(){
        return this.tabuleiro.find(({ e }) => !e.isOccupied)
    }

}
