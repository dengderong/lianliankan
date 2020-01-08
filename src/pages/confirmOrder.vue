<template>
  <div class="wrap3">
    <div class="address" v-if="!isAddAddress">
      <p>{{defaultAddress.receiverProvince+defaultAddress.receiverCity+defaultAddress.receiverCounty}}</p>
      <p>{{defaultAddress.receiverAddress}}</p>
      <p>{{defaultAddress.receiverName+' '+defaultAddress.receiverPhone}}</p>
    </div>

    <div class="address_input" v-if="isAddAddress">
      <div class="address_item">
        <span>收货人</span>
        <input name="receiverName" placeholder="请输入收货人姓名"/>
      </div>
      <div class="address_item">
        <span>电话</span>
        <input name="receiverPhone" placeholder="请输入收货人电话" />
      </div>
      <div class="address_item">
        <span>地区</span>
        <input id="demo" name="receiver" type="text" readonly="" placeholder="请选择地区" value=""/>
        <input id="value" type="hidden" name="receiverCode" value="20,234,504" />
      </div>
      <div class="address_item">
        <span>详细地址</span>
        <input name="receiverAddress" placeholder="请输入收货人详细地址"/>
      </div>
    </div>

    <div class="statistics">
      <p>
        <span>商品金额</span>
        <span>￥{{totalPrice}}</span>
      </p>
      <p>
        <span>运费</span>
        <span></span>
      </p>
      <p>
        <span>应付金额</span>
        <span>￥{{totalPrice}}</span>
      </p>
    </div>

    <div class="remarks">
      备注：
      <input type="text" placeholder="为了方便配货请输入您的姓名" />
    </div>

    <div class="footer">
      <p>
        总金额
        <span>￥{{totalPrice}}</span>
      </p>
      <p>
        <button class="settlement" @click="settlement()">立即购买</button>
      </p>
    </div>
  </div>
</template>

<script>
import api from "@/servers/index";
import '@/assets/css/LArea.min.css'
import LAreaData from '@/assets/js/city.data.min'
import LArea from '@/assets/js/LArea.min.js'
import '@/assets/js/province.js'

export default {
  data() {
    return {
      totalPrice: 0,
      isAddAddress: true,
      userId: "",
      defaultAddress:{}
    };
  },
  methods: {
    settlement() {
      alert(1111);
    },
    postAddress() {
      let headers = JSON.parse(localStorage.getItem("headers"));
      api.postDefaultAddress({ userId: this.userId }, headers).then(res => {
          this.defaultAddress = res.data.data
      });
    },
    settlement(){
        alert(11111111)
    }
  },
  created() {
    let pathObj = JSON.parse(localStorage.getItem("path"));
    this.isAddAddress = pathObj.isAddAddress;
    this.userId = pathObj.userId;
    this.totalPrice = localStorage.getItem("totalPrice");
    !this.isAddAddress ? this.postAddress() : "";
  },
  mounted(){
     LArea.LArea.prototype.init({
        'trigger': '#demo', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
        'valueTo': '#value', //选择完毕后id属性输出到该位置
        'keys': {
            id: 'value',
            name: 'text'
        }, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
        'type': 1, //数据源类型
        'data': LAreaData.LAreaData //数据源
    })
    
    // console.log(document.querySelector('#demo'))
  }
};
</script>

<style>
.wrap3 {
  font-size: 28px;
  background-color: #f2f2f2;
  padding: 30px 20px 0px;
  min-height: 100vh;
}
.wrap3 .footer {
  height: 200px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-top: 2px solid #eee;
}
.wrap3 .footer p:nth-child(1) {
  text-align: center;
  line-height: 82px;
}
.wrap3 .footer p:nth-child(1) span {
  font-size: 36px;
  color: #ef3830;
}
.wrap3 .footer p:nth-child(2) {
  text-align: center;
}
.wrap3 .footer p:nth-child(2) button {
  width: 94%;
  outline: 0;
  border: 0;
  background-color: #ef3830;
  color: #fff;
  border-radius: 40px;
  padding: 15px 0;
  font-size: 30px;
}
.wrap3 .address {
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  border-top: 10px solid transparent;
  border-image: url("../assets/line.png") 30 30 round;
}
.wrap3 .address p:nth-child(1) {
  font-size: 26px;
  color: #999;
}
.wrap3 .address p:nth-child(2) {
  font-size: 36px;
  font-weight: bold;
  line-height: 76px;
}
.wrap3 .address p:nth-child(3) {
  font-size: 32px;
}
.wrap3 .statistics {
  background-color: #fff;
  margin-top: 20px;
  padding: 30px;
  border-radius: 10px;
  font-size: 30px;
}
.wrap3 .statistics p {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.wrap3 .statistics p span:nth-child(2) {
  color: #ef3830;
  font-size: 32px;
}

.wrap3 .remarks {
  padding: 30px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 30px;
  background-color: #fff;
  outline: 0;
}
.wrap3 .remarks input {
  height: 50px;
  width: 500px;
  padding: 10px 10px 10px 30px;
  border: 1px solid #e8e8e8;
  outline: none;
  resize: none;
  font-size: 28px;
  border-radius: 10px;
  box-shadow: none;
  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari 和 Chrome */
}
.address_input {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  font-size: 30px;
}
.address_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
}
.address_item input {
  height:30px;
  width:420px;
  padding: 10px 10px 10px 30px;
  border: 0;
  outline: none;
  resize: none;
  text-align:right;
  font-size: 28px;
  box-shadow: none;
  appearance: none;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari 和 Chrome */
}
</style>