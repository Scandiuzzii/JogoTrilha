class Tabuleiro {
    constructor(container) {
        this.container_element = container;
        this.gameOver = false;
        this.jogadaComplementar = false;
        this.indexAnterior = 0;
        this.jogadas = 0;
        this.jogadores = {
            opcoes: [new Jogador("blue"), new Jogador("red")],
            jogadorAtual: 0,
            trocar: function() {
                this.jogadorAtual = Number(!this.jogadorAtual)
            }
        }
        this.tabuleiro = [];
        this.moinhos_possiveis = [];
        this.movimentos_possiveis = [];
        this.moinhos_feitos = []
    }

    jogar() {
        this.jogadas = 10;
        this.tabuleiro = [
            new Man("A7", ''), new Man("D7", ''), new Man("G7", ''),
            new Man("B6", ''), new Man("D6", ''), new Man("F6", ''),

            new Man("C5", ''), new Man("D5", ''), new Man("E5", ''),
            new Man("A4", ''), new Man("B4", ''), new Man("C4", ''), 
            
            new Man("E4", ''), new Man("F4", ''), new Man("G4", ''),
            new Man("C3", ''), new Man("D3", ''), new Man("E3", ''),

            new Man("B2", ''), new Man("D2", ''), new Man("F2", ''),
            new Man("A1", ''), new Man("D1", ''), new Man("G1", '')
        ];
        this.moinhos_possiveis = [
            [21, 22, 23],
            [21, 9, 0],
            [22, 19, 16],
            [23, 14, 2],
            [18, 19, 20],
            [18, 10, 3],
            [20, 13, 5],
            [15, 16, 17],
            [15, 11, 6],
            [17, 12, 8],
            [9, 10, 11],
            [12, 13, 14],
            [6, 7, 8],
            [7, 4, 1],
            [3, 4, 5],
            [0, 1, 2]
        ];
        this.movimentos_possiveis = [
            [1, 9], 
            [0, 2, 4],
            [1, 14],
            [4, 10], 
            [1, 3, 5, 7],
            [4, 13],
            [7, 11], 
            [4, 6, 8],
            [7, 12],
            [0, 10, 21], 
            [3, 9, 11, 18], 
            [6, 10, 15],
            [8, 13, 17], 
            [5, 12, 14, 20], 
            [2, 13, 23],
            [11, 16], 
            [15, 17, 19], 
            [12, 16],
            [10, 19], 
            [16, 18, 20, 22], 
            [13, 19],
            [9, 22], 
            [19, 21, 23],
            [14, 22]
        ];
        this.moinhos_feitos = []
        this.desenhar()
    }

    desenhar() {
        let content = '';
        this.tabuleiro.forEach(function(homem, index) {
            content += '<div class="' + homem.posicao + '"> <div onclick="trilha.jogada(' + index + ')" class="circuloTabuleiro" style="background:' + homem.simbolo + ';">' + "" + '</div> </div>';
        })
        this.container_element.innerHTML = content;
    }

    jogada(index) {
        if (this.gameOver) {
            this.jogar()
            return false
        };

        if (this.pecas_jogador_atual() <= 0 && this.jogador_atual()) {

            if (this.jogadas <= 0 && this.e_primeira_jogada()) {
                this.jogo_acabou();

            } else if (this.e_primeira_jogada() && this.simbolo_do_jogador(index)) {
                this.indexAnterior = index
                this.jogadaComplementar = true

                if (this.jogadores.opcoes[0].peca_tabuleiro == 3) {
                    this.jogadas--
                }

            } else if (this.e_primeira_jogada() && this.jogador_atual().remover && this.simbolo_do_oponente(index) && this.nao_faz_parte_moinho(index)) {
                this.tabuleiro[index].simbolo = this.jogador_atual().fez_moinho()
                this.desenhar();
                this.jogador_atual().remover = false
                this.jogadores.trocar()
                this.jogador_atual().peca_tabuleiro--;

            } else if (this.jogadaComplementar) {

                if (this.movimentos_possiveis[this.indexAnterior].includes(index) && this.tabuleiro[index].simbolo === '') {
                    this.tabuleiro[this.indexAnterior].simbolo = ''
                    this.tabuleiro[index].simbolo = this.jogador_atual().jogada()
                    this.desenhar();

                    if (this.verifica_moinho(this.tabuleiro[index].simbolo) == -1) {
                        this.jogadaComplementar = false
                    }

                    this.jogadores.trocar();
                }

            }

        } else if (this.e_primeira_jogada()) {

            if (this.jogador_atual().remover && this.simbolo_do_oponente(index) && this.nao_faz_parte_moinho(index)) {

                this.tabuleiro[index].simbolo = this.jogador_atual().fez_moinho()
                this.desenhar();
                this.jogador_atual().remover = false
                this.jogadores.trocar();
                this.jogador_atual().peca_tabuleiro--;

            } else if (this.tabuleiro[index].simbolo === '' && !this.jogador_atual().remover) {
                this.tabuleiro[index].simbolo = this.jogador_atual().jogada()
                this.desenhar();
                this.verifica_moinho(this.tabuleiro[index].simbolo)
                this.jogadores.trocar();
            }

        };
    }

    jogo_acabou() {
        this.gameOver = true
        alert('Acabou, clique novamente para recomeçar')
    }

    verifica_moinho(simbolo) {
        this.moinhos_possiveis.forEach(function(sequencia, i) {
            if (this.tabuleiro[this.moinhos_possiveis[i][0]].simbolo == simbolo && this.tabuleiro[this.moinhos_possiveis[i][1]].simbolo == simbolo && this.tabuleiro[this.moinhos_possiveis[i][2]].simbolo == simbolo) {
                this.moinhos_possiveis.splice(i, 1)
                this.moinhos_feitos.push(sequencia)
                this.jogadores.opcoes[this.jogadores.jogadorAtual].fez_moinho()
                this.jogadores.trocar();
                return sequencia;
            }
        }, this)
        return -1;
    }

    nao_faz_parte_moinho(index) {
        var nao_faz = false
        this.moinhos_feitos.every(function(_sequencia, i) {
            if (this.moinhos_feitos[i][0] == index || this.moinhos_feitos[i][1] == index || this.moinhos_feitos[i][2] == index) {
                nao_faz = false
            } else {
                nao_faz = true
            }
        }, this)

        return nao_faz
    }

    pecas_jogador_atual() {
        return this.jogador_atual().pecas
    };

    jogador_atual() {
        return this.jogadores.opcoes[this.jogadores.jogadorAtual]
    }

    e_primeira_jogada() {
        return !this.jogadaComplementar
    }

    simbolo_do_jogador(index) {
        return this.tabuleiro[index].simbolo === this.jogador_atual().simbolo
    }

    simbolo_do_oponente(index) {
        return this.tabuleiro[index].simbolo === this.simbolo_outroJogador()
    }

    simbolo_outroJogador() {
        this.jogadores.trocar();
        let simb = this.jogador_atual().simbolo;
        this.jogadores.trocar();
        return simb;
    }
}
