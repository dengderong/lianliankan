<template>
    <div class="wrapi">
        <div class="addressTxt">     
            <p><span>邓德荣</span>  <span>13710421427</span></p>
            <p>广东省广州市番禺区沙头街小平村大街63号之2</p>
        </div>
        <div class="selectAddress">
            <p class="left">收货地址</p>
            <p class="right">
                <img src="@/assets/addressSelect.png" alt=""><span>选择</span>   
            </p>
      </div>
    </div>    
</template>

<script>
export default {
    
}
</script>

<style>
.wrapi{
    font-size:32px;
    background-color:#f5f5f5;
    height:100vh;
}
.addressTxt{
    background-color:#fff;
    padding: 20px 30px;
    margin:20px 0;
    border-radius:20px;
}
.addressTxt p:nth-child(1){
    display:flex;
    justify-content:space-between;
    align-items:center;
    line-height:60px;
}
.addressTxt p:nth-child(2){
    text-align:left;
    line-height:60px;
    
}
.selectAddress{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px 40px;
    background-color:#fff;
    border-radius:20px;
}
.selectAddress .right{
    display:flex;
    align-items:center;
}
.selectAddress .right img{
    height:50px;
    width:50px;
    padding-right: 5px;
}
</style>