<template>
    <div class="myResume">
        <div class="myResumes"></div>
        <div class="header">
            <div class="imgBBs">
                <div class="imgBox">
                    <img class="tou" :src="msg.user.avatar || ''" alt="">
                </div>
                <img class="xb" v-if="msg.user.gender === 1" src="@/assets/woman.png" alt="">
                <img class="xb" v-else src="@/assets/man.png" alt="">
            </div>
            <div class="nameAge">
                <span v-text="msg.user.name"></span>
                <span v-text="msg.user.age > 0 ? msg.user.age + '岁' : ''"></span>
            </div>
            <div class="pos">
                <span v-text="msg.position"></span>
                <span>|</span>
                <span v-text="msg.user.work_years !== '未填写' ? msg.user.work_years + '年工作经验' : '未填写'"></span>
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">我的优势</span>
            </div>
            <div class="contCont">
                <div class="inner color101010" v-text="msg.advantage"></div>
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">工作经历</span>
            </div>
            <div class="contCont">
                <div class="forsss" v-for="(item, index) in msg.work_history" :key="index">
                    <div class="comInfo">
                        <span class="comName" v-text="item.comName">此处显示公司名称</span>
                        <span class="comDate color888" v-text="item.riseDate + ' 至 ' + item.stopDate">此处显示起止时间</span>
                    </div>
                    <div class="comPosition color888" v-text="item.positionName">此处显示职位名称</div>
                    <div class="inner color101010" v-text="item.yous"></div>
                </div>
            </div>
            <div class="jingli colorff9800" v-if="gzjl.length > 1" @click="zk">
                <span>展开全部工作经历</span>
                <img src="@/assets/bom1s.png" alt="">
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">教育经历</span>
            </div>
            <div class="contCont">
                <div class="forsss" v-for="(item, index) in msg.edu_history" :key="index">
                    <div class="comInfo">
                        <span class="comNames" v-text="item.hisName"></span>
                        <span class="comDate" v-text="item.riseDate + ' 至 ' + item.stopDate"></span>
                    </div>
                    <div class="comPosition" v-text="item.hisXl + ' · ' + item.hisz">本科 · 电子信息工程</div>
                </div>
            </div>
        </div>
        <div class="conts" v-if="msg.attachment.length > 0">
            <div class="CoTitle">
                <span class="tiLef">附件</span>
            </div>
            <div class="contCont">
                <img v-for="(item, index) in msg.attachment" :key="index" :src="item" alt="">
            </div>
        </div>
        <div style="height:80px;"></div>
        <div class="btnBox">
            <button @click="path('edit')">编辑简历</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myResume',
  data () {
    return {
      areaIner: '',
      msg: {
        user: {},
        attachment: []
      },
      gzjl: []
    }
  },
  methods: {
    zk () {
      this.msg.work_history = JSON.parse(JSON.stringify(this.gzjl))
    },
    path (typ) {
      switch (typ) {
        case 'edit':
          this.$router.push({name: 'newResume', query: {typ: 'edit'}})
          break
      }
    }
  },
  mounted () {
    document.title = '我的微简历'
    this.api.MyResume((res) => {
      let arr = []
      res.data.attachment = JSON.parse(res.data.attachment)
      res.data.edu_history = JSON.parse(res.data.edu_history)
      res.data.work_history = JSON.parse(res.data.work_history)
      this.gzjl = JSON.parse(JSON.stringify(res.data.work_history))
      arr.push(res.data.work_history[0])
      res.data.work_history = arr
      this.msg = res.data
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.myResume{
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
    margin:0 auto;
}
.myResumes{
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
.nameAge{
    margin:6px 0 0;
}
.conts{
    width:375px;
    background:#fff;
    margin-top:10px;
}
.CoTitle{
    font-size: 14px;
    line-height: 23px;
    font-weight: 600;
    padding:14px 15px;
    text-align: left;
    border-bottom:1px solid rgba(241, 241, 241, 1);
}
.contCont{
    font-size: 14px;
    padding:10px 15px;
    text-align: left;
}
.comInfo, .comPosition{
    line-height: 25px
}
.comDate{
    float: right;
}
.inner{
    padding-bottom: 10px
}
.forsss{
    padding:10px 0 0;
    border-bottom: 1px solid rgba(241, 241, 241, 1);
}
.jingli{
    height:33px;
    line-height: 23px
}
.jingli>img{
    width:16px;
    height:16px;
    vertical-align: text-top;
}
.comNames{
    font-weight: 600
}
.contCont>img{
    width:100%;
    margin-bottom: 10px;
}
.btnBox{
    width:375px;
    height:45px;
    position: fixed;
    bottom: 0px;
    left: calc(50% - 187.5px);
    background: #fff;
    display: flex;
}
.btnBox>button{
    align-self: center;
    margin:0 auto;
    width:200px;
    height:35px;
    font-size: 14px;
    color:#fff;
    background:rgba(255, 152, 0, 1);
    border-radius: 20px;
    border:none;
}
.btnBox>button::after{
    border:none;
}
</style>
