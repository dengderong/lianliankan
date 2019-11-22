<template>
  <div class="wrap">
    <!-- 头部信息 -->
    <div class="goodsIntroduction">
      <div class="title">
        <span class="line"></span>
        <span>{{goodsIntroduction.title}}</span>
        <span class="line"></span>
        <p class="txt">{{goodsIntroduction.content}}</p>
      </div>
      <div class="content">
          <img v-for="item in goodsInfoImg" :key="item.id" :src="item.src" alt="">
      </div>
    </div>

    <!-- 图片列表 -->
    <div class="contentList">
      <div class="item">
        <div class="storeHeaderPic">
            <img :src="contentList.activityBrandPicture" alt="">
        </div>
        <div class="content">
          <div class="title">
               <p class="businessName">{{contentList.activityBrandName}}</p>
               <p class="businessTxt">Y103 itrees伊树：长袖T恤 米白</p>
               <p class="businessTxt">码数:L</p>
               <p class="businessTxt">吊牌价:599元</p>
               <p class="businessTxt">款号:I18CT219</p>
               <p class="businessPrice"><span class="price">售价：￥79</span> <del class="beforPrice">￥559</del></p>
          </div>

          <div class="imgList">
              <img v-for="item in goodsInfoImg" :key="item.id" :src="item.src" alt="">
          </div>

          <p class="choiceTxt">选择尺码，下单购买</p>
          <div class="sizeList">
              <span>S</span>
              <span>L</span>
              <span>M</span>
          </div>
          <button class="buyBtn">立即购买</button>
        </div>
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
        { src: require("@/assets/1.jpg") }
      ],
      contentList: {}
    };
  },
  methods: {
    getlist: function() {
      let url = "http://120.79.5.83:10008/activity/goods/listActivityGoods";
      this.axios
        .post(url, {
          id: 1
        })
        .then(res => {
          this.contentList = res.data.data.activity;
          console.log(this.contentList);
        });
    }
  },
  created() {
    this.getlist();
  }
};
</script>

<style>
.wrap {
  margin: 50px auto;
  height: auto;
}
.goodsIntroduction {
  width: 646px;
  height: 820px;
  margin: 0 auto;
  padding-top: 31px;
  background-color: #f0f0f0;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
.goodsIntroduction>.title {
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
.goodsIntroduction>.content {
  width: 602px;
  height: 602px;
  margin: 0 auto;
  margin-top:28px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-start;
}

.goodsIntroduction .content img{
  width: 31%;
  height: 31%;
  margin-bottom: 3.5%;
  margin-right: 3.5%;
}
.goodsIntroduction>.content> img:nth-of-type(3n) {
  margin-right: 0;
}

.contentList {
  width: 676px;
  height: auto;
  margin: 67px auto 0;
}
.contentList .item {
  display: flex;
}
.contentList .item .storeHeaderPic {
  width: 78px;
  height: 78px;
  background-color: #888;
  border-radius: 8px;
  margin-right: 19px;
}
.storeHeaderPic>img{
  width: 78px;
  height: 78px;
}
.contentList .item .content {
  flex: 1;

}
.contentList .item .content>.title{
  margin-right:80px;
  margin-left:0px;
  text-align: left;
}
.businessTxt{
  text-align: left;
}
.businessName{
  margin: 0;
  color: #2d8cf0;
  font-weight: 600;
  font-size: 32px;
  height: 50px;
  padding-bottom: 10px;
}
.businessTxt{
  font-size:28px;
  line-height: 46px;
}
.price{
  font-size: 30px;
  color: red;
  line-height: 42px;
  padding-right: 40px;
}
.beforPrice{
  font-size: 30px;
  color: #d5d5d5;
  line-height: 42px;
}
.businessPrice{
  line-height:60px;
}
.imgList{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-start;
  margin-top:5px;
}
.imgList img{
  width: 31%;
  height: 31%;
  margin-bottom: 3.5%;
  margin-right: 3.5%;
}
.imgList img:nth-of-type(3n){
  margin-right:0px;
}

.choiceTxt{
  color: #cccccc;
  font-size: 13px;
  line-height: 50px;
  text-align: left;
}

.sizeList{
  display: flex;
  flex-flow: row nowrap;
  background: #f5f5f5;
  padding: 15px 5px;
  text-align:left;
  border-radius:5px;
}

.sizeList span{
  font-size:30px;
  background-color:#d9d9d9;
  color: #444243;
  padding: 10px 10px;
  margin:0 10px;
  border-radius:5px;
}
.buyBtn{
  float: right;
  border:0;
  background-color: #EF3830;
  color: #ffffff;
  padding: 12px;
  margin-top: 20px;
  font-weight: 400;
  border-radius: 5px;
  
}
</style>