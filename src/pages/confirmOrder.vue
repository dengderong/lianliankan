<template>
  <div class="wrap3">
    <div class="address">
       <p>广东省广州市白云区石井街道</p>
       <p>石井国际大厦1号楼 1301</p>
       <p>邓德荣 13710421427</p>
    </div>

    
    <div class="statistics">
        <p><span>商品金额</span> <span>￥45</span></p>
        <p><span>运费</span> <span></span></p>
        <p><span>应付金额</span> <span>￥45</span></p>
    </div>

    <div class="remarks">
      备注： <input type="text" placeholder="为了方便配货请输入您的姓名">
    </div>
    
   

    <div class="footer">
      <p>总金额<span>￥459</span></p>
      <p><button class="settlement" @click="aaa()">立即购买</button></p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    aaa(){
      alert(222)
    }
  }
};
</script>

<style>
.wrap3 {
  font-size: 28px;
  background-color: #f2f2f2;
  padding: 30px 20px 0px;
  height:100vh;
}
.footer{
  height:200px;
  width:100%;
  position:fixed;
  bottom:0;
  left:0;
  background-color:#fff;
  border-top:2px solid #eee; 
}
.footer p:nth-child(1){
   text-align:center;
   line-height:82px;
}
.footer p:nth-child(1) span{
  font-size:36px;
  color:#ef3830;
}
.footer p:nth-child(2){
  text-align:center;
}
.footer p:nth-child(2) button{
  width:94%;
  outline:0;
  border:0;
  background-color:#ef3830;
  color:#fff;
  border-radius:40px;
  padding:15px 0;
  font-size:30px;
}
.wrap3 .address {
  background-color:#fff;
  border-radius:10px;
  padding:30px;
  border-top:10px solid transparent;
  border-image:url('../assets/line.png') 30  30 round;
}
.wrap3 .address p:nth-child(1){
  font-size:26px;
  color:#999;
}
.wrap3 .address p:nth-child(2){
  font-size:36px;
  font-weight:bold;
  line-height:76px;
}
.wrap3 .address p:nth-child(3){
  font-size:32px;
}
.wrap3 .statistics{
  background-color:#fff;
  margin-top:20px;
  padding:30px;
  border-radius:10px;
  font-size:30px;
}
.wrap3 .statistics p{
  display:flex;
  justify-content:space-between;
  line-height:60px;
}
.wrap3 .statistics p span:nth-child(2){
  color:#ef3830; 
  font-size:32px;
}

.wrap3 .remarks{
  padding:30px;
  margin-top:20px;
  border-radius:10px;
  font-size:30px;
  background-color:#fff;
  outline:0;
  
}
.wrap3 .remarks input{
    height: 50px;
    width:500px;
    padding: 10px;
    border: 1px solid #e8e8e8;
    outline: none;
    resize:none;
    font-size:26px;
    border-radius:10px;
    box-shadow:none;
    appearance:none;
   -moz-appearance:none; /* Firefox */
   -webkit-appearance:none; /* Safari 和 Chrome */


}

</style>