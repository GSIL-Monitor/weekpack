<template>
  <div class="container">
    <div>
      <img src="../../../static/images/img/banner.jpg" style="width:375px; height:200px;" alt="">
    </div>

    <!-- 导航栏 -->
    <div class="div-nav">
        <div class="nav">
          <img class="img" src="../../../static/images/img/zaojiao.jpg" alt="">
          <div>专业早教</div>
        </div>

        <div class="nav">
          <img class="img" src="../../../static/images/img/zaojiao.jpg" alt="">
          <div>专业早教</div>
        </div>

        <div class="nav">
          <img class="img" src="../../../static/images/img/zaojiao.jpg" alt="">
          <div>专业早教</div>
        </div>

        <div class="nav">
          <img class="img" src="../../../static/images/img/zaojiao.jpg" alt="">
          <div>专业早教</div>
        </div>
    </div>

    <!-- 精品课程 -->
    <div>
      <div>精品课程</div>
      <div style="margin-top:10px; ">
        <div style="display: inline-block; width:50%;">
          <img style="width:140px; height:100px;" src="../../../static/images/img/01.png" alt="">
        </div>
        <div style="display: inline-block;  width:50%; ">
          <div>周三-周六下午课程</div>
          <div>4节99元</div>
          <div>启蒙+感统+音乐+数理(2.5岁+)</div>
          <div>99元立即预约</div>
        </div>
      </div>

      <div style="margin-top:10px; ">
        <div style="display: inline-block; width:50%;">
          <img style="width:140px; height:100px;" src="../../../static/images/img/01.png" alt="">
        </div>
        <div style="display: inline-block;  width:50%; ">
          <div>周三-周六下午课程</div>
          <div>4节99元</div>
          <div>启蒙+感统+音乐+数理(2.5岁+)</div>
          <div>99元立即预约</div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.div-nav {
  margin: 10px;
  text-align:center;
  width: 100%;
}

.nav {
   display: inline-block;
   margin: 18px;
   font-size: 14px;
}

.img {
  width: 50px;
  height: 50px;
}
</style>
