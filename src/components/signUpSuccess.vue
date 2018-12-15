<template>
    <div class="signUpSuccess">
        <img class="yesImg" src="@/assets/yes.png" alt="">
        <div class="tit">投递成功</div>
        <div class="cont">成功投递简历~有任何反馈我们将会第一时间通知您~</div>
        <button class="yes" @click="path(1)">查看我的投递</button>
        <button class="no" @click="path(2)">返回职位列表</button>
    </div>
</template>

<script>
export default {
  name: 'signUpSuccess',
  data () {
    return {
    }
  },
  methods: {
    path (num) {
      switch (num) {
        case 1:
          this.$router.push({name: 'myDelivery', query: {navTag: ''}})
          break
        case 2:
          this.$router.go(-2)
          break
      }
    }
  },
  mounted () {
    document.title = '提示'
  }
}
</script>

<style scoped>
.signUpSuccess{
    position: fixed;
    width:375px;
    height:100%;
    background:#fff;
    top:0;
    left:calc(50% - 187.5px);
}
.yesImg{
    width:100px;
    height:100px;
    margin-top:14px;
}
.tit{
    font-size: 20px;
    color:#101010;
    margin:27px auto 7px;
    line-height: 20px
}
.cont{
    font-size: 14px;
    color:#888;
    margin-bottom: 50px;
}
button{
    width:347px;
    height:48px;
    font-size: 18px;
    border-radius: 4px;
    margin-bottom: 12px;
    background: #fff;
    border: none;
}
button::after{
    background: #fff;
    border:none;
}
.yes{
    background:rgba(53, 173, 26, 1);
    color: #fff;
}
.no{
    background:rgba(248, 248, 248, 1);
    border:1px solid rgba(223, 223, 223, 1);/*no*/
}
</style>
