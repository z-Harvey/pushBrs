<template>
  <div id="JumpHref">
  </div>
</template>

<script>
export default {
  name: 'JumpHref',
  methods: {
  },
  mounted () {
    this.api.print({data: window.location.href}, (res) => {
    //   window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6469dc070a9d4d55&redirect_uri=http://tt.xiaoshouniu.cn/static/dist/index.html?posId=7&response_type=code&scope=snsapi_base&state=STATE'
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
