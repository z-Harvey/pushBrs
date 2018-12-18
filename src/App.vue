<template>
  <div id="app">
    <router-view/>
    <Eject ref="eject" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    init (data) {
      this.wx.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.data.appid, // 必填，公众号的唯一标识
        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.data.noncestr, // 必填，生成签名的随机串
        signature: data.data.signature, // 必填，签名
        jsApiList: [ 'chooseImage', 'updateAppMessageShareData', 'updateTimelineShareData', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'startRecord', 'stopRecord' ] // 必填，需要使用的JS接口列表
      })
      this.wx.ready((res) => {
        console.log('config成功:', res)
      })
      this.wx.error((err) => {
        console.log('config失败:', err)
      })
    }
  },
  mounted () {
    let r = decodeURI(window.location.search.substr(1))
    let arr = r.split('&')
    let urlCode = null
    for (let i = 0; i < arr.length; i++) {
      let arr1 = arr[i].split('=')
      if (arr1[0] === 'code') {
        urlCode = arr1[1]
      }
    }
    let posId = null
    for (let i = 0; i < arr.length; i++) {
      let arr1 = arr[i].split('=')
      if (arr1[0] === 'posId') {
        posId = arr1[1]
      }
    }
    let obj = {
      code: urlCode
    }
    this.api.login(obj, (res) => {
      console.log('登录接口:', res)
      this.global.userInfo['token'] = res.data.token
      this.global.userStatus['has_resume'] = res.data.has_resume
      this.global.userStatus['is_user'] = res.data.is_user
      if (posId) {
        this.$router.push({name: 'positionsInfo', query: {posId: posId}})
        return
      }
      this.api.JSSDK(this, window.location.href.split('#')[0], (res) => {
        console.log(res)
      }, (err) => {
        console.log(err)
      })
    }, (err) => {
      this.$refs.eject.errmot(err)
    })
  }
}
</script>

<style>
*{padding:0;margin:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.color888{color:#888;}
.colorcecece{color:#cecece;}
.colorff9800{color:rgba(255, 152, 0, 1);}
</style>
