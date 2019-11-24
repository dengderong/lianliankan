<template>
  <div class="wrap">
    <!-- 头部信息 -->
    <div class="goodsIntroduction">
      <div class="title">
        <span class="line"></span>
        <span>{{infoData.activityBrandName}}</span>
        <span class="line"></span>
        <p class="txt">{{infoData.activityRemark}}</p>
      </div>
      <div class="content">
          <img v-for="item in infoData.activityPictureList" :key="item.id" :src="item" alt="">
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
              <!-- <img v-for="item in goodsInfoImg" :key="item.id" :src="item.src" alt=""> -->
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


    <!-- loading -->
    <div class="c_loading">
		  <img src="../assets/loading.gif">
	  </div>

  </div>
  
</template>

<script>
export default {
  data: function() {
    return {
      infoData: {},
      goodsIntroduction: {},
      contentList: {},
      id:this.$route.query.id?this.$route.query.id:2,
      userId:this.$route.query.userId?this.$route.query.userId:6,
      addPrice:this.$route.query.addPrice ? Number(this.$route.query.addPrice):0,
      isShowSellOut:this.$route.query.isShowSellOut == 'true'? true : false,
      isAddAddress:this.$route.query.isAddAddress == 'true'? true : false,
      kpageSize:5,
      page:1,
	    total:0,
    };
  },
  methods: {
    getInfo: function() {
      let url = "https://www.yidegz.cn/activity/goods/listActivityById";
      this.axios
        .post(url, {
          id: this.id
        })
        .then(res => {
          this.infoData = res.data.data
        });
    },
  },
  created() {
    this.getInfo();
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
  color: #333;
  padding: 0 5px;
  font-weight: 540;
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
  /* width: 602px;
  height: 602px; */
  margin: 0 auto;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:flex-start;
  padding:30px;
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
.contentList .item{
  display: flex;
  border-bottom:1px solid rgba(0,0,0,0.2);
  padding-bottom:60px;
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
  font-weight: bold;
  border-radius: 5px;
}

.c_loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.1);
    display: none;
    z-index: 9999
  }

  .c_loading img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 130px;
    height: 120px;
    background: pink
  }
</style>