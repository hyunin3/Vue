<template>
  <div id="app">
    <MyLotto />
    <hr>
    <MyLunch />
  </div>
</template>

<script>
import MyLotto from '@/components/MyLotto'
import MyLunch from '@/components/MyLunch'

export default {
  name: 'App',
  components: {
    MyLotto,
    MyLunch,
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
