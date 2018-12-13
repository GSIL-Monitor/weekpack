<template>
  <div class="container">
    <div>
      <i-card>
        <view slot="content"><img
            :src="detail.img"
            alt=""
          ></view>
        <view slot="content">{{detail.title}}</view>
        <view
          slot="content"
          class=".sub-title"
        >{{detail.desc}}</view>

        <view slot="content">
          <text class="price">￥{{detail.price}}</text>
          <text class="promotion-price">￥{{detail.discountPrice}}|&nbsp; </text>
          <text class="promotion">{{detail.discount}}</text>
          <i-button
            class="bt-ording"
            type="warning"
            size="small"
            shape="circle"
            inline=true
            @click="ording(detail.id)"
          >立即预约</i-button>
        </view>
      </i-card>
    </div>

    <!-- 介绍 -->
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detail: {
        'id': 10000,
        'title': '蒙台梭利国际早教4节 早教体验课',
        'img': 'https://i.loli.net/2017/08/21/599a521472424.jpg',
        'desc': '周三-周日，下午课程，六门课可选',
        'price': '99.00',
        'discountPrice': '72：00',
        'discount': '促销'
      }
    }
  },

  methods: {
    created () {
      console.log('start')
    }
  },

  mounted () {
    let options = this.$root.$mp.query
    console.log(options.id)
  }
}
</script>

<style scoped>
</style>
