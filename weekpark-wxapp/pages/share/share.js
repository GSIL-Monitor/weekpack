// pages/share/share.js
Page({

 data: {
  // 背景图
  bgImg: "https://s2.ax1x.com/2019/01/06/FHhgSK.jpg",
  dataImg: "https://s1.ax1x.com/2018/12/18/F0zbOf.jpg", //内容缩略图
  ewrImg: "https://s2.ax1x.com/2019/01/06/FHhoFI.jpg", //小程序二维码图片
  systemInfo: {}, //系统类型
  canvasWidth: 0, //canvas的宽
  canvasHeight: 0 //canvas的高
 },

 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function(options) {
  console.log('onLoad')
  this.setSystemInfo()
 },

 setSystemInfo: function() {
  const that = this;
  wx.getSystemInfo({
   success: function(res) {
    console.log('screenWidth', res.screenWidth); //手机屏幕宽度
    console.log('screenHeight', res.screenHeight); //手机屏幕高度
    that.setData({
     systemInfo: {
      windowWidth: res.screenWidth,
      screenHeight: res.screenHeight
     }
    })
   }
  })
 },

 downloadImages: function() {
  debugger
  let that = this;
  wx.downloadFile({ //背景图
   url: that.data.bgImg,
   success: function(res) {
    wx.downloadFile({ //内容缩略图
     url: that.data.dataImg,
     success: function(res1) {
      wx.downloadFile({
       url: that.data.ewrImg,
       success: function(res2) { //  小程序二维码图
        debugger
        that.convas(res.tempFilePath, res1.tempFilePath, res2.tempFilePath);
       },
       fail: function() {}
      });
     }
    });
   }
  })
 },

 share: function() {
  console.log('share');
  this.downloadImages();
 },

 drawImage() {
  //绘制canvas图片
  var that = this
  const ctx = wx.createCanvasContext('myCanvas')
  var bgPath = '../../images/img/banner.png'
  var portraitPath = '../../images/img/avator.jpg'
  var hostNickname = app.globalData.userInfo.nickName

  var qrPath = '../../images/img/me.jpg'
  var windowWidth = that.systemInfo.windowWidth
  that.setData({
   scale: 1.6
  })
  //绘制背景图片
  ctx.drawImage(bgPath, 0, 0, windowWidth, that.data.scale * windowWidth)

  //绘制头像
  ctx.save()
  ctx.beginPath()
  ctx.arc(windowWidth / 2, 0.32 * windowWidth, 0.15 * windowWidth, 0, 2 * Math.PI)
  ctx.clip()
  ctx.drawImage(portraitPath, 0.7 * windowWidth / 2, 0.17 * windowWidth, 0.3 * windowWidth, 0.3 * windowWidth)
  ctx.restore()
  //绘制第一段文本
  ctx.setFillStyle('#ffffff')
  ctx.setFontSize(0.037 * windowWidth)
  ctx.setTextAlign('center')
  ctx.fillText(hostNickname + ' 正在参加疯狂红包活动', windowWidth / 2, 0.52 * windowWidth)
  //绘制第二段文本
  ctx.setFillStyle('#ffffff')
  ctx.setFontSize(0.037 * windowWidth)
  ctx.setTextAlign('center')
  ctx.fillText('邀请你一起来领券抢红包啦~', windowWidth / 2, 0.57 * windowWidth)
  //绘制二维码
  ctx.drawImage(qrPath, 0.64 * windowWidth / 2, 0.75 * windowWidth, 0.36 * windowWidth, 0.36 * windowWidth)
  //绘制第三段文本
  ctx.setFillStyle('#ffffff')
  ctx.setFontSize(0.037 * windowWidth)
  ctx.setTextAlign('center')
  ctx.fillText('长按二维码领红包', windowWidth / 2, 1.36 * windowWidth)
  ctx.draw();
 },

})