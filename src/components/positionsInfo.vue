<template>
    <div class="positionsInfo">
        <div>
            <div class="header">
                <div class="posName">
                    <span class="name" v-text="msg.name">职位名称</span>
                    <span class="time" v-text="'剩余时间 ' + msg.less_date + ' 天'"></span>
                </div>
                <div class="ind" v-text="msg.area + ' | ' + msg.industry">北京 | 行业</div>
                <div class="sala">
                    <span class="le">薪资</span>
                    <span class="ri" v-text="'平均 ' + msg.mean_salary + ' 最高 ' + msg.max_salary"> 平均 4k 最高 10k</span>
                </div>
                <div class="nickBox" @click="path">
                    <div class="imgBox">
                        <img :src="msg.company.logo" alt="">
                    </div>
                    <div class="nickIner">
                        <div class="nickName" v-text="msg.company.name">北京聚牛天下网络科技</div>
                        <div class=nickTag>
                            <!-- <div v-for="(item, index) in msg.company.point" :key="index" v-text="item">特点一</div> -->
                            <div v-text="msg.company.point">特点一</div>
                            <span v-text="msg.company.position_count + '个在招职位'"></span>
                        </div>
                    </div>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
            <div class="contBox">
                <div class="tit">
                    <span class="t">职位待遇历史情况</span>
                    <span class="time" v-text="'于 ' + msg.salary_info.add_time + ' 更新'"></span>
                </div>
                <div class="contText">
                    <div>
                        <div class="contLe">薪资</div>
                        <div class="contRig"><span v-text="'平均 ' + msg.salary_info.mean_salary"></span><span v-text="' 最高 ' + msg.salary_info.max_salary"></span></div>
                    </div>
                    <div>
                        <div class="contLe">福利</div>
                        <div class="contRig" v-text="msg.salary_info.welfare"></div>
                    </div>
                    <div>
                        <div class="contLe">培训</div>
                        <div class="contRig" v-text="msg.salary_info.train"></div>
                    </div>
                    <div>
                        <div class="contLe">获客支持</div>
                        <div class="contRig" v-text="msg.salary_info.hkzc"></div>
                    </div>
                </div>
            </div>
            <div class="contBox">
                <div class="tit">
                    <span class="t">职位描述</span>
                </div>
                <div class="contTextHid" :class="hidT? 'hids': ''" v-text="msg.desc" ref="textHid"></div>
                <div class="hidTbtn" @click="clickHid" v-if="hidTbtn">...<span>显示全部</span></div>
            </div>
            <div class="contBox1">
                <div class="imgBox1">
                    <img src="@/assets/location.png" alt="">
                </div>
                <div class="addrs">
                    <div class="addrs1" v-text="msg.area">北京市朝阳区</div>
                    <div class="addrs2" v-text="msg.address">此处显示详细地址</div>
                </div>
            </div>
            <div class="jiez" ref="jiez"></div>
            <div class="footer">
                <div>
                    <img src="@/assets/start.png" alt="">
                    <p>收藏</p>
                </div>
                <div>
                    <img src="@/assets/share.png" alt="">
                    <p>分享</p>
                </div>
                <button @click="pushResume">投个简历</button>
            </div>
        </div>
        <Eject ref="eject" />
    </div>
</template>

<script>
export default {
  name: 'positionsInfo',
  data () {
    return {
      que: null,
      hidT: false,
      hidTbtn: false,
      msg: {
        company: {},
        salary_info: {}
      }
    }
  },
  methods: {
    textHid () {
      if (this.$refs.textHid.clientHeight > this.$refs.jiez.clientHeight) {
        this.hidT = true
        this.hidTbtn = true
      } else {
        this.hidT = false
      }
    },
    pushResume () {
      if (this.global.userStatus.is_user === 0) {
        this.$router.push('login')
        return
      }
      let obj = {}
      this.api.resumeCheck((res) => {
        if (res.status === 200) {
          if (res.data.resume_count === 0) {
            this.$refs.eject.dialog({
              title: '您还没有简历',
              content: '您可以选择创建微简历或上传简历,您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历您可以选择创建微简历或上传简历',
              btns: 2,
              no: '上传简历',
              yes: '创建微简历',
              success: () => {
                this.$router.push({name: 'newResume', query: {id: this.msg.id}})
              }
            })
          } else if (res.data.resume_count === 1) {
            obj = {
              resume_type: 0,
              position: this.msg.id
            }
            this.api.postMyApply(obj, (res) => {
              if (res.status === 201) {
                this.$router.push('signUpSuccess')
              }
            }, (err) => {
              this.$refs.eject.errmot(err)
            })
          } else if (res.data.resume_count === 2) {
            this.$refs.eject.dialog({
              title: '',
              content: '请选择您想要投递的简历',
              btns: 2,
              no: '简历附件',
              yes: '微简历',
              success: () => {
                obj = {
                  resume_type: 1,
                  position: this.msg.id
                }
                this.api.postMyApply(obj, (res) => {
                  if (res.status === 201) {
                    this.$router.push('signUpSuccess')
                  }
                }, (err) => {
                  this.$refs.eject.errmot(err)
                })
              },
              fail: () => {
                obj = {
                  resume_type: 2,
                  position: this.msg.id
                }
                this.api.postMyApply(obj, (res) => {
                  if (res.status === 201) {
                    this.$router.push('signUpSuccess')
                  }
                }, (err) => {
                  this.$refs.eject.errmot(err)
                })
              }
            })
          }
        }
      }, (err) => {
        this.$refs.eject.errmot(err)
      })
    },
    clickHid () {
      this.hidT = !this.hidT
    },
    path () {
      this.$router.push({name: 'comHome', query: {comId: this.msg.company.id}})
    },
    init () {
      this.que = this.$route.query
      this.api.positionInfo(this.que.posId, (res) => {
        this.msg = res.data
        this.textHid()
      }, (err) => {
        this.$refs.eject.errmot(err)
      })
    }
  },
  mounted () {
    document.title = '职位详情'
    this.init()
  }
}
</script>

