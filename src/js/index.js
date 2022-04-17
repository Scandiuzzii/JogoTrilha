let player1 = new Player(1,'player1','');
let player2 = new Player(2,'player2','');

function changeColor(color,player){
    
    if(player == 1){
        player1.color = color;
    }else{
        player2.color = color;
    }

    let cor_player =player == 1 ? color : color + player

    let doc_color = document.getElementById(cor_player);
    let change_color_players = document.getElementById('cores'+player);

    let cor_class = getComputedStyle(document.querySelector('.'+cor_player))
    
    change_color_players.style.background = cor_class.background;

    doc_color.style.border = '#000000';
    doc_color.style.borderStyle = 'solid';
}

function startGame(){
    if(!player1.color && !player2.color){
        return;
    }

    window.location.href = './jogo.html';

    const Tabuleiro_ = new Tabuleiro(player1,player2);
    
    Tabuleiro_.createTabuleiro();
    Tabuleiro_.monitorarMovimento();
    
}
