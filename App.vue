<template>
  <div id="app">
    <input type="text" v-model="appData" @input="inputData">
   <AppChild 
    :my-props="dynamicProps"
    :app-data="appData"

   />
  </div>
</template>

<script>
import AppChild from './components/AppChild.vue'

export default {
  name: 'App',
  components: {
    AppChild
  },
  data(){
    return {
      appData : ""
    }
  },
  methods:{
    inputData(){
      this.$emit('app-to-home',this.appData )
    }
  }
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
