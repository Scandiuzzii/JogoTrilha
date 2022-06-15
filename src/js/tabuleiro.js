const tabuleiro = document.getElementById('tabuleiro')

class Tabuleiro {
    constructor (player1,player2) {
        this.tabuleiro = [];

        this.closestNodeId = null;

        this.players1 = player1;
        this.players2 = player2;

        this.draggedToken = null;

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
    }

    
    monitorarMovimento(){
        let that = this
        document.addEventListener('mousedown',(event)=>{
            if(event.target.classList.contains('pecas')){
                document.addEventListener('mousemove', this.follow(event,that),false);
            }
        });
    
        document.addEventListener('mouseup',(event)=>{
            if(this.draggedToken){
                console.log('dropando peca')
                document.removeEventListener('mousemove', this.follow(event,that));
        
                this.findColor(event.clientX, event.clientY);
                
                if(this.closestNodeId){
                    this.placePecaNode()
                    this.place(this.closestNodeId)
                }
        
                this.draggedToken = null;
                this.closestNodeId = null;
            }
        });
    }

    placePecaNode(){
        let token = document.getElementById(this.draggedToken.id)
        let node = document.getElementById(this.closestNodeId)

        let x = node.getBoundingClientRect().x + node.clientHeight / 2 - token.clientHeight / 2
        let y = node.getBoundingClientRect().y + node.clientHeight / 2 - token.clientHeight / 2
        
        token.style.left = x + 'px'
        token.style.top = y + 'px'
    }

    place(position){
        let peca = this.findByIdPecas(this.draggedToken.id)
        if (peca.position){
            let oldNode = this.findByIdTabuleiro(peca.position)
            if(oldNode) oldNode.isOccupied = false
        }
        let newNode = this.findByIdTabuleiro(position)
        newNode.isOccupied = true 
        peca.position = position
    }

    follow(e,that){
        let delX = 0;
        let delY = 0;

        if(!this.draggedToken && e.target.classList.contains('pecas')){
            this.draggedToken = e.target;
            delX = this.draggedToken.getBoundingClientRect().x - e.clientX;
            delY = this.draggedToken.getBoundingClientRect().y - e.clientY;
        }

        let x = e.clientX;
        let y = e.clientY;

        this.draggedToken.style.left = x + delX + 'px';
        this.draggedToken.style.top = y + delY + 'px';

        that.findColor(x,y);
    }

    findColor(x,y){
        let peca = this.findByIdPecas(this.draggedToken.id)

        let availableToken = this.getAvailableNodesForToken(peca) ?? []
        let {closestNode, minDistance} = availableToken.reduce(({ closestNode, minDistance }, node) => {
                let nodePosition = document.getElementById(node.id).getBoundingClientRect()
                let distance = Math.sqrt( ( x - nodePosition.x )** 2 + 
                                            ( y - nodePosition.y )** 2 )
                if (distance < minDistance){
                    return { closestNode: node, minDistance: distance }
                }else{
                    return { closestNode: closestNode, minDistance: minDistance }
                }
            }, { closestNode: null, minDistance: Infinity })

        if(minDistance > 200){
            console.log('colorindo/')
            this.decolourNode(this.closestNodeId)
            this.closestNodeId = null
            return false
        }

        if(closestNode.id != this.closestNodeId) {
            console.log('descolorindo/')
            if(this.closestNodeId) this.decolourNode(this.closestNodeId)

            this.closestNodeId = closestNode.id
            this.colourNode(this.closestNodeId)
            return true
        }
        console.log('final')
    }
    
    getAvailableNodesForToken(peca){
        if(!peca.position || peca.flyable){
            return this.findUnoccupied()
        }
    }

    colourNode(id) {
        let node = document.getElementById(id)
        node.style.backgroundColor = 'yellow'
    }

    decolourNode(id) {
        let node = document.getElementById(id)
        node.style.backgroundColor = 'rgba(158, 21, 170, 0.377)'
    }

    findByIdTabuleiro(id){
        return this.tabuleiro.find((e) => {
            return e.id === id
        })
    }

    findByIdPecas(id){
        return [...this.players1.player.pecas, ...this.players2.player.pecas].find(e=>{
            return e.id == id
        })
    }

    findUnoccupied(){
        return this.tabuleiro.map(e => {
            if(!e.isOccupied)
                return e;
        })
    }

}
