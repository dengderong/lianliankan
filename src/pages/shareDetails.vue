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
      <div class="item" v-for="(item,index) in allData.dataList" :key="index">
        <div class="storeHeaderPic">
            <img :src="item.brandPicture" alt="">
        </div>
        <div class="content">
          <div class="title">
               <p class="businessName">{{item.brandName}}</p>
               <p class="businessTxt" v-html="item.goodsRemark"></p>
               <p class="businessPrice"><span class="price">售价：￥{{item.goodSkuList[0].suggestPrice+addPrice}}</span> <del class="beforPrice">￥{{item.goodSkuList[0].marketPrice}}</del></p>
          </div>

          <div class="imgList">
              <img v-for="picItem in item.goodPictureList" :key="picItem.id" :src="picItem" alt="">
          </div>

          <p class="choiceTxt">选择尺码，下单购买</p>
          <div class="sizeList">
              <span  @click="selectSize(itemSku,indexSku,item,index)" :class="{'disabled':itemSku.activitySkuNum == 0,'active':itemSku.isShow}"  v-for="(itemSku,indexSku) in item.goodSkuList" :key="indexSku" :ref="`sizeDom${index}`">{{itemSku.skuName}}</span>
          </div>
          <button class="buyBtn">加入购物车</button>
        </div>
      </div>
    </div>


    <!-- loading -->
    <div class="c_loading">
		  <img src="@/assets/loading.gif">
	  </div>
    

    <!-- shoppingcar -->
    <div class="shoppingcar">
      <img src="@/assets/car.png" alt="">
      <p class="count">22</p>
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
      id:this.$route.query.id?this.$route.query.id:133,
      userId:this.$route.query.userId?this.$route.query.userId:6,
      addPrice:this.$route.query.addPrice ? Number(this.$route.query.addPrice):0,
      isShowSellOut:this.$route.query.isShowSellOut == 'true'? true : false,
      isAddAddress:this.$route.query.isAddAddress == 'true'? true : false,
      data:{},
      allData:{},
      btnActive:false,
      scroll:0,
      clienHeight:0,
      documentHeight:0,
      pageSize:5,
      pageNum:0,
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
    getList(){
      let url = 'https://www.yidegz.cn/activity/goods/listActivityGoodsByPage';
      this.axios.
        post(url,{
          id: this.id,
          pageSize: this.pageSize,
          pageNum: this.pageNum
      }).then(res=>{
        console.log(res)
          this.data = res.data
          this.allData = res.data.data
          this.data.addPrice = this.addPrice
          this.data.isShowSellOut = this.isShowSellOut
          this.pageSize = this.data.pageSize
          this.pageNum = this.data.pageNum
          this.total = this.data.totalPage
          this.allData.dataList.forEach(item => {
              item.goodSkuList.forEach(itemSku => {
                  itemSku.isShow = false
              })
          });
      })
    },
    selectSize(itemSku,indexSku,item,index){
      //当库存为0是不让显示状态
      item.goodSkuList.forEach(val =>{
          if(val.activitySkuNum == 0 || this.$refs[`sizeDom${index}`][indexSku].className == 'disabled'){
              itemSku.isShow = false;
          }else{
              val.isShow = false
          }
        })
      if(this.$refs[`sizeDom${index}`][indexSku].className != 'disabled'){
          itemSku.isShow = true
      }  
      item.goodSkuList.sort()
    },
    scrollFun(){
       this.scroll = document.documentElement.scrollTop || document.body.scrollTop;  //滚动条距离顶部的距离
       this.clienHeight =  document.documentElement.clientHeight;   //页面可见高度
       this.documentHeight = document.documentElement.offsetHeight;  //页面总高度
       
        console.log(this.documentHeight)
    }
  },
  created() {
    this.getInfo();
    this.getList();
  },
  mounted(){
      window.addEventListener('scroll', this.scrollFun)
      
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
  margin-top: 30px;

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
  margin-right:40px;
  margin-left:0px;
  text-align: left;
}
.businessTxt{
  text-align: left;
  white-space: pre-wrap;
  font-size:28px;
  line-height: 40px;
}
.businessName{
  margin: 0;
  color: #2d8cf0;
  font-weight: 600;
  font-size: 26px;
  height: 50px;
  padding-bottom: 10px;
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
  font-size:24px;
  background-color:#d9d9d9;
  color: #444243;
  padding: 6px;
  margin:0 10px;
  border-radius:5px;
}

.sizeList span.disabled {
  background: #cccccc;
  color: #dddddd;
}

.sizeList span.active {
  background: #EF3830;
  color: #ffffff;
}

.buyBtn{
  float: right;
  border:0;
  background-color: #EF3830;
  color: #ffffff;
  padding: 12px 18px;
  margin-top: 35px;
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
  .goodsTxt{
    display: inherit;
    text-align:right;
    font-size:18px;
    color:#cccccc;
    line-height:60px;
  }

  .shoppingcar{
    position:fixed;
    bottom:15px;
    right:20px;
    z-index:100;
    background-color:#ef3830;
    border-radius:50%;
    height:90px;
    width:90px;
  }
  .shoppingcar img{
    width:50px;
    height:50px;
    position:absolute;
    top:50%;
    left: 50%;
    margin-top:-20px;
    margin-left:-25px;
  }
  .shoppingcar p{
    position:absolute;
    right: 10px;
    top:8px;
    color:red;
    font-weight: bold;
    background-color:#fff;
    border-radius:50%;
    min-height:30px;
    min-width:30px;
    font-size:16px;
    line-height: 30px;

  }
</style>