Page({
  data: {
      InfoList: [
    {
      id: 1,
      name: '孙兴慜 Ins',
      avatar: 'https://tva4.sinaimg.cn/crop.0.0.640.640.180/006mMONSjw8f07e97juukj30hs0hsgls.jpg',
      content: 'We win together we lose together that is a Team I’m so proud of being in this Team We had a...... ',
      time: '06-04 00:08',
      images: ['https://wx1.sinaimg.cn/mw690/006mMONSly1g3of2lks1lj30sg0jh76n.jpg']
    },
    {
      id: 2,
      name: '热刺 Ins',
      avatar: 'https://tva4.sinaimg.cn/crop.0.0.640.640.180/006mMONSjw8f07e97juukj30hs0hsgls.jpg',
      content: 'The journey was incredible, the memories will live with us forever. It wasn’t to be this time, but...... ',
      time: '06-02 05:53',
      images: ['https://wx1.sinaimg.cn/mw690/006mMONSly1g3mdt4jtvhj30u00nkwk7.jpg']
    },
    {
      id: 3,
      name: '孙兴慜 Ins',
      avatar: 'https://tva4.sinaimg.cn/crop.0.0.640.640.180/006mMONSjw8f07e97juukj30hs0hsgls.jpg',
      content: '测试中文展示测试中文展示测试中文展示测试中文展示测试中文展示 ',
      time: '06-04 00:08',
      images: []
    },
    {
      id: 4,
      name: '热刺 Ins',
      avatar: 'https://tva4.sinaimg.cn/crop.0.0.640.640.180/006mMONSjw8f07e97juukj30hs0hsgls.jpg',
      content: '',
      time: '06-02 05:53',
      images: ['https://wx1.sinaimg.cn/mw690/006mMONSly1g3mdt4jtvhj30u00nkwk7.jpg']
    }
  ]
  },

  onLoad(option) {
  },

  onShareAppMessage() {

  },

  handleGoDetail() {
      let params = {
        url: '../detail/index'
      }
      wx.navigateTo(params)
  }
})
