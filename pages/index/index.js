Page({
  data: {
    imgUrls: [
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',

      'https://p3.pstatp.com/large/39f600038907bf3b9c96',

      'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      
      'https://p3.pstatp.com/large/43700001e49d85d3ab52',
   
      'https://p3.pstatp.com/large/39f600038907bf3b9c96',

      'https://p3.pstatp.com/large/31fa0003ed7228adf421'

    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    array:[{
      imgUrl:'https://p3.pstatp.com/large/39f600038907bf3b9c96',
      title_name:"圣龙苑",
      position:"龙圣苑 | 双穴 | 坐北朝南"
    },{
      imgUrl:'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      title_name:"福临",
      position:"福临 | 双穴 | 坐北朝南"
    }],
    recommend:[{
      imgUrl:'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      title_name:"2020年丧葬费的发放标准葬费的发放标准",
      position:"陵园坐东北朝西南怀抱牟山...",
      time:"1974-10-17"
    },{
      imgUrl:'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      title_name:"2020年丧葬费的发放标准葬费的发放标准",
      position:"陵园坐东北朝西南怀抱牟山",
      time:"1974-10-17"
    },{
      imgUrl:'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      title_name:"2020年丧葬费的发放标准葬费的发放标准",
      position:"陵园坐东北朝西南怀抱牟山",
      time:"1974-10-17"
    },{
      imgUrl:'https://p3.pstatp.com/large/31fa0003ed7228adf421',
      title_name:"2020年丧葬费的发放标准葬费的发放标准",
      position:"陵园坐东北朝西南怀抱牟山",
      time:"1974-10-17"
    }]
  },
  onShow(){
    wx.setStorage({
      key: 'key',
      data: this.data.imgUrls,
    })
  },
  
})
