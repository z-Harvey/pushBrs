<template>
    <div class="upResume">
        <div class="header">
            <div class="imgBox">
                <img :src="msgUser.avatar" alt="">
            </div>
            <div class="userInfo">
                <div class="userName" v-text="msgUser.name">李晓沫</div>
                <img v-if="msgUser.gender === 2" src="@/assets/woman.png" alt="">
                <img v-if="msgUser.gender === 1" src="@/assets/man.png" alt="">
                <div class="userRig" @click="path(1)">
                    <span>编辑个人信息</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="upBtn">
            <img src="@/assets/top_.png" alt="">
            <span>上传数据文件</span>
            <input type="file" @change="fileCangs($event)">
        </div>
        <div class="ttt">
            <div v-text="uptext"></div>
            <div v-text="fileName"></div>
            <div v-text="fileSize"></div>
            <div class="ind">
                <div :style="'width:' + complete + '%;'"></div>
            </div>
            <!-- <span v-text="uptext"></span> -->
        </div>
        <div class="btns">
            <button class="qx">取消</button>
            <button class="qr" v-if="upz" @click="putFile">确认上传</button>
            <button class="qrs" v-else disabled>确认上传</button>
        </div>
        <Eject ref="eject" />
    </div>
</template>

<script>
import httpAjax from 'axios'

export default {
  name: 'upResume',
  data () {
    return {
      complete: 0,
      ent: null,
      msgUser: {},
      uptext: '目前支持上传：word、pdf、ppt格式的文件',
      upz: false,
      fileName: '',
      fileSize: ''
    }
  },
  methods: {
    fileCangs (e) {
      if (e.target.files[0].size === 0) {
        this.$refs.eject.msg('目标为空文件')
        return
      }
      let arr = ['pdf', 'doc', 'docx', 'ppt', 'pptx', 'PDF', 'DOC', 'DOCX', 'PPT', 'PPTX']
      let ty = e.target.files[0].name.split('.')[1]
      let keyi = false
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ty) {
          keyi = true
        }
      }
      if (!keyi) {
        this.$refs.eject.msg('请选择正确文件格式')
        return
      }
      this.ent = e
      this.uptext = '点击确认上传'
      this.upz = true
      let size = ''
      if (parseInt(e.target.files[0].size) > 1024) {
        size = (parseInt(e.target.files[0].size) / 1024).toFixed(2) + ' K'
      } else {
        size = e.target.files[0].size + ' B'
      }
      this.fileName = e.target.files[0].name
      this.fileSize = '大小：' + size
    },
    path (num) {
      this.$router.push('userInfo')
    },
    putFile () {
      let obj = new FormData()
      let e = this.ent
      let _this = this
      this.uptext = '上传中'
      this.complete = 0
      obj.append('resume_file', e.target.files[0])
      let config = {
        onUploadProgress: progressEvent => {
          var complete = (progressEvent.loaded / progressEvent.total * 100 | 0)
          _this.complete = complete
        }
      }
      httpAjax.post('/api/resume_file/', obj, config).then((res) => {
        this.uptext = '完成'
        if (res.status === 201) {
          this.$refs.eject.msg('简历上传成功 1S 后返回上一层')
          setTimeout(() => {
            this.$router.go(-1)
          }, 1000)
        }
      }, (err) => {
        this.$refs.eject.errmot(err.response)
      })
    }
  },
  mounted () {
    document.title = '上传简历'
    this.api.getuserInfo((res) => {
      console.log(res)
      this.msgUser = res.data
    }, (err) => {
      this.$refs.eject.errmot(err)
    })
  }
}
</script>

<style scoped>
.upResume{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width: 375px;
    height:100%;
    background: rgba(248, 248, 248, 1);
}
.header{
    width: calc(100% - 25px);
    height:50px;
    padding:12px 10px 10px 15px;
    background:#fff;
}
.imgBox{
    width:50px;
    height:50px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right:11px;
}
.imgBox>img{
    align-self: center;
    width:50px;
}
.userInfo{
    height:50px;
    width:100%;
    text-align: left;
}
.userInfo>.userName{
    font-size: 14px;
    color:#101010;
    line-height: 50px;
    display: inline-block;
}
.userInfo>img{
    width:12px;
    height:12px;
    vertical-align: text-top;
}
.userRig{
    font-size: 14px;
    color:#888;
    float: right;
    height:50px;
    line-height: 50px;
    display: flex;
}
.userRig>img{
    width:14px;
    height:14px;
    align-self: center;
}
.upBtn{
    width:125px;
    height:30px;
    border:1px solid rgba(255, 152, 0, 1);
    border-radius: 4px;
    font-size: 14px;
    color:rgba(255, 152, 0, 1);
    background:#fff;
    position: relative;
    line-height: 30px;
    text-align: center;
    margin:150px auto 0;
}
.upBtn>img{
    width:16px;
    height:16px;
    vertical-align: text-top;
}
.upBtn>input{
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    height:100%;
    opacity: 0;
}
.ttt{
    /* display: flex; */
    margin:20px auto 0;
    color:rgba(140, 140, 140, 1);
    line-height: 30px;
    font-size: 14px;
}
.ttt>div{
    width:100%;
}
.ttt>.ind{
    align-self: center;
    width:200px;
    height:6px;
    border-radius: 8px;
    border:1px solid rgba(255, 152, 0, 1);
    margin:4px auto;
}
.ttt>.ind>div{
    transition: .1s ease;
    height:6px;
    border-radius: 8px;
    background:rgba(255, 152, 0, 1);
}
/* .ttt>span{
    line-height: 14px;
    font-size: 14px;
    color:rgba(140, 140, 140, 1);
    margin-left:5px;
    vertical-align: top;
} */
.btns{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0px;
    left:0px;
    background:#fff;
    display: flex;
    justify-content: space-around;
}
.btns>button{
    align-self: center;
    width:165px;
    height:35px;
    font-size: 14px
}
.btns>button::after{
    border:none;
}
.btns>.qx{
    border:1px solid rgba(255, 152, 0, 1);/*no*/
    background:#fff;
    border-radius: 30px;
    color:rgba(255, 152, 0, 1);
}
.btns>.qr{
    background:rgba(255, 152, 0, 1);
    border-radius: 30px;
    border:none;
    color:#fff;
}
.btns>.qrs{
    background:rgba(241, 241, 241, 1);
    border-radius: 30px;
    border:none;
    color:#101010;
}
</style>
