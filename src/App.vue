<template>
  <div id="app">
    <transition :name="transitionName"></transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    　return {
　　　　　　transitionName: '' 
　　　　}
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0;
  padding:0;
}
ul{
  padding:0;
  margin:0;
}
ul li{
  list-style: none;
}
p{
  margin:0;
  padding:0;
}
</style>
