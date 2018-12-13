<template>
  <div class="container">
    <div v-for="(item, index) in clazz" :key="index">
      <i-card style="margin-top:0px;">
          <view slot="content"><img :src="item.img" alt=""></view>
          <view slot="content">{{item.title}}</view>
          <view slot="content" class=".sub-title">{{item.desc}}</view>

          <view slot="content">
            <text class="price">￥{{item.price}}</text>
            <text class="promotion-price">￥{{item.discountPrice}}|&nbsp; </text>
            <text class="promotion">{{item.discount}}</text>     
            <i-button class="bt-ording" type="warning" size="small" shape="circle" inline=true @click="ording(item.id)">立即预约</i-button>
          </view>
      </i-card>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      clazz: [
        {
          'id': 10000,
          'title': '蒙台梭利国际早教4节 早教体验课',
          'img': 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          'desc': '周三-周日，下午课程，六门课可选',
          'price': '99.00',
          'discountPrice': '72：00',
          'discount': '促销'
        },
        {
          'id': 20000,
          'title': '蒙台梭利国际早教4节 早教体验课',
          'img': 'https://i.loli.net/2017/08/21/599a521472424.jpg',
          'desc': '周三-周日，下午课程，六门课可选',
          'price': 'Y99.00',
          'discountPrice': '￥72：00',
          'discount': '促销'
        }
      ]
    }
  },

  methods: {
    ording (id) {
      console.log('是的，进来了', id)
      // this.$router.push({path: './detail', query: {id: id}})
      wx.navigateTo({
        url: '../orderDetail/main?id=' + id
      })
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
  }
}
</script>

<style scoped>
  .title {
    font-weight: bold;
  }

  .sub-title {
    color: #848484;
    font-size: 16px;
  }

  /* 价格 */
  .price {
    color: #F4D5A7;
  }

  /* 促销价格 */
  .promotion-price {
    text-decoration: line-through; 
    font-size: 10px;
  }

  /* 促销 */
  .promotion {
    color: white; 
    background: #FBBC5B;
  }

  /* 预约按钮 */
  .bt-ording {
    margin-left: 50px;
    width: 20px;
    height: 10px;
  }

  .bt-ording button {
    /* font-size: 12px; */
    color: white;
    
  }
</style>
