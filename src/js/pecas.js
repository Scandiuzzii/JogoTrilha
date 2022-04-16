class Pecas extends Tabuleiro {
    constructor(id, player) {
        super();
        this.id = id;
        this.player = player;
        this.draggedToken = null;
        this.closeNode = null;
        this.flyable = false;
        this.createPecas(id, player);
    }

    createPecas(id, player) {
        let newTokenElement = document.createElement('div');

        newTokenElement.classList.add('pecas');
        newTokenElement.id = id;
        newTokenElement.style.background = player == 1 ? 'rgb(41, 230, 85, 0.9)' : 'rgb(75, 145, 250, 0.9)';

        let left = player == 1 ? 3 : 23 + tabuleiro.offsetWidth / document.documentElement.clientHeight * 100;

        newTokenElement.style.marginBlockStart = player == 1 ? Math.random() *  70 + 'vh' : Math.random() * 60 + 'vh';
        newTokenElement.style.left = player == 1 ? left + Math.random() * 50 + 'vh' : left + 45 + Math.random() * 40 + 'vh';
        newTokenElement.style.top =  '10vh';

        newTokenElement.addEventListener('mousedown',(event)=>{
            if(event.target.classList.contains('pecas'))
                newTokenElement.addEventListener('mousemove', this.follow,false);
        },false);
    
        newTokenElement.addEventListener('mouseup',(event)=>{
            newTokenElement.removeEventListener('mousemove', this.follow);
    
            if(!this.draggedToken){
                return
            }
            
            this.findColor(event.clientX, event.clientY);
            
            if(this.closeNode){
                this.placePeca(this.draggedToken.id)
                this.players.findById(this.draggedToken.id).place(closeNode);
            }
    
            this.draggedToken = null;
            this.closeNode = null;
    
        },false);

        document.body.appendChild(newTokenElement);

    }
    placePeca(position){
        let oldNode = this.findByIdTabuleiro(this.position)
        if(oldNode) oldNode.isOccupied = false
        let newNode = this.findByIdTabuleiro(position)
        newNode.isOccupied = true 
        this.position = position
    }

    follow(e){
        let delX = 0;
        let delY = 0;

        if( e.target.classList.contains('pecas')){
            this.draggedToken = e.target;
            delX = this.draggedToken.getBoundingClientRect().x - e.clientX;
            delY = this.draggedToken.getBoundingClientRect().y - e.clientY;
        }

        let x = e.clientX;
        let y = e.clientY;

        this.draggedToken.style.left = x + delX + 'px';
        this.draggedToken.style.top = y + delY + 'px';

        this.findColor(x,y);
    }

    findColor(x,y){
        let {closestNode, minDistance} = this.players.findById(this.draggedToken.id)
        .getAvailableNodesForToken()
        .reduce(({ closestNode, minDistance }, node) => {
            nodePosition = document.getElementById(node.id).getBoundingClientRect()
            let distance = Math.sqrt( ( x - nodePosition.x )** 2 + 
                                        ( y - nodePosition.y )** 2 )
            if (distance < minDistance){
                return { closestNode: node, minDistance: distance }
            }else{
                return { closestNode: closestNode, minDistance: minDistance }
            }
        }, { closestNode: null, minDistance: Infinity })

        if(minDistance > 200){
            decolourNode(this.closeNode)
            this.closeNode = null
            return false
        }

        if(closestNode.id != this.closeNode) {
            console.log('opa toz tuka e po blizo ai chao')
            if(this.closeNode) decolourNode(this.closeNode)

            this.closeNode = closestNode.id
            colourNode(this.closeNode)
            return true
        }
    }

    getAvailableNodesForToken(){
        if(!this.position || this.flyable){
            return this.tabuleiro.findUnoccupied()
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
}