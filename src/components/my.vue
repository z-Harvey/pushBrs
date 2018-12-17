<template>
    <div class="my">
        <div class="header">
            <img src="@/assets/login_bg.png" alt="">
            <div class="imgBox">
                <div>
                    <img :src="msg.avatar" alt="">
                </div>
            </div>
            <div class="userName" v-text="msg.name"></div>
        </div>
        <div class="navRow">
            <div class="naLi" @click="path(0)">
                <div class="navRImg">
                    <img src="@/assets/pick_a.png" alt="">
                    <div class="naTag" v-text="msg.apply_count">00</div>
                </div>
                <div>全部投递</div>
            </div>
            <div class="naLi" @click="path(1)">
                <div class="navRImg">
                    <img src="@/assets/feedback_a.png" alt="">
                    <div class="naTag" v-text="msg.dfk_count">00</div>
                </div>
                <div>待反馈</div>
            </div>
            <div class="naLi" @click="path(2)">
                <div class="navRImg">
                    <img src="@/assets/Interview_a.png" alt="">
                    <div class="naTag" v-text="msg.dms_count">00</div>
                </div>
                <div>待面试</div>
            </div>
            <div class="naLi" @click="path(3)">
                <div class="navRImg">
                    <img src="@/assets/yes_a.png" alt="">
                    <div class="naTag" v-text="msg.ywc_count">00</div>
                </div>
                <div>已完成</div>
            </div>
        </div>
        <div class="ulList" @click="path(4)">
            <div class="uLef color2c2c2c">
                <img src="@/assets/resume.png" alt="">
                <span class="color2c2c2c">我的微简历</span>
            </div>
            <div class="uRig">
                <span class="color888" v-text="msg.has_resume"></span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList" @click="path(5)">
            <div class="uLef color2c2c2c">
                <img src="@/assets/file.png" alt="">
                <span class="color2c2c2c">简历附件</span>
            </div>
            <div class="uRig">
                <span class="color888" v-text="msg.resume_file_status">已上传</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList" @click="path(6)">
            <div class="uLef color2c2c2c">
                <img src="@/assets/my_demand.png" alt="">
                <span class="color2c2c2c">求职意向</span>
            </div>
            <div class="uRig">
                <span class="color888" v-text="jobArr[msg.job_status - 1]">离职-随时到岗</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList" @click="path(7)">
            <div class="uLef color2c2c2c">
                <img src="@/assets/profile.png" alt="">
                <span class="color2c2c2c">个人信息</span>
            </div>
            <div class="uRig">
                <span class="color888" v-text="'完成度' + msg.user_completion + '%'">完成度80%</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList" @click="path(8)">
            <div class="uLef color2c2c2c">
                <img src="@/assets/shouc.png" alt="">
                <span class="color2c2c2c">职位收藏</span>
            </div>
            <div class="uRig">
                <span class="color888"></span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <links ref="links"/>
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      areaIner: '',
      jobArr: ['离职-随时到岗', '在职-暂不考虑', '在职-考虑机会', '在职-月内到岗'],
      msg: {
        apply_count: 0, // 投递数
        avatar: '', // 头像
        job_status: 0, // 工作状态
        name: '', // 用户名
        resume_completion: 0, // 简历完成度
        resume_file_status: '', // 简历是否上传
        user_completion: 0 // 用户完成度
      }
    }
  },
  methods: {
    init () {
      this.api.myInfo((res) => {
        this.msg = res.data
      }, (err) => {
        this.$refs.eject.errmot(err)
      })
    },
    path (num) {
      switch (num) {
        case 0:
          this.$router.push({name: 'myDelivery', query: {navTag: ''}})
          break
        case 1:
          this.$router.push({name: 'myDelivery', query: {navTag: 0}})
          break
        case 2:
          this.$router.push({name: 'myDelivery', query: {navTag: 1}})
          break
        case 3:
          this.$router.push({name: 'myDelivery', query: {navTag: 2}})
          break
        case 4:
          this.$router.push({name: 'myResume', query: {navTag: 2}})
          break
        case 5:
          if (this.msg.resume_file_status === '未上传') {
            this.$router.push({name: 'upResume'})
          } else {
            this.$router.push({name: 'myEnclosure', query: {navTag: 2}})
          }
          break
        case 6:
          this.api.getResumeInit('1', (res) => {
            this.$refs.links.glink({
              success: (refData) => {
                res.data.job_status = refData.id
                this.msg.job_status = refData.id
                if (this.msg.has_resume === '已创建') {
                  this.api.putResume(res.data, (resa) => {
                    if (resa.status === 200) {
                      this.$refs.eject.msg('修改成功')
                    }
                  }, (err) => {
                    this.$refs.eject.errmot(err)
                  })
                } else if (this.msg.has_resume === '未创建') {
                  this.api.postResume(res.data, (resa) => {
                    this.$refs.eject.msg('修改成功')
                  }, (err) => {
                    this.$refs.eject.errmot(err)
                  })
                }
              }
            })
          }, (err) => {
            console.log(err)
          })
          break
        case 7:
          this.$router.push('userInfo')
          break
        case 8:
          this.$router.push('positionCollection')
          break
      }
    }
  },
  mounted () {
    document.title = '我'
  }
}
</script>

<style scoped>
.my{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    overflow: auto;
    background: rgba(240, 239, 245, 1);
}
.userName{
    color:#fff;
    font-size: 14px;
    margin-top:9px;
}
.color888{
    color:#888;
}
.color2c2c2c{
    color:rgba(44, 44, 44, 1);
}
.header{
    width:375px;
    height:100px;
    position: relative;
}
.header>img{
    width:375px;
    position: absolute;
    bottom: 0px;
    left:0;
    z-index: -1;
}
.imgBox{
    width:55px;
    height:55px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background:rgba(255, 255, 255, 0.36);
    margin:10px auto 0;
}
.imgBox>div{
    position: absolute;
    width:52px;
    height:52px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    bottom: 1px;
    right:1px;
}
.imgBox>div>img{
    width:52px;
    align-self: center;
}
.navRow{
    width:345px;
    height:80px;
    border-radius: 5px;
    background: #fff;
    margin:10px auto 0;
    display: flex;
    justify-content: space-around;
}
.naLi{
    align-self: center;
    width:25%;
}
.navRImg{
    position: relative;
}
.navRImg>img{
    width:30px;
    height:30px;
}
.naTag{
    border-radius:10px;
    font-size: 10px;
    padding:1px 5px;
    color:rgba(229, 28, 35, 1);
    position: absolute;
    left:55%;
    top:0;
    background:#fff;
}
.ulList{
    background:#fff;
    width:345px;
    height:45px;
    border-radius: 5px;
    margin:10px auto 0;
}
.uLef{
    font-size: 14px;
    float: left;
    height:45px;
    display: flex;
    line-height: 45px;
    padding-left:10px;
}
.uLef>img{
    align-self: center;
    width:24px;
    height:24px;
    margin-right:4px;
}
.uRig{
    padding-right:10px;
    font-size: 14px;
    display: flex;
    line-height: 45px;
    float: right;
    min-height: 45px;
}
.uRig>img{
    width:14px;
    height:14px;
    align-self: center;
    margin-left:4px;
}
</style>
