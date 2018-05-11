<template>
  <div class="Chesscont">
    <piece class="piece" @MSenter="MSenter($event)" @MSleave="MSleave()" :pieceData="pieceData" />
    <ChessBG class="ChessBG" :changeBG="changeBG" />
  
  </div>
</template>
<script>
    import piece from './piece.vue'
    import ChessBG from './ChessBG.vue'
    export default{
       components:{
          piece,
          ChessBG
       },
       props:{
          pieceData:{
              type:Object,
          }
       },
       data(){
            return{
                  changeBG:{},
            }
       },
       methods:{
           MSenter:function(event){
                this.changeBG = {
                    "action": "MSenter",
                    "pieceBealoon":event
                }
           },
           MSleave:function(){
                this.changeBG = {
                    "action": "MSleave",
                    "pieceBealoon":event
                }
           }
       }
    }
</script>
<style scoped>
.Chesscont{
    width: 40px;
    height: 40px;
    overflow: hidden;
    display: inline-block;
    }
.piece{
    position: absolute;
    z-index: 1;
    height: 40px;
    overflow: hidden;
}
</style>

