<!--
 * @Author: zhangmin
 * @Date: 2021-02-25 10:17:29
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-10-26 16:28:24
 * @Description: button-demo
-->
<template>
  <div class="button-demo">

    <div class="rz-button-content fixed-content">
      <van-button type="primary" block>主要按钮</van-button>
    </div>

  </div>
</template>
<script>


export default {
  components: {
   
  },
  computed:{
      
  },
  data() {
    return {
     
    };
  },
  mounted(){
   
  },
  methods: {
    routePush(name){
     this.$router.push({name,params:{type:4}})
   },
   
  },
};
</script>
