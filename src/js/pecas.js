class Pecas {
    constructor(id, player) {
        this.id = id;
        this.player = player;
        this.draggedToken = null;
        this.closeNode = null;
        this.flyable = false;
        this.position = null;
        this.draggedToken = null;
        this.createPecas();
    }

    createPecas() {
        let newTokenElement = document.createElement('div');

        newTokenElement.classList.add('pecas');
        newTokenElement.id = this.id;
        newTokenElement.style.background = this.player.id == 1 ? 'rgb(41, 230, 85, 0.9)' : 'rgb(75, 145, 250, 0.9)';

        let left = this.player.id == 1 ? 3 : 23 + tabuleiro.offsetWidth / document.documentElement.clientHeight * 100;

        newTokenElement.style.marginBlockStart = this.player.id == 1 ? Math.random() *  70 + 'vh' : Math.random() * 60 + 'vh';
        newTokenElement.style.left = this.player.id == 1 ? left + Math.random() * 50 + 'vh' : left + 45 + Math.random() * 40 + 'vh';
        newTokenElement.style.top =  '10vh';

        document.body.appendChild(newTokenElement);

    }
    
}