import Vue from 'vue'
Vue.directive('drawARCing', {
  // 指令的定义
  //  bind: function(el, binding) {
  //   if (binding.value.color) {
  //     let ctx = el.getContext("2d");
  //     ctx.fillStyle = binding.value.color;
  //     ctx.beginPath();
  //     ctx.arc(20, 20, 10, 0, 2 * Math.PI);
  //     ctx.closePath();
  //     ctx.fill();
  //   }
  // },
  update: function (el, binding) {
    if (binding.value.color) {
      let ctx = el.getContext("2d");
      ctx.fillStyle = binding.value.color;
      ctx.beginPath();
      ctx.arc(20, 20, 10, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
    }
  }
});
Vue.directive('drawBGing', {
  // 指令的定义
  bind: function (el) {
    let ctx = el.getContext("2d");
    ctx.moveTo(0, 20);
    ctx.lineTo(40, 20);

    ctx.moveTo(20, 0);
    ctx.lineTo(20, 40);

    ctx.closePath();
    ctx.stroke();
  }
});
