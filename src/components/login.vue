<template>
    <div class="login">
        <div class="imgbox">
            <img class="img1" src="@/assets/login_bg.png" alt="">
            <img class="img2" src="@/assets/logion_text.png" alt="">
        </div>
        <div>
            <input class="phoneNum" type="number" pattern="[0-9]*" maxlength="30" v-model.number="phone" placeholder="请输入手机号" @blur="zhengze">
            <div class="yanz">
                <input class="yzm" type="number" maxlength="6" pattern="[0-9]*" placeholder="请输入短信验证码" @blur="blurs">
                <button>获取验证码</button>
            </div>
        </div>
        <img class="loginBtn" src="@/assets/log_btn.png" alt="">
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ph_ts: false,
      phone: null
    }
  },
  methods: {
    zhengze () {
      let _this = this
      if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(_this.phone))) {
        this.$refs.eject.msg('电话号码错误')
      }
      this.blurs()
    },
    blurs () {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    }
  },
  mounted () {
    // let obj = {
    //   title: '您还没有简历',
    //   content: '您可以选择创建微简历或上传简历',
    //   btns: 2,
    //   yes: '创建微简历',
    //   no: '上传简历'
    // }
    // this.$refs.eject.dialog(obj)
  }
}
</script>

<style scoped>
.login{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    height:100%;
    width:375px;
    background:rgba(249, 249, 249, 1);
}
.imgbox{
    position: relative;
    width:375px;
    height:160px;
}
.imgbox>img{
    position: absolute;
}
.img1{
    width:375px;
    height:160px;
    left:0;
}
.img2{
    width:235px;
    height:83px;
    left:70px;
    top:39px;
}
input{
    width:315px;
    height:45px;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(170, 170, 170, 0.1);
    background:#fff;
    border:none;
    margin:0 auto;
    font-size: 14px;
    text-indent: 20px;
}
input::after{
    border:none;
    border-radius: 5px;
}
.phoneNum{
    margin-top:20px;
}
.yanz{
    display: inline-block;
    position: relative;
    width:315px;
    height:45px;
    margin-top:10px;
}
.yanz>.yam{
}
.yanz>button{
    font-size: 14px;
    position: absolute;
    right:0;
    top:0;
    width:100px;
    height:45px;
    background: #fff;
    border:none;
    border-radius: 0 5px 5px 0;
    color:rgba(255, 152, 0, 1);
}
.yanz>button::after{
    border:none;
}
.loginBtn{
    width:50px;
    height:50px;
    margin-top:125px;
}
</style>
