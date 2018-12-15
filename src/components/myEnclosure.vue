<template>
    <div class="myEnclosure">
        <div class="myEnclosures"></div>
        <div class="header">
            <div class="imgBBs">
                <div class="imgBox">
                    <img class="tou" :src="msg.user.avatar" alt="">
                </div>
                <img class="xb" v-if="msg.user.gender === 2" src="@/assets/woman.png" alt="">
                <img class="xb" v-if="msg.user.gender === 1" src="@/assets/man.png" alt="">
            </div>
            <div class="nameAge">
                <span v-text="msg.user.name"></span>
                <span v-text="msg.user.age === '未填写' ? '' : ' ' + msg.user.age + '岁'"></span>
            </div>
            <div class="pos">
                <span v-text="msg.user.position"></span>
                <span> | </span>
                <span v-text="msg.user.work_years === '未填写' ? msg.user.work_years : msg.user.work_years + '年工作经验'"></span>
            </div>
        </div>
        <img class="imgss" v-if="fileTyp == 'PDF' || fileTyp == 'pdf'" src="@/assets/PDF.png" alt="">
        <img class="imgss" v-if="fileTyp == 'PPT' || fileTyp == 'ppt' || fileTyp == 'PPTX' || fileTyp == 'pptx'" src="@/assets/PPT.png" alt="">
        <img class="imgss" v-if="fileTyp == 'DOC' || fileTyp == 'DOCX' || fileTyp == 'doc' || fileTyp == 'docx'" src="@/assets/word.png" alt="">
        <div class="enName" v-text="msg.file_name">XXX-XXX-XXX.pdf</div>
        <div class="enSize">999KB</div>
        <div class="upDate" v-text="msg.add_time + '上传'"></div>
        <div class="btnBox">
            <button class="b1">删除附件</button>
            <button class="b2" @click="cc">重新上传</button>
        </div>
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'myEnclosure',
  data () {
    return {
      areaIner: '',
      msg: {
        user: {}
      },
      fileTyp: ''
    }
  },
  methods: {
    cc () {
      this.$router.push('upResume')
    }
  },
  mounted () {
    document.title = '我的微简历'
    this.api.MyResumeFile((res) => {
      let arr = res.data[0].resume_file.split('.')
      this.fileTyp = arr[arr.length - 1]
      this.msg = res.data[0]
    }, (err) => {
      this.$refs.eject.errmot(err)
    })
  }
}
</script>

<style scoped>
.myEnclosure{
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
}
.myEnclosures{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    background: rgba(240, 239, 245, 1);
    z-index: -1;
}
.header{
    width:375px;
    min-height:121px;
    background:#fff;
    padding-top:12px;
}
.imgBBs{
    width:60px;
    height:60px;
    position: relative;
    margin:0 auto;
}
.imgBox{
    width:60px;
    height:60px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
}
.imgBox>img{
    width:60px;
    align-self: center;
}
.xb{
    width:16px;
    height:16px;
    position: absolute;
    top:0px;
    right: 0px;
}
.nameAge, .pos{
    font-size: 14px;
    line-height: 23px;
}
.imgss{
    width:50px;
    height:50px;
    margin:40px auto 8px;
}
.enName{
    font-size: 14px;
}
.enSize{
    margin:20px auto 8px;
}
.enSize, .upDate{
    font-size: 12px;
    color:#ccc;
}
.btnBox{
    width:375px;
    height:45px;
    display: flex;
    position: fixed;
    bottom: 0px;
    left:calc(50% - 187.5px);
    justify-content: space-around;
    background:#fff;
}
.btnBox>button{
    align-self: center;
    width:165px;
    height:35px;
    border-radius: 30px;
    border:none;
    font-size: 14px
}
.btnBox>button::after{
    border:none;
}
.btnBox>.b1{
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    background:#fff;
}
.btnBox>.b2{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
