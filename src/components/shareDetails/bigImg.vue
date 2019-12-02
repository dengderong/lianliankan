<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <swiper-slide>I'm Slide 4</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination "  slot="pagination"></div>
   </swiper> 
</template>

<script>
// require styles
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: 'HelloWorld',
  components: {  
      swiper,  
      swiperSlide  
  },  
  data () {
    return {
       swiperOption: {  
          notNextTick: true,
          loop:false, //循环
          initialSlide:0, //设定初始化时slide的索引
          direction : 'horizontal', //滑动方向
          pagination: { //分页器设置    
              el: '.swiper-pagination',
              clickable :true
          }
        },
    }
  },
  computed: {  
    swiper() {  
      return this.$refs.mySwiper.swiper;  
    }  
  }, 
  mounted () {  
    //可以使用swiper这个对象去使用swiper官网中的那些方法  
     console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(0, 0, false);
  }   
}
</script>

<style>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.swiper-slide{
  height:200px;
}

</style>