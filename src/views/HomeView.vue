<template>
  <div>
    <h1 id="titleMenu" />
    <div id="bloco">
      <h4 id="player1">
        {{ player1.nome }}
      </h4>
      <h4 id="player2">
        {{ player2.nome }}
      </h4>

      <template v-for="(item, index) in listColors()" :key="index">
        <ButtonCustom :classtype="item" v-model:player="player1" />
      </template>

      <!-- <template v-for="(item, index) in listColors()" :key="index">
        <ButtonCustom :classtype="item" v-model:player="player1" />
      </template> -->

      <div id="linha" />
      <h4 id="player2_1">
        {{ player1.nome }}
      </h4>
      <h4 id="player2_2">
        {{ player2.nome }}
      </h4>
      <div id="cores1" :class="player1.color" />
      <div id="cores2" :class="player2.color" />

      <router-link id="start" to="/jogo"> Start </router-link>
    </div>
  </div>
</template>
<script>
import ButtonCustom from '@/components/ButtonCustom.vue'

export default {
  name: 'MenuComponent',
  components: {
    ButtonCustom
  },
  data () {
    return {
      player1: {
        nome: 'Player1',
        color: 'aqua'
      },
      player2: {
        nome: 'Player2',
        color: 'aqua'
      }
    }
  },
  methods: {
    listColors () {
      const colors = ['blue', 'green', 'red', 'yellow', 'roxo', 'aqua']
      const colors2 = colors.map((item) => {
        return item + '2'
      })

      return [...colors, ...colors2]
    },
    inactiveAllButtons () {
      const buttons = this.$children.filter(function (child) {
        return child.$attrs['component-type'] === 'ButtonCustom'
      })

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].isActive = false
      }
    }
  }
//   watch: {
//     player1 (newPlayer) {
//       this.player1.color = newPlayer.color
//     },
//     player2 (newPlayer) {
//       this.player2.color = newPlayer.color
//     }
//   }
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
