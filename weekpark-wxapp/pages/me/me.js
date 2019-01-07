//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onShareAppMessage: function(options) {
    var that = this;　　 // 设置菜单中的转发按钮触发转发事件时的转发内容
    console.log(options);

    var shareObj = {
     title: "星期巴乐园", // 默认是小程序的名称(可以写slogan等)
     path: '/pages/index/index', // 默认是当前页面，必须是以‘/’开头的完整路径
　　 imgUrl: '../../images/img/banner.jpg', //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
　　　success: function(res) {　　　　　　 // 转发成功之后的回调
        if(res.errMsg == 'shareAppMessage:ok') {
          console.log('用户分享完了')
        }　　　　
      },
    　fail: function() {
        // 用户取消转发
        if (res.errMsg == 'shareAppMessage:fail cancel') {
          console.log('用户取消了分享')
        } 
        else if (res.errMsg == 'shareAppMessage:fail') {　　　　　　　　 
          console.log('转发报错')
        }　　　　
      },
    }
    
    debugger
    // 来自页面内的按钮的转发
    if (options.from == 'button') {　　
      var eData = options.target.dataset;　　　　
      console.log(eData); // shareBtn
      // 此处可以修改 shareObj 中的内容  + eData.name
    }　　 
    return shareObj;
  }
})