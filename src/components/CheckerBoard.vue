<template>
  <div class="container">
    <h1>
      <span>{{ msg }}</span>
    </h1>
    <div class="result-start"
         v-if="isResultStart || WinnerData ">
      <div class="result-start-container">
        <div class="Winner"
             v-show="WinnerData">{{WinnerData}}胜出 --- 游戏结束</div>
        <button class="start-player"
                @click="startPlayer">开始游戏</button>
      </div>
      <div class="result-start-bg"></div>
    </div>
    <div class="CheckerBoard">
      <div class="ChesscontP"
           v-for="(ChessData,index) in ChessDatas"
           :key="index">
        <Chesscont v-for="(item,indexs) in ChessData"
                   :key="indexs+item.key"
                   :pieceData="{'pieceColor':item.chessColor,'h':index,'v':indexs}"></Chesscont>
      </div>
    </div>
    <div>h--y</div>
    <div class="btn-container">
      <div class="player-con">
        <span class="player"
              :class="[isActivatBlack ? 'enter' : 'leave']">黑色下棋</span>
      </div>
      <div class="player-con">
        <span class="player"
              :class="[isActivatWhite ? 'enter' : 'leave']">白色下棋</span>
      </div>

    </div>

  </div>
</template>

<script>
import Bus from './Bus.js';
import Chesscont from './Chesscont';
import '../directives/directives.js';
export default {
  name: 'HelloWorld',
  components: {
    Chesscont
  },
  data() {
    return {
      msg: '五子棋',
      isActivatBlack: true,
      isActivatWhite: false,
      isResultStart: true
    };
  },
  computed: {
    ChessDatas() {
      return this.$store.getters.ChessFun;
    },
    WinnerData() {
      return this.$store.getters.WinnerFun;
    }
  },
  methods: {
    startPlayer: function() {
      this.isActivatBlack = true;
      this.isActivatWhite = false;
      this.isResultStart = false;
      this.$store.commit('resetFun');
    }
  },
  created() {
    Bus.$on('changePlayer', data => {
      if (this.$store.getters.WinnerFun) {
        this.isActivatBlack = false;
        this.isActivatWhite = false;
        return;
      }
      if (this.isActivatBlack === true) {
        this.isActivatBlack = false;
        this.isActivatWhite = true;
      } else {
        this.isActivatBlack = true;
        this.isActivatWhite = false;
      }
    });
  }
};
</script>
<style scoped>
.container {
  position: relative;
}

h1,
h2 {
  font-weight: normal;
  text-align: center;
}

.result-start {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  margin-top: -375px;
  margin-left: -350px;
  width: 700px;
  height: 750px;
  text-align: center;
}
.start-player {
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
}
.result-start-container {
  display: inline-block;
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  margin-top: 250px;
  padding: 30px 70px;
  background-color: #fff;
}
.result-start-bg {
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.4;
}
.Winner {
  background-color: #fff;
  font-size: 50px;
  color: red;
  margin-bottom: 50px;
}
.CheckerBoard {
  margin: 0 auto;
  border: 2px solid red;
  width: 600px;
  height: 600px;
  background-color: bisque;
}
.ChesscontP {
  height: 40px;
}
.btn-container {
  text-align: center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.player-con {
}
.player {
  padding: 5px 10px;
  border: 1px solid #000;
}
.player:first-child {
  margin-right: 20px;
}
.leave {
  color: #cdcdcd;
  border-color: #cdcdcd;
}
</style>
