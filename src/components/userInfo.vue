<template>
    <div class="userInfo">
        <div class="conTent">
            <div class="imgBox">
                <img :src="postData.avatar" alt="">
                <div class="imgMotBox">
                    <img src="@/assets/camera.png" alt="">
                </div>
                <input type="file" @change="imgPu($event)">
            </div>
            <div class="listBox">
                <span class="leTit color101010">姓名<span class="reds">*</span></span>
                <input class="inp color888" type="text" v-model="postData.name" @blur="blurs($event)" placeholder="请输入真实姓名">
            </div>
            <div class="listBox">
                <span class="leTit color101010">性别<span class="reds">*</span></span>
                <div class="age color101010">
                    <div @click="gender(1)" :class="postData.gender === 1 ? 'gender' : ''">帅哥</div>
                    <div @click="gender(2)" :class="postData.gender === 2 ? 'gender' : ''">美女</div>
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">电话<span class="reds">*</span></span>
                <input class="inp color888" type="number" disabled v-model="postData.mobile" @blur="blurs($event)" pattern="[0-9]*" placeholder="请输入电话">
            </div>
            <div class="listBox">
                <span class="leTit color101010">参加工作时间<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="date" v-model="postData.workDay" @blur="blurs($event)">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">出生年月<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="date" v-model="postData.birthday" @blur="blurs($event)">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">所在地<span class="reds">*</span></span>
                <div class="clickBox color888" @click="links(1)" v-text="postData.area || '请选择地区'"></div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">详细地址</span>
                <div class="areaBox">
                    <textarea class="color888" v-model="postData.address" @blur="blurs($event)" placeholder="请输入详细地址"></textarea>
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">邮件<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="text" v-model="postData.email" @blur="blurs($event)" placeholder="请输入邮箱">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">微信号<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="text" v-model="postData.wx_no" @blur="blurs($event)" placeholder="请输入微信号">
                </div>
            </div>
        </div>
        <div style="height:100px;"></div>
        <div class="btnBox">
            <button @click="subMit">保存</button>
        </div>
        <links ref="links"/>
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      areaIner: '',
      postData: {}
    }
  },
  methods: {
    imgPu (file) {
      let files = new FormData()
      files.append('file', file.target.files[0])
      files.append('type', 2)
      this.isImg = false
      this.api.uploadImg(files, (res) => {
        this.postData.avatar = res.data.url
      }, (err) => {
        console.log(err)
      })
    },
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    gender (num) {
      this.postData.gender = num
    },
    subMit () {
      if (this.postData.name === '' || this.postData.name === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请输入姓名',
          btns: 'n'
        })
        return
      }
      if (this.postData.gender !== 1 && this.postData.gender === 2) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请选择性别',
          btns: 'n'
        })
        return
      }
      if (this.postData.mobile === '' || this.postData.mobile === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请输入手机号',
          btns: 'n'
        })
        return
      }
      if (this.postData.workDay === '' || this.postData.workDay === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请选择参加工作时间',
          btns: 'n'
        })
        return
      }
      if (this.postData.birthday === '' || this.postData.birthday === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请选择出生年月日',
          btns: 'n'
        })
        return
      }
      if (this.postData.area === '' || this.postData.area === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请选择所在地',
          btns: 'n'
        })
        return
      }
      if (this.postData.email === '' || this.postData.email === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请输入邮箱',
          btns: 'n'
        })
        return
      }
      if (this.postData.wx_no === '' || this.postData.wx_no === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '请输入微信号',
          btns: 'n'
        })
        return
      }
      this.api.putUserInfo(this.postData, (res) => {
        if (res.status === 200) {
          this.$router.go(-1)
        }
      }, (err) => {
        this.$refs.eject.errmot(err)
      })
    },
    links (num) {
      switch (num) {
        case 1:
          this.$refs.links.tolink({
            type: 'cs',
            success: (res) => {
              this.postData.area = res.join('、')
            }
          })
          break
      }
    }
  },
  mounted () {
    document.title = '个人信息'
    this.api.getuserInfo((res) => {
      if (res.data.name === '未填写') {
        res.data.name = ''
      }
      this.postData = res.data
    }, (err) => {
      this.$refs.eject.errmot(err)
    })
  }
}
</script>

<style scoped>
.userInfo{
    position: fixed;
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
    top:0;
    left:calc(50% - 187.5px);
    overflow: auto;
}
.reds{color:red;}
.color101010{color:#101010;}
.color888{color:#888;}
.conTent{
    width:325px;
    border-radius: 5px;
    min-height:10px;
    background:#fff;
    margin:10px auto 0;
    padding:0 10px;
}
.imgBox{
    width: 60px;
    height:60px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    position: relative;
    float: right;
    margin-top:10px;
}
.imgBox>input{
    position: absolute;
    width:100%;
    height:100%;
    top:0px;
    left:0px;
    opacity: 0;
}
.imgBox>img{
    width:60px;
    align-self: center;
}
.imgBox>.imgMotBox{
    height:60px;
    background: rgba(16, 16, 16, 0.5);
    width:60px;
    position: absolute;
    top:50%;
    left:0;
}
.imgBox>.imgMotBox>img{
    width:22px;
    height:22px;
    margin:3px auto 0;
}
.listBox{
    width:100%;
    min-height:45px;
    text-align: left;
}
.leTit{
    font-size: 14px;
    line-height: 45px;
}
.inp{
    width:218px;
    height:30px;
    margin-left: 3px;
    border: none;
    font-size: 14px;
}
.inp::after{
    border:none;
}
.age{
    width: 218px;
    height:30px;
    margin-left:3px;
    font-size: 14px;
    display: inline-block;
}
.age>div{
    padding:0 25px;
    height:30px;
    line-height: 30px;
    display: inline-block;
    border-radius: 3px;
    background:rgba(241, 241, 241, 1);
}
.dateBox{
    height:45px;
    width:100%;
}
.dateBox>input{
    width: 100%;
    height:30px;
    font-size: 14px;
    border:none;
    text-indent: 5px
}
.dateBox>input::after{
    border:none;
}
.clickBox{
    height:45px;
    width:100%;
    font-size: 14px;
    text-indent: 5px;
}
.areaBox{
    min-height:45px;
    width:100%;
    padding:15px 0;
}
.areaBox>textarea{
    width:315px;
    height:50px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    border: none;
    font-size: 14px;
    padding:5px;
}
.listBox>.age>.gender{
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.btnBox{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0px;
    left:calc(50% - 187.5px);
    background:#fff;
    display: flex;
}
.btnBox>button{
    align-self: center;
    margin:0 auto;
    width:200px;
    height:30px;
    border-radius: 20px;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    font-size: 14px;
    border:none;
}
.btnBox>button::after{
    border:none;
}
</style>
