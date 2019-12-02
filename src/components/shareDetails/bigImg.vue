<template>
  <div>
    <button @click="changeMessage" ref="aa">{{message}}</button>
  </div>
</template>

<script>
export default {
   data(){
     return{
        message:'原始值'
     }
   },
   methods:{
     changeMessage(){
        this.message = '修改后的值'
        this.$nextTick(()=>{
            console.log(this.$refs.aa.innerHTML)
        })
     },

   }
}
</script>

<style>

</style>