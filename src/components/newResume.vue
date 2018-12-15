<template>
    <div class="newResume">
        <div class="header">
            <div class="imgBox">
                <img :src="pushData.user.avatar" alt="">
            </div>
            <div class="userInfo">
                <div class="userName" v-text="pushData.user.name">李晓沫</div>
                <img v-if="pushData.user === 2" src="@/assets/woman.png" alt="">
                <img v-else src="@/assets/man.png" alt="">
                <div class="userRig">
                    <span>编辑个人信息</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="contList" @click="links(1)">
            <div class="uls">
                <div class="liLe">求职状态<span class="reds">*</span></div>
                <div class="liRig">
                    <span class="color888" v-text="job_status || '请选择'"></span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">求职期望<span class="reds">*</span></div>
            </div>
            <div class="inpList">
                <div class="inp">
                    <input class="color888" @blur="blurs($event)" type="text" v-model="pushData.position" placeholder="期望职位">
                </div>
                <div class="diCli color888" @click="links(2)" v-text="pushData.industry || '期望行业(最多三个)'">期望行业</div>
                <div class="diCli color888" @click="links(5)" v-text="pushData.city || '工作城市'"></div>
                <div class="diCli color888" @click="links(3)" v-text="pushData.salary || '薪资要求'"></div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">我的优势<span class="reds">*</span></div>
            </div>
            <div class="inpList">
                <div class="areas">
                    <textarea maxlength="200" v-model="pushData.advantage" placeholder="简要说明你的优势"></textarea>
                    <div class="jis color888" v-text="pushData.advantage.length + '/200'"></div>
                </div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">工作经历<span class="reds">*</span>(至少填写一份经历)</div>
            </div>
            <div class="inpList">
                <div class="forList" v-for="(item, index) in pushData.work_history" :key="index">
                    <div class="inp">
                        <input class="color888" @blur="blurs($event)" type="text" v-model="item.comName" placeholder="公司名称">
                    </div>
                    <div class="inp">
                        <input class="color888" @blur="blurs($event)" type="text" v-model="item.positionName" placeholder="职位名称">
                    </div>
                    <div class="inpDate">
                        <div class="dateTie color888">起止时间</div>
                        <div class="dataDiv">
                            <input class="color888" @blur="blurs($event)" v-model="item.riseDate" type="date">
                            <span class="color888">至</span>
                            <input class="color888" @blur="blurs($event)" v-model="item.stopDate" type="date">
                        </div>
                    </div>
                    <div class="areas">
                        <textarea maxlength="200" v-model="item.yous" placeholder="工作内容：取得的成绩、实现的突破、获得的表彰，至少填写30个字"></textarea>
                        <div class="jis color888">0/300</div>
                    </div>
                </div>
                <div class="bewBtn color888" @click="pushArr(1)">+ 新增工作经历</div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">教育经历<span class="reds">*</span>(至少填写一份经历)</div>
            </div>
            <div class="inpList">
                <div class="forList" v-for="(item, index) in pushData.edu_history" :key="index">
                    <div class="inp">
                        <input class="color888" @blur="blurs($event)" type="text" v-model="item.hisName" placeholder="学校名称">
                    </div>
                    <div class="diCli color888" @click="links(4, index)" v-text="item.hisXl || '学历'"></div>
                    <div class="inp">
                        <input class="color888" @blur="blurs($event)" type="text" v-model="item.hisz" placeholder="专业">
                    </div>
                    <div class="inpDate">
                        <div class="dateTie color888">起止时间</div>
                        <div class="dataDiv">
                            <input class="color888" @blur="blurs($event)" v-model="item.riseDate" type="date">
                            <span class="color888">至</span>
                            <input class="color888" @blur="blurs($event)" v-model="item.stopDate" type="date">
                        </div>
                    </div>
                    <div class="areas">
                        <textarea maxlength="200" v-model="item.jing" placeholder="在校经历"></textarea>
                        <div class="jis color888">0/300</div>
                    </div>
                </div>
                <div class="bewBtn color888" @click="pushArr(2)">+ 新增教育经历</div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">上传附件</div>
            </div>
            <div class="inpLists">
                <div class="jytit color888">上传荣誉证书、奖杯、学历等过往业绩证明材料</div>
                <div class="putImgBtnBox">
                    <div class="putImgBtn" v-for="(item, index) in pushData.attachment" :key="index">
                        <div>
                            <img class="imgs" :src="item">
                        </div>
                    </div>
                    <div class="putImgBtn">
                        <img src="@/assets/home_navImg.png">
                        <input type="file" @blur="blurs($event)" @change="imgPu($event)">
                    </div>
                </div>
            </div>
        </div>
        <div style="height:100px;"></div>
        <div class="footerBtn">
            <button @click="submit" v-text="que.typ === 'edit' ? '修改简历' : '创建简历'">创建简历</button>
        </div>
        <links ref="links"/>
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'newResume',
  data () {
    return {
      que: {},
      areaIner: '',
      job_status: '',
      jobArr: ['离职-随时到岗', '在职-暂不考虑', '在职-考虑机会', '在职-月内到岗'],
      pushData: {
        user: {
          avatar: '',
          gender: '',
          name: '',
          user: ''
        },
        job_status: '',
        position: '',
        industry: '',
        city: '',
        salary: '',
        advantage: '',
        work_history: [
          {
            comName: '',
            positionName: '',
            riseDate: '',
            stopDate: '',
            yous: ''
          }
        ],
        edu_history: [
          {
            hisName: '',
            hisXl: '',
            hisz: '',
            riseDate: '',
            stopDate: '',
            jing: ''
          }
        ],
        attachment: ''
      }
    }
  },
  methods: {
    init () {
      this.api.getResumeInit(this.que.id, (res) => {
        if (res.data.attachment === '') {
          res.data.attachment = []
        } else {
          res.data.attachment = JSON.parse(res.data.attachment)
        }
        if (res.data.work_history === '') {
          res.data.work_history = [
            {
              comName: '',
              positionName: '',
              riseDate: '',
              stopDate: '',
              yous: ''
            }
          ]
        } else {
          res.data.work_history = JSON.parse(res.data.work_history)
        }
        if (res.data.edu_history === '') {
          res.data.edu_history = [
            {
              hisName: '',
              hisXl: '',
              hisz: '',
              riseDate: '',
              stopDate: '',
              jing: ''
            }
          ]
        } else {
          res.data.edu_history = JSON.parse(res.data.edu_history)
        }
        this.job_status = this.jobArr[res.data.job_status]
        this.pushData = res.data
      }, (err) => {
        console.log(err)
      })
    },
    blurs (e) {
      document.documentElement.scrollTop = document.documentElement.scrollTop
      document.body.scrollTop = document.body.scrollTop
    },
    submit () {
      if (this.pushData.job_status === '' || this.pushData.job_status === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未选择求职状态',
          btns: 'n'
        })
        return
      }
      if (this.pushData.position === '' || this.pushData.position === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未选择期望职位',
          btns: 'n'
        })
        return
      }
      if (this.pushData.industry === '' || this.pushData.industry === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未填写期望行业',
          btns: 'n'
        })
        return
      }
      if (this.pushData.city === '' || this.pushData.city === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未选择工作城市',
          btns: 'n'
        })
        return
      }
      if (this.pushData.salary === '' || this.pushData.salary === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未选择薪资要求',
          btns: 'n'
        })
        return
      }
      if (this.pushData.advantage === '' || this.pushData.advantage === null) {
        this.$refs.eject.dialog({
          title: '提示',
          content: '未填写‘我的优势’',
          btns: 'n'
        })
        return
      }
      for (let i = 0; i < this.pushData.work_history.length; i++) {
        if (this.pushData.work_history[i].comName === '' || this.pushData.work_history[i].comName === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘工作经历’中的‘公司名称’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.work_history[i].positionName === '' || this.pushData.work_history[i].positionName === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘工作经历’中的‘职位名称’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.work_history[i].riseDate === '' || this.pushData.work_history[i].riseDate === null || this.pushData.work_history[i].stopDate === '' || this.pushData.work_history[i].stopDate === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘工作经历’中的‘起止时间’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.work_history[i].yous === '' || this.pushData.work_history[i].yous === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘工作经历’中的‘工作内容’',
            btns: 'n'
          })
          return
        }
      }
      for (let i = 0; i < this.pushData.edu_history.length; i++) {
        if (this.pushData.edu_history[i].hisName === '' || this.pushData.edu_history[i].hisName === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘教育经历’中的‘学校名称’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.edu_history[i].hisXl === '' || this.pushData.edu_history[i].hisXl === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未选择‘教育经历’中的‘学历’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.edu_history[i].hisz === '' || this.pushData.edu_history[i].hisz === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘教育经历’中的‘专业’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.edu_history[i].riseDate === '' || this.pushData.edu_history[i].riseDate === null || this.pushData.edu_history[i].stopDate === '' || this.pushData.edu_history[i].stopDate === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘教育经历’中的‘起止时间’',
            btns: 'n'
          })
          return
        }
        if (this.pushData.edu_history[i].jing === '' || this.pushData.edu_history[i].jing === null) {
          this.$refs.eject.dialog({
            title: '提示',
            content: '未填写‘教育经历’中的‘在校经历’',
            btns: 'n'
          })
          return
        }
      }
      let data = JSON.parse(JSON.stringify(this.pushData))
      data.edu_history = JSON.stringify(data.edu_history)
      data.work_history = JSON.stringify(data.work_history)
      data.attachment = JSON.stringify(data.attachment)
      data.user = JSON.stringify(data.user)
      if (this.que.typ === 'edit') {
        this.api.putResume(data, (res) => {
          if (res.status === 200) {
            this.$refs.eject.msg('修改成功')
            setTimeout(() => {
              this.$router.go(-1)
            }, 1500)
          }
        }, (err) => {
          this.$refs.eject.errmot(err)
        })
        return
      }
      this.api.postResume(data, (res) => {
        if (res.status === 201) {
          this.$router.go(-1)
        }
      }, (err) => {
        this.$refs.eject.errmot(err)
      })
    },
    imgPu (file) {
      let files = new FormData()
      files.append('file', file.target.files[0])
      files.append('type', 2)
      this.isImg = false
      this.api.uploadImg(files, (res) => {
        this.pushData.attachment.push(res.data.url)
      }, (err) => {
        console.log(err)
      })
    },
    pushArr (num) {
      let obj = {}
      switch (num) {
        case 1:
          obj = {
            comName: '',
            positionName: '',
            riseDate: '',
            stopDate: '',
            yous: ''
          }
          this.pushData.work_history.push(obj)
          break
        case 2:
          obj = {
            hisName: '',
            hisXl: '',
            hisz: '',
            riseDate: '',
            stopDate: '',
            jing: ''
          }
          this.pushData.edu_history.push(obj)
          break
      }
    },
    links (num, a) {
      switch (num) {
        case 1:
          this.$refs.links.glink({
            success: (res) => {
              this.job_status = res.name
              this.pushData.job_status = res.id
            },
            fail: (res) => {
              console.log(res)
            }
          })
          break
        case 2:
          this.$refs.links.tolink({
            type: 'hangye',
            ms: 3,
            success: (res) => {
              let arr = []
              res.map((p1) => {
                arr.push(p1.name)
              })
              this.pushData.industry = arr.join('、')
            },
            fail: (res) => {
              console.log(res)
            }
          })
          break
        case 3:
          this.$refs.links.xzlink({
            success: (res) => {
              this.pushData.salary = res.name
            },
            fail: (res) => {
              console.log(res)
            }
          })
          break
        case 4:
          this.$refs.links.xllink({
            success: (res) => {
              console.log(res)
              this.pushData.edu_history[a].hisXl = res.name
            },
            fail: (res) => {
              console.log(res)
            }
          })
          break
        case 5:
          this.$refs.links.tolink({
            type: 'cs',
            success: (res) => {
              this.pushData.city = res.join('、')
            },
            fail: (res) => {
              console.log(res)
            }
          })
          break
      }
    }
  },
  mounted () {
    document.title = '创建微简历'
    this.que = this.$route.query
    this.init()
  }
}
</script>