<style scoped>
.positionsInfo{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width:375px;
    height: 100%;
    background:rgba(248, 248, 248, 1);
    text-align: left;
    overflow: auto;
}
.positionsInfo>div{
    width: 100%;
    height:100%;
    padding-bottom: 70px;
}
.header{
    padding:15px;
    background:#fff;
}
.header>.posName{
    height:18px;
    line-height: 18px;
}
.header>.posName>.name{
    font-size: 18px;
    color:#101010;
    line-height: 18px;
}
.header>.posName>.time{
    font-size: 12px;
    color:#ccc;
    vertical-align: top;
    line-height: 12px;
    float: right;
}
.header>.ind{
    color:#888;
    font-size: 12px;
    margin:8px 0 15px;
}
.header>.sala{
    font-size: 12px;
}
.header>.sala>.le{
    color: #101010;
}
.header>.sala>.ri{
    color:rgba(255, 152, 0, 1);
}
.nickBox{
    padding:10px 9px;
    border-radius: 5px;
    border:1px dashed rgba(255, 152, 0, 0.7);
    margin-top:15px;
    position: relative;
}
.nickBox>img{
    width:14px;
    height:14px;
    position: absolute;
    right:8px;
    top:calc(50% - 7px);
}
.imgBox{
    width:36px;
    height:36px;
    border-radius: 3px;
    display: flex;
    float: left;
}
.imgBox>img{
    width:36px;
    align-self: center;
}
.nickIner{
    padding: 0 25px 0 40px;
}
.nickIner>.nickName{
    font-size: 14px;
    color:#101010;
    line-height: 16px;
}
.nickIner>.nickTag{
    margin-top:8px;
}
.nickIner>.nickTag>div{
    display: inline-block;
    padding:2px 5px;
    background: rgba(255, 152, 0, 0.7);
    color:#fff;
    font-size: 10px;
    border-radius: 2px;
    margin-right:4px;
}
.nickIner>.nickTag>span{
    font-size: 12px;
    line-height: 14px;
    color:#ccc;
}
.footer{
    width:375px;
    display: flex;
    justify-content: space-around;
    height:48px;
    position: fixed;
    bottom: 0;
    left:calc(50% - 187.5px);
    background:#fff;
}
.footer>div{
    font-size: 10px;
    color:#101010;
    line-height: 10px;
    padding-top:9px;
}
.footer>div>img{
    width:20px;
    height:20px;
}
.footer>button{
    margin-top:6.5px;
    font-size: 14px;
    width:200px;
    height:35px;
    background:rgba(255, 152, 0, 1);
    border-radius: 20px;
    color:#fff;
    border: none;
}
.footer>button::after{
    border:none;
}
.contBox{
    padding:0 15px;
    background: #fff;
    margin-top: 10px;
}
.contBox>.tit{
    padding:15px 0;
}
.contBox>.tit>.t{
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
}
.contBox>.tit>.time{
    color:rgba(206, 206, 206, 1);
    font-size: 12px;
    line-height: 14px;
    float: right;
}
.contText{
    font-size: 14px;
    line-height: 20px;
    padding:15px 0;
}
.contText>div>.contLe{
    color:#101010;
    float: left;
    margin-right:8px;
}
.contText>div{
    border:1px solid rgba(0,0,0,0);
}
.contText>div>.contRig{
    color:#888;
    display: flow-root;
}
.contTextHid{
    font-size: 14px;
    line-height: 20px;
    color:#101010;
    overflow: hidden;
    padding-bottom: 15px;
}
.hids{
    max-height: 80px;
}
.jiez{
    height:80px;
    position: fixed;
    top:-80px;
}
.hidTbtn{
    font-size: 14px;
    margin-top:10px;
    padding-bottom: 15px;
}
.hidTbtn>span{
    color:rgba(255, 152, 0, 1);
}
.contBox1{
    padding:17px 15px;
    background:#fff;
    display: flex;
    margin-top:10px;
}
.imgBox1{
    align-self: center;
    width:26px;
    height: 26px;
    float: left;
    margin-right:4px;
}
.imgBox1>img{
    width:26px;
    height:26px;
}
.addrs{

}
.addrs1{
    font-size: 14px;
    color:#101010;
}
.addrs2{
    font-size: 14px;
    color:#888;
}
</style>
