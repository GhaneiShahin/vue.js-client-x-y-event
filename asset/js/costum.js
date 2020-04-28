var myApp = new Vue({
  el: "#app",
  data: {
    x: 0,
    y: 0
  },
  methods: {
    getCursor: function(event) {
      this.x = event.clientX;
      this.y = event.clientY
    }
  }
});
