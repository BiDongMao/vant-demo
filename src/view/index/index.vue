<!--
 * @Author: zhangmin
 * @Date: 2021-02-25 10:17:29
 * @LastEditors: zhangmin
 * @LastEditTime: 2021-02-25 14:53:12
 * @Description: 文件说明
-->
<template>
  <div class="index">
    <van-nav-bar
      title="首页"
      left-text="返回"
      right-text="消息"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="index-content">
      <tab-first v-show="active==0" />
      <tab-second v-show="active==1" />
      <tab-three v-show="active==2" />
      <tab-four v-show="active==3" />
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import TabFirst from '@/view/tabs/tab_01'
import TabSecond from '@/view/tabs/tab_02'
import TabThree from '@/view/tabs/tab_03'
import TabFour from '@/view/tabs/tab_04'


export default {
  components: {
    TabFirst,
    TabSecond,
    TabThree,
    TabFour
  },
  computed:{
      returnStatusOptions: {
      get () {
        return this.$store.state.common.returnStatusOptions
      },
      set (val) {
        this.$store.commit('common/updateReturnStatusOptions', val)
      }
    },
  },
  data() {
    return {
      active:0,
     
    };
  },
  mounted(){
    // console.log('returnStatusOptions',this.returnStatusOptions)
    // this.returnStatusOptions=[1,2]
    // console.log('returnStatusOptions',this.returnStatusOptions)
    // this.getUserInfo()
  },
  methods: {
     onClickLeft() {
      this.$toast('返回');
    },
    onClickRight() {
      this.$toast('按钮');
    },
    getUserInfo () {
      this.$http({
        url: this.$http.adornUrl('ruiz/user/info'),
        method: 'get',
        params: this.$http.adornParams()
      }).then(({ data }) => {
        console.log(data)
        if (data && data.code === 0) {
          console.log(data)
        }
      })
    },
  },
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }

  &-title {
    font-size: 16px;
  }

  &-price {
    color: #f44;
  }

  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }

  &-cell-group {
    margin: 15px 0;

    .van-cell__value {
      color: #999;
    }
  }

  &-tag {
    margin-left: 5px;
  }
}
</style>