<style scoped>
.reds{
    color:red;
}
.newResume{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width: 375px;
    height:100%;
    background: rgba(248, 248, 248, 1);
    overflow: auto;
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
.uls{
    padding:10px 15px;
    background: #fff;
    margin-top:10px;
    height:24px;
}
.liLe{
    float: left;
    font-size: 14px;
    line-height: 24px
}
.liRig{
    float: right;
    display: flex;
}
.liRig>span{
    font-size: 14px;
    line-height: 24px;

}
.liRig>img{
    align-self: center;
    width:14px;
    height:14px;
}
.inpList{
    background:#fff;
    padding-bottom: 7px;
}
.inpLists{
    background:#fff;
    padding-bottom: 7px;
    padding-left:15px;
}
.inp{
    width:345px;
    min-height:45px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    margin:0 auto 10px;
    display: flex;
}
.inp>input{
    align-self: center;
    width:345px;
    height:30px;
    font-size: 14px;
    line-height: 30px;
    text-indent: 20px;
    border:none;
    background:rgba(0, 0, 0, 0);
}
.inpDate{
    width:345px;
    min-height:45px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    margin:0 auto 10px;
}
.inpDate>.dateTie{
    width:100%;
    font-size: 14px;
    height:45px;
    line-height: 45px;
    text-align: left;
    text-indent: 20px;
}
.inpDate>.dataDiv{
    width:100%;
    height:45px;
    display: flex;
    justify-content: space-around;
}
.inpDate>.dataDiv>input{
    align-self: center;
    height:30px;
    font-size: 14px;
    text-align: right;
    background: rgba(0, 0, 0, 0);
    border:none;
    width: 40%;
}
.inpDate>.dataDiv>input::after{
    border:none;
}
.inpDate>.dataDiv>span{
    align-self: center;
}
.forList{
    padding-bottom: 10px;
    margin-bottom: 7px;
    border-bottom: 1px solid rgba(241, 241, 241, 1);
}
.diCli{
    width:305px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    margin:0 auto 10px;
    font-size: 14px;
    text-align: left;
    padding:15.5px 20px;
}
.areas{
    width:345px;
    height:114px;
    background:rgba(241, 241, 241, 1);
    border-radius: 5px;
    margin:0 auto;
    position: relative;
}
.areas>textarea{
    width:calc(100% - 30px);
    height:calc(100% - 30px);
    border:none;
    background:rgba(0, 0, 0, 0);
    border-radius: 5px;
    font-size: 14px;
    padding:15px;
}
.areas>textarea{
    border:none;
}
.areas>.jis{
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    right:10px;
    line-height: 23px;
}
.color888{
    color:#888;
}
.bewBtn{
    width:128px;
    height:30px;
    border:1px solid rgba(206, 206, 206, 1);
    border-radius: 3px;
    line-height: 30px;
    margin:0 auto;
}
.jytit{
    font-size: 14px;
    text-align: left;
}
.putImgBtnBox{
    width:calc(100% - 15px);
    padding-right:15px;
    text-align: left;
}
.putImgBtn{
    width:68px;
    height: 68px;
    background:rgba(241, 241, 241, 1);
    margin:10px 5px 0;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    position: relative;
    overflow: hidden;
}
.putImgBtn>img{
    width:24px;
    height:24px;
    margin:22px auto 0;
}
.putImgBtn>div{
    width:100%;
    height:100%;
    display: flex;
}
.putImgBtn>div>.imgs{
    width:100%;
    height:auto;
    margin:0;
    align-self: center;
}
.putImgBtn>input{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 0;
}
.footerBtn{
    position: fixed;
    width:375px;
    height:48px;
    background:#fff;
    display: flex;
    bottom: 0;
    left:0;
}
.footerBtn>button{
    align-self: center;
    width:200px;
    height:35px;
    font-size: 14px;
    margin:0 auto;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border-radius: 20px;
    border:none;
}
.footerBtn>button::after{
    border:none;
}
</style>
