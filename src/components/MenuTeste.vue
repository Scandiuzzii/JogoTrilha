<template>
  <div>
    <h1 id="titleMenu"></h1>
    <div id="bloco">
      <h4 id="player1">Player1</h4>
      <h4 id="player2">Player2</h4>
      <input type="button" id="blue"   class="blue" onclick="changeColor('blue',1)">
        <input type="button" id="green"  class="green" onclick="changeColor('green',1)">
        <input type="button" id="red"    class="red" onclick="changeColor('red',1)">
        <input type="button" id="yellow" class="yellow" onclick="changeColor('yellow',1)">
        <input type="button" id="roxo"   class="roxo" onclick="changeColor('roxo',1)">
        <input type="button" id="aqua"   class="aqua" onclick="changeColor('aqua',1)">

        <input type="button" id="blue2"   class="blue2"  onclick="changeColor('blue',2)">
        <input type="button" id="green2"  class="green2"  onclick="changeColor('green',2)">
        <input type="button" id="red2"    class="red2"  onclick="changeColor('red',2)">
        <input type="button" id="yellow2" class="yellow2"  onclick="changeColor('yellow',2)">
        <input type="button" id="roxo2"   class="roxo2"  onclick="changeColor('roxo',2)">
        <input type="button" id="aqua2"   class="aqua2"  onclick="changeColor('aqua',2)">

      <div id="linha"></div>
      <h4 id="player2_1">Player1</h4>
      <h4 id="player2_2">Player2</h4>
      <div id="cores1"></div>
      <div id="cores2"></div>

      <!-- <input type="button" to="/about" id="start" value="Start" /> -->
      <router-link id="start" to="/about">Start</router-link>
    </div>

    <!-- <script referrerpolicy="same-origin" src="js/tabuleiro.js"></script>
    <script referrerpolicy="same-origin" src="js/pecas.js"></script>
    <script referrerpolicy="same-origin" src="js/player.js"></script>
    <script referrerpolicy="same-origin" src="js/index.js"></script> -->
  </div>
</template>
<script>

export default {
  name: 'MenuTeste',
  components: {
  }
}
</script>
<style>
body {
  background-color: beige;
}

#bloco {
  position: absolute;
  width: 430px;
  height: 440px;
  left: 40%;
  top: 250px;
  background: #feffe1;
  border-radius: 15px;
  transform: rotate(0.09deg);
}

.blue {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 120px;
  background: #4b91fa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4b91fa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.green {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 160px;
  background: #29e655;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #29e655;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.red {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 200px;
  background: #fa4b4b;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #fa4b4b;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.yellow {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 240px;
  background: #fae34b;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #fae34b;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.roxo {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 280px;
  background: #684bfa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #684bfa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.aqua {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 80px;
  top: 320px;
  background: #4bfabd;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4bfabd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.blue2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 120px;
  background: #4b91fa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4b91fa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.green2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 160px;
  background: #29e655;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #29e655;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.red2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 200px;
  background: #fa4b4b;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #fa4b4b;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.yellow2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 240px;
  background: #fae34b;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #fae34b;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.roxo2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 280px;
  background: #684bfa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #684bfa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.aqua2 {
  position: absolute;
  width: 28px;
  height: 29px;
  left: 330px;
  top: 320px;
  background: #4bfabd;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4bfabd;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#player1 {
  position: absolute;
  width: 137px;
  height: 41px;
  left: calc(50% - 140px / 2 - 107.5px);
  top: calc(50% - 80px / 2 - 172.5px);
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
  left: calc(50% - -340px / 2 - 107.5px);
  top: calc(50% - 80px / 2 - 172.5px);
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#linha {
  position: absolute;
  width: 357px;
  height: 0px;
  left: 45px;
  top: 200px;
  border: 1px solid #000000;
  transform: rotate(90deg);
}

#player2_1 {
  position: absolute;
  width: 137px;
  height: 41px;
  left: -180px;
  top: 450px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
}

#player2_2 {
  position: absolute;
  width: 137px;
  height: 41px;
  left: 480px;
  top: 450px;
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
  top: 550px;
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
  left: 540px;
  top: 550px;
  background: #4b91fa;
  border-radius: 50%;
  opacity: 0.8;
  border: 1px solid #4b91fa;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

#selecionar1 {
  position: absolute;
  width: 76px;
  height: 32px;
  left: 310px;
  top: 390px;
  background: #f5f5db;
  border: 1px solid #f5f5db;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 15px;
}

#selecionar2 {
  position: absolute;
  width: 76px;
  height: 32px;
  left: 60px;
  top: 390px;
  background: #f5f5db;
  box-sizing: border-box;
  border-radius: 35px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13.5px;
  line-height: 15px;
  border: 1px solid #f5f5db;
}

#start {
  position: absolute;
  width: 101px;
  height: 30px;
  left: 170px;
  top: 530px;
  background: #feffe1;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 30px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 15px;
  color: #000000;
  border: 1px solid #f5f5db;
}
</style>
