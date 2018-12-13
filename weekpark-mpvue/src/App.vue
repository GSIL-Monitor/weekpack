<script>
import qcloud from 'wafer2-client-sdk'
// import config from './utils/config'

const host = 'http://localhost:5757'

export default {
  async created () {
    // 调用API从本地缓存中获取数据
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // console.log('app created and cache logs by setStorageSync')

    // wx.request({
    //   url: 'http://localhost:5757/weapp/demo',
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })

    qcloud.setLoginUrl(host + '/weapp/login')

    // qcloud.login({
    //   success: function (userInfo) {
    //     console.log('登陆成功', userInfo)
    //   },
    //   fail: function (err) {
    //     console.log('登陆失败', err)
    //   }
    // })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
