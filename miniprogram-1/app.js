// app.js
// app开头外面的这些文件是全局文件 公共文件
// 掌管通信 公共样式
// 优先级是高于页面级别的 这里指的是读取顺序 先读全局（覆盖依旧）
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
