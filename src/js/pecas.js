class Pecas {
    constructor(id, player) {
        this.id = id;
        this.player = player;
        this.position = null;
        this.flyable = false;
        
        this.createPecas();
    }

    createPecas() {
        let newTokenElement = document.createElement('div');

        newTokenElement.classList.add('pecas');
        newTokenElement.id = this.id;
        newTokenElement.style.background = this.player == 1 ? 'rgb(41, 230, 85, 0.9)' : 'rgb(75, 145, 250, 0.9)';

        let left = this.player == 1 ? 3 : 23 + tabuleiro.offsetWidth / document.documentElement.clientHeight * 100;

        newTokenElement.style.marginBlockStart = this.player == 1 ? Math.random() *  70 + 'vh' : Math.random() * 60 + 'vh';
        newTokenElement.style.left = this.player == 1 ? left + Math.random() * 50 + 'vh' : left + 45 + Math.random() * 40 + 'vh';
        newTokenElement.style.top =  '10vh';

        document.body.appendChild(newTokenElement);

    }
    
}