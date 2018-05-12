<template>
  <div class="">
      <canvas class="drawARCing" v-drawARCing="{color:pieceData.pieceColor}" @mouseenter="mouseenter()" @mouseleave="mouseleave()" @click="mouseclick" width="40" height="40">A Drawing of something</canvas> 
  </div>
</template>
<script>
import Bus from './Bus.js'
export default {
  props: {
    pieceData: {
      type: Object
    }
  },
  data() {
    return {
      pieceBealoon: true,
      pieceColor: "#000"
    };
  },
  methods: {
    mouseenter: function() {
      this.$emit("MSenter", this.pieceData.pieceColor);
    },
    mouseleave: function() {
      this.$emit("MSleave");
    },
    mouseclick: function() {
      if (this.pieceData.pieceColor) {
        console.log("已经被占用，请用其他位置");
      } else {
        this.$store.commit("pieceClick",{"h":this.pieceData.h,"v":this.pieceData.v});
        


        Bus.$emit("changePlayer");
      }
    }
  },
  directives: {
    drawARCing: {
      // 指令的定义
      bind: function(el, binding) {
        if (binding.value.color) {
          let ctx = el.getContext("2d");
          ctx.fillStyle = binding.value.color;
          ctx.beginPath();
          ctx.arc(20, 20, 10, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }
      },
      update:function(el, binding) {
        if (binding.value.color) {
          let ctx = el.getContext("2d");
          ctx.fillStyle = binding.value.color;
          ctx.beginPath();
          ctx.arc(20, 20, 10, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }
      }
    }
  }
}
</script>
<style>

</style>

