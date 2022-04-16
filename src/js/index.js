const Tabuleiro_ = new Tabuleiro();

for (let ring = 1; ring <= 3; ring++) {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if(x * y === 1) continue
            Tabuleiro_.tabuleiro.push({
                id: '' + ring + x + y,
                isOccupied: false
            })
            
        }
    }
}

Tabuleiro_.createTabuleiro()