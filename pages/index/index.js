Page({
    data: {},

    onLoad(option) {
        this.fetchFeeds()
    },

    onShareAppMessage() {},

    fetchFeeds() {
        wx.showLoading()
        wx.request({
            url: 'https://api.spursnews.net/api/v1/feeds',
            success: (res) => {
                let feeds = res.data.data
                this.setData({ feeds })
                wx.hideLoading()
            },
            fail: (res) => {
                let title = JSON.stringify(res)
                wx.showToast({ title })
            }
        })
    },

    handleGoDetail(event) {
        let detail = event.currentTarget.dataset.detail
        let { id } = detail
        let data = encodeURIComponent(JSON.stringify(detail))
        let params = {
            url: `../detail/index?id=${id}&data=${data}`
        }
        wx.navigateTo(params)
    }
})
