<template>
  <div class="wrap2">
    <div class="title">
      <p class="top" @click="goBack">
        <img src="@/assets/left.png" />
        <span>购物车</span>
      </p>
      <p
        class="bottom"
        v-if="!isAddAddress"
      >{{defaultAddress.receiverProvince+defaultAddress.receiverCity+defaultAddress.receiverCounty}}</p>
    </div>

    <div class="content">
      <div class="contentwarp">
        <div class="content_title">精选特卖</div>
        <div class="item" v-for="(item,index) in dataList" :key="index" ref="itembuy">
          <div class="left">
            <img :src="item.goodPictureList[0]" />
          </div>
          <div class="middle">
            <div class="goodsTitle">{{item.goodsName}}</div>
            <div class="goodsSize">
              <span>{{item.selectSize}}</span>
            </div>
            <div class="goodsIcon">
              <span>折后价</span>
              <span>超级VIP已立省</span>
            </div>
            <!-- <div class="inputNumber">
              <p>-</p>
              <p>{{this.inputNumber}}</p>
              <p>+</p>
            </div>-->
          </div>
          <div class="right">
            <p class="sell_price">{{Number(item.suggestPrice)+Number(addPrice)}}</p>
            <p class="close" @click="del(index)">
              <img src="@/assets/close.png" />
            </p>
          </div>
        </div>
      </div>

      <div class="statistics">
        <p>￥{{totalPrice}}</p>
        <p>商品已享受超级VIP尊享无限次免邮</p>
      </div>
    </div>
    <div class="footer">
      <p>
        总金额
        <span>￥{{totalPrice}}</span>
      </p>
      <p>
        <button class="settlement" @click="goConfirm">结算</button>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/servers/index";
export default {
  data() {
    return {
      //  inputNumber:10,
      dataList: [],
      addPrice: 0,
      isAddAddress: true,
      defaultAddress: {},
      userId: ""
    };
  },
  methods: {
    goConfirm() {
      if(this.totalPrice == 0){
          alert('请购买商品后再结算')
          return
      }
      this.$router.push({ path: "/confirmOrder" });
    },
    goBack() {
      this.$router.go(-1);
    },
    del(indexVal) {
      this.dataList = this.dataList.filter((item, index) => index != indexVal);
      localStorage.setItem("dataList", JSON.stringify(this.dataList));
      console.log(this.dataList);
    },
    postAddress() {
      let headers = JSON.parse(localStorage.getItem("headers"));
      api.postDefaultAddress({ userId: this.userId }, headers).then(res => {
        this.defaultAddress = res.data.data;
      });
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      if (this.dataList) {
        this.dataList.forEach(item => {
          totalPrice += Number(item.suggestPrice) + Number(this.addPrice);
        });
        localStorage.setItem("totalPrice", totalPrice);
      }
      return totalPrice;
    }
  },
  created() {
    let pathObj = JSON.parse(localStorage.getItem("path"));
    this.addPrice = pathObj.addPrice;
    this.isAddAddress = pathObj.isAddAddress;
    this.userId = pathObj.userId;
    !this.isAddAddress ? this.postAddress() : "";
    this.dataList = JSON.parse(localStorage.getItem("dataList"));
  },
  mounted(){
    var area = window.LArea
     area.init({
        'trigger': '#demo', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'value',
            name: 'text'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData //数据源
    });
    // console.log(window.LArea)
  }
};
</script>

<style>
.wrap2 {
  font-size: 28px;
  background-color: #f2f2f2;
  padding: 0 20px 250px;
  min-height: 100vh;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.clear:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clear {
  zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.title {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 25px;
}
.title .top {
  padding: 20px 0 5px;
  display: flex;
  align-items: center;
}
.title .top img {
  width: 40px;
  height: 40px;
  padding-right: 10px;
}
.title .top span {
  font-size: 40px;
  font-weight: bold;
  font-family: "Microsoft JhengHei", "Microsoft YaHei", sans-serif;
}
.title .bottom {
  padding-left: 52px;
  font-size: 20px;
  color: #ccc;
}
.wrap2 > .content {
  background-color: #fff;
  border-radius: 12px;
  /* padding-bottom:400px; */
}

.contentwarp {
  padding: 35px 30px;
}
.content_title {
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  font-size: 28px;
}
.item {
  display: flex;
  flex-wrap: nowrap;
  margin: 60px 0;
}
.item .left {
  width: 165px;
  height: 165px;
  margin-right: 25px;
}
.item .left img {
  width: 100%;
  border-radius: 10px;
}
.item .middle {
  width: 350px;
  margin-right: 20px;
}
.goodsTitle {
  font-size: 28px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom: 20px;
}
.goodsSize {
  margin-bottom: 20px;
}
.goodsSize span {
  display: inline-block;
  width: 65px;
  height: 40px;
  background-color: #eaeaea;
  border-radius: 10px;
  text-align: center;
  line-height: 40px;
  font-size: 24px;
  color: #666;
}
.item .right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.close {
  width: 40px;
  height: 40px;
}
.close img {
  width: 100%;
}
.goodsIcon {
  margin-bottom: 10px;
}
.goodsIcon span {
  display: inline-block;
  font-size: 14px;
  padding: 2px 10px;
  border-radius: 20px;
  color: #fff;
  margin-right: 10px;
}
.goodsIcon span:nth-child(1) {
  background: linear-gradient(to right, #ef3830, #fd7b2e);
}
.goodsIcon span:nth-child(2) {
  background-color: #c0a583;
}
.inputNumber {
  display: flex;
  flex-flow: row nowrap;
  width: 200px;
  height: 45px;
  border-radius: 30px;
  border: 1px solid #eee;
}
.inputNumber p {
  flex: 1 1;
  text-align: center;
  line-height: 45px;
  font-size: 26px;
}
.inputNumber p:nth-child(2) {
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
}
.wrap2 .statistics {
  padding: 40px 30px;
  border-top: 1px solid #eee;
}
.wrap2 .statistics p:nth-child(1) {
  text-align: right;
  padding-bottom: 20px;
  font-weight: bold;
  font-size: 30px;
  font-family: "Microsoft JhengHei";
}
.wrap2 .statistics p:nth-child(2) {
  color: #999;
  font-size: 20px;
}
.wrap2 .footer {
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-top: 2px solid #eee;
}
.wrap2 .footer p:nth-child(1) {
  text-align: center;
  line-height: 80px;
}
.wrap2 .footer p:nth-child(1) span {
  font-size: 36px;
  color: #ef3830;
  /* font-weight:bold; */
}
.wrap2 .footer p:nth-child(2) {
  text-align: center;
}
.wrap2 .footer p:nth-child(2) button {
  width: 94%;
  outline: 0;
  border: 0;
  background-color: #ef3830;
  color: #fff;
  border-radius: 40px;
  padding: 15px 0;
  font-size: 30px;
}
</style>