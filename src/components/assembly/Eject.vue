<template>
    <div class="Eject" v-if="show">
        <div class="msg" :class="['msg', msgs.msgTr? 'show': 'hid']" v-show="msgs.msgTr" v-text="msgs.text"></div>
        <div class="dialogs" v-if="dialogs.dialogsTr">
            <div class="title" v-text="dialogs.title"></div>
            <img class="X" src="@/assets/x.png" alt="">
            <div class="content" v-text="dialogs.content"></div>
            <div class="btnsBox">
                <div class="btns2" v-if="dialogs.btns === 2">
                    <button class="btnn" v-text="dialogs.no"></button>
                    <button class="btny" v-text="dialogs.yes"></button>
                </div>
                <div class="btnsy" v-else-if="dialogs.btns === 'y'">
                    <button class="btny" v-text="dialogs.yes"></button>
                </div>
                <div class="btnsn" v-else-if="dialogs.btns === 'n'">
                    <button class="btnn" v-text="dialogs.no"></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Eject',
  data () {
    return {
      show: true,
      msgs: {
        text: null,
        msgTr: false
      },
      dialogs: {
        dialogsTr: false,
        title: null,
        content: null
      }
    }
  },
  methods: {
    msg (obj) {
      this.show = true
      this.msgs.text = obj
      this.msgs.msgTr = true
      setTimeout(() => {
        this.msgs.msgTr = false
        this.show = false
      }, 1500)
    },
    dialog (obj) {
      this.dialogs = obj
    }
  }
}
</script>

<style scoped>
.Eject{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    background:rgba(0,0,0,0);
}
.msg{
    padding:10px 15px;
    display: inline-block;
    border-radius: 3px;
    background:rgba(0,0,0,.8);
    /* transition: ease .5s; */
    color:#fff;
    font-size: 14px;
    margin-top:calc(70% - 22px);
}
.show{
    opacity: 1;
}
.hid{
    opacity: 0;
}
.dialogs{
    width: 250px;
    border-radius: 4px;
    background: #fff;
    margin:0 auto;
    padding:15px 0 0;
    position: relative;
}
.dialogs>.title{
    font-size: 18px;
    color:#101010;
    line-height: 18px;
    margin-bottom: 9px;
    padding:0 15px;
}
.dialogs>.content{
    font-size: 15px;
    color:#888;
    padding:0 15px;
}
.dialogs>.X{
    width:13px;
    height:13px;
    border-radius: 50%;
    position: absolute;
    right:15px;
    top:15px;
}
.dialogs>.btnsBox{
    border-top: 1px solid #888;/*no*/
    margin-top:26px;
}
.btnsBox>div>button{
    height:50px;
    font-size: 18px;
    background:#fff;
    border:none;
}
.btnsBox>div>button::after{
    border:none;
}
.btnsBox>div>.btnn{
    color:#101010;
}
.btnsBox>div>.btny{
    color:rgba(2, 187, 0, 1);
}
.btnsBox>.btns2{
    display: flex;
    justify-content: space-around;
}
.btnsBox>.btns2>button{
    width:50%;
}
.btnsBox>.btns2>.btnn{
    border-right:1px solid #888;/*no*/
}
</style>
