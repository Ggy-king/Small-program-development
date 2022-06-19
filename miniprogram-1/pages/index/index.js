// index.js
// 获取应用实例
// js一般承担逻辑功能--小程序
// json一般是配置文件 配置信息
// wxml类似html文件 展示
// wxss类似css文件 展示
const app = getApp()

Page({
  data: {
    name:'dell',
    users:[{personal:'dell'},{personal:'lee'}],
    content:'this is content'
  },
  changeName(){
    this.setData({
      name:'lee'
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    console.log(wx),
    wx.showModal({
      cancelColor: 'black',
    })
  }
 
  
})
