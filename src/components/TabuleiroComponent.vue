<template>
  <div>
    <h1 id="title">
      Jogo Trilha
    </h1>
    <div id="tabuleiro">
      <div id="placar">
        <div id="resultado">
          <h4 id="placar1">
            1
          </h4>
          <h4 id="placar2">
            3
          </h4>
          <h4 id="player1">
            Player1
          </h4>
          <h4 id="player2">
            Player2
          </h4>
          <!-- Limite de 11 caractere -->
          <div id="cores1" />
          <div id="cores2" />
        </div>
        <div id="linha" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabuleiroComponent',
  data () {
      return {
          
      }
  }
}
</script>
<style>
#tabuleiro {
  display: grid;
  grid-template-columns: 3.82vh repeat(7, 10.22vh);
  grid-template-rows: 3.82vh repeat(7, 10.22vh);
  height: 72vh;
  width: 72vh;
  margin-left: 65vh;
  margin-top: 5vh;
  background-image: url(../assets/board.png);
  background-size: contain;
}

.pecas {
  height: 5vh;
  width: 5vh;
  border-radius: 50%;
  border: 2px solid blue;
  position: fixed;
}

body {
  background-color: beige;
}

#title {
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  align-items: center;
}

#placar {
  position: absolute;
  width: 262px;
  height: 97px;
  left: calc(50% - 262px / 2);
  top: 800px;
  background: #feffe1;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
}

#linha {
  position: absolute;
  width: 97px;
  height: 0px;
  right: 83px;
  top: 48px;
  border: 1px solid #000000;
  transform: rotate(90deg);
}

#placar1 {
  position: absolute;
  width: 60px;
  height: 58px;
  right: 70px;
  left: 40px;
  top: -9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#placar2 {
  position: absolute;
  width: 60px;
  height: 58px;
  right: 60px;
  left: 160px;
  top: -9px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#player1 {
  position: absolute;
  width: 137px;
  height: 41px;
  left: -180px;
  top: -5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#player2 {
  position: absolute;
  width: 137px;
  height: 41px;
  left: 290px;
  top: -5px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#cores1 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: -125px;
  top: 90px;
  background: #29e655;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #29e655;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#cores2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 345px;
  top: 90px;
  background: #4b91fa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4b91fa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.posicaoTabuleiro {
  height: 3vh;
  width: 3vh;
  border-radius: 50%;
  background-color: rgba(250, 128, 114, 0.377);
}
</style>
