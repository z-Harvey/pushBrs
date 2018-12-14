<template>
  <div id="app">
    <router-view/>
    <Eject ref="eject" />
  </div>
</template>

<script>
export default {
  name: 'App',
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
      // this.$router.push({name: 'newResume', query: {id: 2}})
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
