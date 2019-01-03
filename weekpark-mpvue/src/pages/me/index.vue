<template>
  <div class="container">
    <!-- <div
      class="userinfo"
      @click='login'
    > -->
    <button
      open-type="getUserInfo"
      lang="zh_CN"
      @getuserinfo="login"
    >获取用户信息</button>

    <img
      :src="userinfo.avatarUrl"
      alt=""
    >
    <p>{{userinfo.nickName}}</p>
  </div>
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/utils/config'
import { showSuccess, showModal } from '@/utils/util'
export default {
  data () {
    return {
      userinfo: {
        avatarUrl: '../../../static/images/icon/unlogin.png',
        nickName: '点击登录'
      }
    }
  },
  methods: {
    login () {
      let user = wx.getStorageSync('userinfo')
      console.log('user', user)
      const self = this
      if (!user) {
        qcloud.setLoginUrl(config.loginUrl)
        console.log(config.loginUrl)
        qcloud.login({
          success: function (userinfo) {
            console.log('userinfo', userinfo)
            qcloud.request({
              url: config.userUrl,
              login: true,
              success (userRes) {
                showSuccess('登录成功')
                wx.setStorageSync('userinfo', userRes.data.data)
                self.userinfo = userRes.data.data
              },
              fail: err => {
                console.error(err)
                showModal('登录错误', err.message)
              }
            })
          },
          fail: err => {
            console.error(err)
            showModal('获取用户信息错误', err.message)
          }
        })
      }
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
    console.log('me')
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128px;
  height: 128px;
  margin: 20px;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
