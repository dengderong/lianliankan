<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <span class="ss">111</span>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ss{
  font-size:50px;
}
</style>
