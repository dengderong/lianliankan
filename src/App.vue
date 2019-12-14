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

body{
  margin:0;
  padding:0;
  text-align: center;
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
