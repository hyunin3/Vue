<template>
  <div id="app">
   
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increaseCount">increase +</button>
    <button @click="decreaseCount">decrease -</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App', 
  // data: function() {
  //   return {
  //     counter: 0,
  //   }
  // }, index에서 사용할거라 데이터 필요없음. 이거 놔두면 오류남
  methods: {
    increaseCount () {
      this.$store.dispatch('increaseCount')
      // this.counter += 1
    },
    decreaseCount () {
      this.$store.dispatch('decreaseCount')
    },
  },
  computed: {
    counter(){
      return this.$store.state.counter
    },
    counterDouble () {
      // return this.$store.state.counter * 2
      return this.$store.state.counter * 2
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
