<template>
<div class="container">
  <h1><span>{{ msg }}</span> --- <span class="Winner" v-show="WinnerData">{{WinnerData}}胜出 --- 游戏结束</span></h1>
  <div class="CheckerBoard">
     <div class="ChesscontP" v-for="(ChessData,index) in ChessDatas"  :key="index" >
        <Chesscont v-for="(item,indexs) in ChessData" :key="indexs" :pieceData="{'pieceColor':item.chessColor,'h':index,'v':indexs}"></Chesscont>
     </div>
  </div>
  <div>h--y</div>
  <div class="btn-container">
    <div class="player-con">
      <span class="player" :class="[isActivatBlack ? 'enter' : 'leave']" @click="">黑色下棋</span>
    </div>
    <div class="player-con">
      <span class="player" :class="[isActivatWhite ? 'enter' : 'leave']" @click="">白色下棋</span>
    </div>
      
  </div>
  
</div>
</template>

<script>
import Bus from './Bus.js'
import Chesscont from './Chesscont'
export default {
  name: "HelloWorld",
  components:{
    Chesscont
  },
  data() {
    return {
      msg: "五子棋",
      ChesscontArr: ["aa", "bb"],
      isActivatBlack:true,
      isActivatWhite:false
    };
  },
  computed:{
    ChessDatas(){
      console.log("this.$store:",this.$store)
      return this.$store.getters.ChessFun;
    },
    WinnerData(){
      return this.$store.getters.WinnerFun;
    }
  },
  created(){
     Bus.$on("changePlayer",(data)=>{
       if(this.$store.getters.WinnerFun){
          this.isActivatBlack = false;
          this.isActivatWhite=false;
          return;
       }
       if(this.isActivatBlack==true){
          this.isActivatBlack = false;
          this.isActivatWhite=true;
       }else{
         this.isActivatBlack = true;
          this.isActivatWhite=false;
       }
    })
  }
};
</script>
<style scoped>
h1,h2 {
  font-weight: normal;
  text-align: center;
}
.Winner{
  color: red;
}
.CheckerBoard {
  margin: 0 auto;
  border: 2px solid red;
  width: 600px;
  height: 600px;
  background-color: bisque;
}
.ChesscontP{
  height: 40px;
}
.btn-container{
  text-align:center;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.player-con{
  
}
.player{
  padding: 5px 10px;
  border: 1px solid #000;
}
.player:first-child{
  margin-right: 20px;
  }
.leave{
   color: #cdcdcd;
   border-color: #cdcdcd;
}

</style>
