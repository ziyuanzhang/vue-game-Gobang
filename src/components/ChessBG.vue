<template>
  <div class="bg">
      <canvas class="drawBGing" :class="changeStatus" v-drawBGing  width="40" height="40">A Drawing of something</canvas> 
  </div>
</template>
<script>
export default {
  props:{
    changeBG:{
      type: Object
    }
  },
  data(){
    return{
      status:"0",
    }
  },
  computed:{
   changeStatus:function(){
      if (this.changeBG.action=="MSenter") {       
         if(this.changeBG.pieceBealoon){   
            return "drawBGred"                   
         }else{
           return "drawBGgray"
         }
      }else {
         return ""
      }
   }

  },
  directives: {
    drawBGing: {
      // 指令的定义
      bind: function (el) {
       let ctx = el.getContext("2d");
        ctx.moveTo(0,20);
        ctx.lineTo(40,20);
        
        ctx.moveTo(20,0);
        ctx.lineTo(20,40);

        ctx.closePath();
        ctx.stroke();
      }

    }
  }
};
</script>

<style scoped>
.bg{
  padding: 0px;
  margin: 0px;
}
.drawBGred{
  background-color: red;
}
.drawBGgray{
  background-color: #ccc;
}
</style>


