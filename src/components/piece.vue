<template>
  <div class="">
      <canvas class="drawARCing" v-drawARCing="{color:pieceData.pieceColor}" @mouseenter="mouseenter()" @mouseleave="mouseleave()" @click="mouseclick" width="40" height="40">A Drawing of something</canvas>  
  </div>
</template>
<script>
import Bus from "./Bus.js";
export default {
  props: {
    pieceData: {
      type: Object
    }
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
      } else if (this.$store.getters.WinnerFun) {
        console.log("游戏已结束");
      } else {
        this.$store.commit("pieceClick", {
          h: this.pieceData.h,
          v: this.pieceData.v
        });
        Bus.$emit("changePlayer");
      }
    }
  }
};
</script>
<style>
</style>

