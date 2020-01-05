<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: '',
      
    };
  },
  watch: {
    $route(to, from) {
      this.transitionName = to.meta.index < from.meta.index ? 'slide-right' : 'slide-left'
    }
  }

};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
ul {
  padding: 0;
  margin: 0;
}
ul li {
  list-style: none;
}
p {
  margin: 0;
  padding: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
 
</style>
