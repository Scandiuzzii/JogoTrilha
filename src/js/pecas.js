
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
        newTokenElement.style.left = left + Math.random() * 12 + 'vh'
        // newTokenElement.style.top = right + Math.random() * 12 + 'vh'
        newTokenElement.style.top = '0vh'
        document.body.appendChild(newTokenElement)

        // let finalTop = tabuleiro.clientHeight * (0.34 + 0.32 * Math.random()) / document.documentElement.clientHeight * 100
        // let speed = 0.6 + 0.5 * Math.random()

        // requestAnimationFrame(() => { })
        // function fall() {
        //     let oldTop = parseFloat(newTokenElement.style.top)
        //     newTokenElement.style.top = oldTop + speed + 'vh'
        //     if (oldTop < finalTop) {
        //         requestAnimationFrame(fall);
        //     }
        // }

        // requestAnimationFrame(fall);
    }
}