const tabuleiro = document.getElementById('tabuleiro')

class Tabuleiro {
    constructor (id) {
        this.id = id
        this.tabuleiro = []
    }

    createTabuleiro(){
        this.tabuleiro.forEach(({ id }) => {
            const posicaoTabuleiro = document.createElement('div')
            posicaoTabuleiro.className = 'posicaoTabuleiro'
            posicaoTabuleiro.id = id 
            posicaoTabuleiro.style.gridColumnStart = 5 + id[0] * ( id[1] -1 )
            posicaoTabuleiro.style.gridRowStart = 5 + id[0] * ( id[2] - 1 )
            tabuleiro.appendChild(posicaoTabuleiro)
            // could be optimized to add all children at once
        });
    }

}
