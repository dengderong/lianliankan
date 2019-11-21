<template>
  <div class="wrap">
    <div class="goodsIntroduction">
      <div class="title">
        <span class="line"></span>
        <span>{{goodsIntroduction.title}}</span>
        <span class="line"></span>
        <p class="txt">{{goodsIntroduction.content}}</p>
      </div>
      <div class="content">
        <ul>
          <li v-for="item in goodsInfoImg" :key="item.id">
            <img :src="item.src" alt=""> 
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      goodsIntroduction: {
        title: "商品及尺码预览",
        content:
          "【消息】中新网11月21日电 综合报道,斯里兰卡新总统拉贾帕克萨20日宣布,将任命其亲哥哥马欣达拉贾帕克萨为新总理。同一天,现任总理维克勒马辛哈办公室发表"
      },
      goodsInfoImg: [
        { src: require("@/assets/1.jpg") },
        { src: require("@/assets/2.jpg") },
        { src: require("@/assets/1.jpg") },
        { src: require("@/assets/2.jpg") },
        { src: require("@/assets/1.jpg") },
        { src: require("@/assets/2.jpg") },
        { src: require("@/assets/1.jpg") },
        { src: require("@/assets/2.jpg") },
        { src: require("@/assets/1.jpg") },
      ]
    };
  }
};
</script>

<style>
.wrap {
  margin: 50px auto;
  width: 646px;
  height: auto;
}
.goodsIntroduction {
  height: 820px;
  padding-top: 31px;
  background-color: #f0f0f0;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.title {
  margin: 0 auto;
  width: 490px;
}
.line {
  border-bottom: 2px solid #888;
  display: inline-block;
  width: 95px;
  margin-bottom: 10px;
}
.goodsIntroduction .title span:nth-child(2) {
  font-size: 36px;
  color: #888;
  padding: 0 5px;
}
.title .txt {
  margin-top: 22px;
  font-size: 28px;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  color: #888;
}
.content {
  width: 602px;
  height: 602px;
  margin: 0 auto;
}
.content>ul li img{
  width:192px;
  height:192px;
  
}
.content>ul li{
  width:192px;
  height:192px;
  float: left;
  padding:0 12px 12px 0
}
.content>ul li:nth-child(3){
  padding-right:0;
}
.content>ul li:nth-child(6){
  padding-right:0;
}
.content>ul li:nth-child(9){
  padding-right:0;
}


</style>