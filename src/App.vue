<template>
  <div id="app">
    <transition></transition>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

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
