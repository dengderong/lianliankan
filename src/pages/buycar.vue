<template>
  <div class="wrapi">
    <div class="addressTxt">
      <p>
        <span>邓德荣</span>
        <span>13710421427</span>
        <span>默认</span>
      </p>
      <p>广东省广州市番禺区沙头街小平村大街63号之2</p>
    </div>
    <div class="selectAddress">
      <p class="left">收货地址</p>
      <p class="right">
        <span>选择</span>
        <img src="@/assets/more.png" alt />
      </p>
    </div>
    <div class="selectList">
      <div class="addressItem clear">
        <div class="left fl"><img src="@/assets/true.png" alt=""></div>
        <div class="right fl">111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mothods: {}
};
</script>

<style>
.wrapi {
  padding: 20px;
  font-size: 28px;
  background-color: #f5f5f5;
  height: 100vh;
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
.clear{
  zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.addressTxt p {
  box-sizing: border-box;
  padding: 10px 0;
}
.addressTxt {
  background-color: #fff;
  padding: 20px 30px;
  margin-bottom: 20px;
  border-radius: 20px;
}
.addressTxt p:nth-child(1) span {
  padding-right: 10px;
}
.addressTxt p:nth-child(1) span:nth-child(3) {
  border: 1px solid rgb(10, 182, 0, 0.4);
  padding: 4px 6px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  box-sizing: border-box;
  line-height: 22px;
}

.addressTxt p:nth-child(1) {
  display: flex;
  align-items: center;
}
.addressTxt p:nth-child(2) {
  text-align: left;
  line-height: 60px;
}
.selectAddress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #fff;
  border-radius: 20px;
}
.selectAddress .right {
  display: flex;
  align-items: center;
}
.selectAddress .right img {
  height: 30px;
  width: 30px;
}
.selectAddress .right span {
  padding-right: 8px;
}
.selectList {
  margin-top: 10px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
}
.addressItem .left img{
  width:20px;
  height:20px;
}
</style>