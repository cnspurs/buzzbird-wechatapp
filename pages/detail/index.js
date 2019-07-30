Page({
    data: {
        defaultAvatar: "https://tva4.sinaimg.cn/crop.0.0.640.640.180/006mMONSjw8f07e97juukj30hs0hsgls.jpg"
    },

    onLoad(option) {
        this.id = option.id
        if (option.data) {
            let data = JSON.parse(decodeURIComponent(option.data))
            this.setData(data)
        } else {
            this.setData({ isShare: true })
            this.fetchDetail()
        }
    },

    onShareAppMessage() {
        return {
            path: `/pages/detail/index?id=${this.id}`
        }
    },

    fetchDetail() {
        wx.showLoading()
        wx.request({
            url: 'https://api.spursnews.net/api/v1/feeds/' + this.id,
            success: (res) => {
                let detailData = res.data.data
                this.setData(detailData)
                wx.hideLoading()
            }
        })
    },

    handleGoHome() {
        let params = {
            url: '../index/index'
        }
        wx.redirectTo(params)
    },

    handlePreviewImage(event) {
        let { current } = event.currentTarget.dataset
        let urls = this.data.media.map((item) => item.url)
        wx.previewImage({
            current,
            urls
        })
    },

    handleGoWeibo() {
        let params = {
            appId: 'wx9074de28009e1111',
            path: 'pages/detail/detail/2694295913'
        }
        wx.navigateToMiniProgram(params)
    }
})
