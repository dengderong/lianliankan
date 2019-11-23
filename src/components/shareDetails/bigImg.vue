<template>
  <!-- 过渡动画 -->
  <transition name="fade">
    <div class="img-view" @click="bigImg">
      <!-- 遮罩层 -->
      <div class="img-layer"></div>
      <div class="img">
        <img :src="imgSrc" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["imgSrc"], //接受图片地址
  methods: {
    bigImg() {
      // 发送事件
      this.$emit("clickit");
    }
  }
};
</script>

<style>

</style>