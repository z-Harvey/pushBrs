<template>
    <div class="comHome">
        <div class="header">
            <div class="comImg">
                <img :src="msg.logo" alt="">
            </div>
            <div class="comInfo">
                <div class="comName" v-text="msg.name">北京聚牛天下网络科技有限公司</div>
                <div class="comTag">
                    <!-- <div v-for="(item, index) in msg.point" :key="index" v-text="item">特点一</div> -->
                    <div v-if="msg.point" v-text="msg.point">特点一</div>
                    <span v-text="msg.position_count + ' 个在招职位'"></span>
                </div>
                <div class="navTag">
                    <div @click="navClick(0)">
                        <p :class="navTag[0]? 'pss': ''">公司信息</p>
                        <div :class="navTag[0]? 'paa': ''"></div>
                    </div>
                    <div @click="navClick(1)">
                        <p :class="navTag[1]? 'pss': ''">实地验证</p>
                        <div :class="navTag[1]? 'paa': ''"></div>
                    </div>
                    <div @click="navClick(2)">
                        <p :class="navTag[2]? 'pss': ''" v-text="'在招职位(' + msg.position_count + ')'"></p>
                        <div :class="navTag[2]? 'paa': ''"></div>
                    </div>
                </div>
            </div>
        </div>
        <comInfo ref="comInfo" v-show="navTag[0]"/>
        <comVer ref="comVer" v-show="navTag[1]"/>
        <comPosition ref="comPosition" v-show="navTag[2]"/>
    </div>
</template>

<script>
import comInfo from '@/components/comInfo'
import comVer from '@/components/comVer'
import comPosition from '@/components/comPosition'

export default {
  name: 'comHome',
  components: {
    comInfo,
    comVer,
    comPosition
  },
  data () {
    return {
      navTag: [true, false, false],
      msg: {}
    }
  },
  methods: {
    navClick (num) {
      let arr = [false, false, false]
      arr[num] = true
      this.navTag = arr
      switch (num) {
        case 0:
          this.$refs.comInfo.init(this.msg.id)
          break
        case 1:
          this.$refs.comVer.init(this.msg.id)
          break
        case 2:
          this.$refs.comPosition.init(this.msg.id)
          break
      }
    },
    init () {
      this.api.companyHeader(this.que.comId, (res) => {
        console.log('公司首页:', res)
        this.msg = res.data
        // this.msg.point = res.data.point.split('、')
        this.navClick(0)
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.que = this.$route.query
    this.init()
  }
}
</script>

<style scoped>
.comHome{
    width: 375px;
    height:100%;
    background:rgba(248, 248, 248, 1);
    margin: 0 auto;
}
.header{
    position: fixed;
    top:0;
    width:375px;
    height:90px;
    padding:10px 15px 0;
    background:#fff;
    z-index: 10;
}
.comImg{
    width:36px;
    height:36px;
    border-radius: 3px;
    display: flex;
    float: left;
    margin-right:4px;
}
.comImg>img{
    width:36px;
    align-self: center;
}
.comInfo{
    text-align: left;
}
.comName{
    font-size: 14px;
    color:#101010;
    line-height: 14px;
}
.comTag{
    margin-top:8px;
}
.comTag>div{
    font-size: 10px;
    padding:2px 4px;
    background:rgba(255, 152, 0, 0.7);
    border-radius: 2px;
    display: inline-block;
    color:#fff;
    line-height: 10px;
}
.comTag>span{
    font-size: 12px;
    line-height: 12px;
}
.navTag{
    font-size: 14px;
    width:262px;
    margin: 25px auto 0;
}
.navTag>div{
    display: inline-block;
    width:30%;
    text-align: center;
    color:#888;
}
.navTag>div>div{
    width:30px;
    height:4px;
    background:rgba(255, 152, 0, 1);
    margin:4px auto;
    opacity: 0;
    transition: .2s ease
}
.navTag>div>.paa{
    opacity: 1;
}
.navTag>div>p{
    transition: .2s ease;
}
.navTag>div>.pss{
    color:rgba(255, 152, 0, 1);
}
</style>
