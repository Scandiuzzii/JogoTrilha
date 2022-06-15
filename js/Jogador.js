class Jogador{
    constructor(simbolo){
        this.pecas = 9
        this.peca_tabuleiro = 0
        this.simbolo = simbolo
        this.remover = false
    }

    jogada(){
        if (this.pecas != 0){
            this.pecas -= 1
            this.peca_tabuleiro += 1
        }
        return this.simbolo
    }
    fez_moinho(){
        this.remover = true
        return ''
    }
}

const jogador_teste = new Jogador("blue");
module.exports = jogador_teste