const tabuleiro = document.getElementById('tabuleiro')

let draggedToken = null
class Tabuleiro {
  constructor (player1, player2) {
    this.tabuleiro = []

    this.closeNode = null
    this.flyable = false

    this.players1 = player1
    this.players2 = player2
  }

  createTabuleiro () {
    for (let ring = 1; ring <= 3; ring++) {
      for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
          if (x * y === 1) continue

          const id = '' + ring + x + y

          this.tabuleiro.push({
            id: id,
            isOccupied: false
          })

          const posicaoTabuleiro = document.createElement('div')
          posicaoTabuleiro.className = 'posicaoTabuleiro'
          posicaoTabuleiro.id = id
          posicaoTabuleiro.style.gridColumnStart = 5 + id[0] * (id[1] - 1)
          posicaoTabuleiro.style.gridRowStart = 5 + id[0] * (id[2] - 1)
          tabuleiro.appendChild(posicaoTabuleiro)
        }
      }
    }
    this.players1.createPlayers(0)
    this.players2.createPlayers(0)
  }

  monitorarMovimento () {
    document.addEventListener('mousedown', (event) => {
      if (event.target.classList.contains('pecas')) {
        document.addEventListener('mousemove', this.follow, false)
        console.log(draggedToken)
      }
    }, false)

    document.addEventListener('mouseup', (event) => {
      document.removeEventListener('mousemove', this.follow)

      if (!draggedToken) {
        return
      }

      this.findColor(event.clientX, event.clientY)

      if (this.closeNode) {
        this.placePecaNode(draggedToken.id, this.closeNode)
        this.place(this.closeNode, draggedToken.id)
      }

      draggedToken = null
      this.closeNode = null
    }, false)
  }

  placePecaNode (peca, nodeid) {
    const token = document.getElementById(peca)
    const node = document.getElementById(nodeid)

    const x = node.getBoundingClientRect().x + node.clientHeight / 2 - token.clientHeight / 2
    const y = node.getBoundingClientRect().y + node.clientHeight / 2 - token.clientHeight / 2

    token.style.left = x + 'px'
    token.style.top = y + 'px'
  }

  place (position, id) {
    const peca = this.findByIdPecas(id)
    const oldNode = this.findByIdTabuleiro(peca.position)
    if (oldNode) oldNode.isOccupied = false
    const newNode = this.findByIdTabuleiro(position)
    newNode.isOccupied = true
    peca.position = position
  }

  follow (e) {
    let delX = 0
    let delY = 0

    if (!draggedToken && e.target.classList.contains('pecas')) {
      draggedToken = e.target
      delX = draggedToken.getBoundingClientRect().x - e.clientX
      delY = draggedToken.getBoundingClientRect().y - e.clientY
    }

    const x = e.clientX
    const y = e.clientY

    draggedToken.style.left = x + delX + 'px'
    draggedToken.style.top = y + delY + 'px'

    this.findColor(x, y)
  }

  findColor (x, y) {
    const { closestNode, minDistance } = this.getAvailableNodesForToken().reduce(({ closestNode, minDistance }, node) => {
      const nodePosition = document.getElementById(node.id).getBoundingClientRect()
      const distance = Math.sqrt((x - nodePosition.x) ** 2 +
                                        (y - nodePosition.y) ** 2)
      if (distance < minDistance) {
        return { closestNode: node, minDistance: distance }
      } else {
        return { closestNode: closestNode, minDistance: minDistance }
      }
    }, { closestNode: null, minDistance: Infinity })

    if (minDistance > 200) {
      this.decolourNode(this.closeNode)
      this.closeNode = null
      return false
    }

    if (closestNode.id != this.closeNode) {
      if (this.closeNode) this.decolourNode(this.closeNode)

      this.closeNode = closestNode.id
      this.colourNode(this.closeNode)
      return true
    }
  }

  getAvailableNodesForToken () {
    if (!this.position || this.flyable) {
      return this.findUnoccupied()
    }
  }

  colourNode (id) {
    const node = document.getElementById(id)
    node.style.backgroundColor = 'yellow'
  }

  decolourNode (id) {
    const node = document.getElementById(id)
    node.style.backgroundColor = 'rgba(158, 21, 170, 0.377)'
  }

  findByIdTabuleiro (id) {
    return this.tabuleiro.find(({ e }) => e.id === id)
  }

  findByIdPecas (id) {
    return this.players1.player.peca.concat(this.players2.player.peca).find(e => e.id == id)
  }

  findUnoccupied () {
    return this.tabuleiro.map(e => {
      if (!e.isOccupied) { return e }
    })
  }
}
