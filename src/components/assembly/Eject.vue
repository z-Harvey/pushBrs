<template>
    <div class="Eject" v-if="show">
        <div class="msg" :class="['msg', msgs.msgTr? 'show': 'hid']" v-show="msgs.msgTr" v-text="msgs.text"></div>
        <div class="dialogs" v-if="dialogs.dialogsTr">
            <div class="title" v-text="dialogs.text.title"></div>
            <img class="X" src="@/assets/x.png" @click="close" alt="">
            <div class="content" v-text="dialogs.text.content"></div>
            <div class="btnsBox">
                <div class="btnsy" v-if="dialogs.text.btns === 'y'">
                    <button class="btny lv" v-text="dialogs.text.yes || '确定'"></button>
                </div>
                <div class="btnsn" v-else-if="dialogs.text.btns === 'n'">
                    <button class="btnn lv" @click="close" v-text="dialogs.text.no || '取消'"></button>
                </div>
                <div class="btns2" v-else>
                    <button class="btnn" v-text="dialogs.text.no || '取消'" @click="close"></button>
                    <button class="btny" v-text="dialogs.text.yes || '确定'"></button>
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
      show: false,
      msgs: {
        text: null,
        msgTr: false
      },
      dialogs: {
        dialogsTr: false,
        text: {
            title: null,
            content: null
        }
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
      this.dialogs.text = obj
      this.show = true
      this.dialogs.dialogsTr = true
    },
    errmot (err) {
      this.dialogs.text.title = this.global.HTTPStatusCode[err.status]
      let str = ''
      for (let i in err.data) {
        str += i +':'
        str += err.data[i] +'。'
      }
      this.dialogs.text.content = str
      this.dialogs.text.btns = 'n'
      this.show = true
      this.dialogs.dialogsTr = true
    },
    close () {
      this.msgs.msgTr = false
      this.dialogs.dialogsTr = false
      this.show = false
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
    display: flex;
}
.msg{
    padding:10px 15px;
    display: inline-block;
    border-radius: 3px;
    background:rgba(0,0,0,.8);
    /* transition: ease .5s; */
    color:#fff;
    font-size: 14px;
    align-self: center;
    margin:0 auto;
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
    align-self: center;
    box-shadow: 0 0 15px 0 rgba(0,0,0,.5)
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
    padding:5px 15px 0;
    width:220px;
    overflow: auto;
    word-wrap:break-word;
    max-height:150px;
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
    margin-top:15px;
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
.btnsBox>.btnsn>.lv{
    color:rgba(2, 187, 0, 1);
}
</style>
