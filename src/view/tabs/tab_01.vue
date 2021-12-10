<!--
 * @Author: zhangmin
 * @Date: 2021-02-25 10:17:29
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-12-10 16:05:42
 * @Description: tab_01
-->
<template>
  <div class="tab tab_01">
    <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" :field-names="fieldNames" />
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
       cascaderValue: '',
      fieldNames: {
        text: 'name',
        value: 'code',
        children: 'items',
      },
      options: [
        {
          name: '浙江省',
          code: '330000',
          items: [{ name: '杭州市', code: '330100' }],
        },
        {
          name: '江苏省',
          code: '320000',
          items: [{ name: '南京市', code: '320100' }],
        },
      ],
    };
  },
  mounted(){
   
  },
  methods: {
   
  },
};
</script>

<style lang="less">
</style>
