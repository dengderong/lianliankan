<template>
    <div class="inputNumber">
        <span>-</span> <input type="text"> <span>+</span>
    </div>   
</template>

<script>
export default {

}
</script>

<style>
.inputNumber{
    display: flex;
    justify-content:flex-end;
}
.inputNumber span{
    display: inline-block;
    background-color:#ef3830;
    color: #fff;
    width:50px;
    border-radius: 5px;
    text-align: center;
    height:40px;
    line-height: 40px;
    margin-left: 5px;
}

.inputNumber input{
    width:150px;
    text-align: center;
    height:40px;
    line-height: 40px;
    border:2px solid #ccc;
    padding: 0;
    box-sizing:border-box;
    margin-left: 5px;
    border-radius: 3px;
}
</style>