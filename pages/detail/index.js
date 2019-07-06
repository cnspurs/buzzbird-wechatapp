Page({
    data: {},

    onLoad(option) {
        this.id = option.id
        this.fetchDetail()
    },

    onShareAppMessage() {},

    fetchDetail() {
        wx.request({
            url: 'https://api.spursnews.net/api/v1/feeds/' + this.id,
            success: (res) => {
                let detailData = res.data.data
                this.setData(detailData)
            }
        })
    }
})
