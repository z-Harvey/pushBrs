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
        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
        signature: data.data.signature, // 必填，签名
        jsApiList: [ 'checkJsApi', 'startRecord', 'stopRecord','translateVoice','scanQRCode', 'openCard' ] // 必填，需要使用的JS接口列表
      })
      this.wx.ready((res) => {   //需在用户可能点击分享按钮前就先调用
        this.wx.updateAppMessageShareData({ 
          title: '标题', // 分享标题
          desc: '描述', // 分享描述
          link: 'tt.xiaoshouniu.cn', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: '图片', // 分享图标
          success: function () {
            // 设置成功
          }
        })
      })
      this.wx.error((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    // let r = decodeURI(window.location.search.substr(1))
    // let arr = r.split('&')
    // let urlCode = null
    // let pages = null
    // for (let i = 0; i < arr.length; i++) {
    //   let arr1 = arr[i].split('=')
    //   if (arr1[0] === 'code') {
    //     urlCode = arr1[1]
    //   }
    // }
    // for (let i = 0; i < arr.length; i++) {
    //   var arr1 = arr[i].split('=')
    //   if (arr1[0] === 'pages') {
    //     pages = arr1[1]
    //   }
    // }
    let obj = {
      code: '1'
    }
    this.api.login(obj, (res) => {
      console.log('登录接口:', res)
      this.global.userInfo['token'] = res.data.token
      this.global.userStatus['has_resume'] = res.data.has_resume
      this.global.userStatus['is_user'] = res.data.is_user
      if (res.data.has_resume === 0) {
        this.$refs.eject.dialog({
          title: '您还没有简历',
          content: '您可以选择创建微简历或上传简历',
          btns: 2,
          yes: '创建微简历',
          no: '上传简历',
          success: (res) => {
            this.$router.push({name: 'newResume', query: {id: 2}})
          },
          fail: (res) => {
            this.$router.push('upResume')
          }
        })
      }
      this.api.JSSDK((res) => {
        this.init(res)
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
