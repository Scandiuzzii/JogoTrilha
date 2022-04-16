class Pecas {
    constructor(id, player) {
        this.id = id;
        this.player = player;
        this.createPecas(id, player)
    }

    createPecas(id, player) {
        let newTokenElement = document.createElement('div')

        newTokenElement.classList.add('pecas')
        newTokenElement.id = id
        newTokenElement.style.background = player == 1 ? 'rgb(41, 230, 85, 0.9)' : 'rgb(75, 145, 250, 0.9)'

        let left = player == 1 ? 3 : 23 + tabuleiro.offsetWidth / document.documentElement.clientHeight * 100

        newTokenElement.style.marginBlockStart = player == 1 ? Math.random() *  70 + 'vh' : Math.random() * 60 + 'vh'
        newTokenElement.style.left = player == 1 ? left + Math.random() * 50 + 'vh' : left + 45 + Math.random() * 40 + 'vh'
        newTokenElement.style.top =  '10vh'

        document.body.appendChild(newTokenElement)

    }
}