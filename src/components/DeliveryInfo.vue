<template>
    <div class="DeliveryInfo">
        <div class="DeliveryInfos"></div>
        <div class="czheng">
            <div class="header">
            <div class="f1">
                <span class="posName" v-text="dataList.position_name">职位名称</span>
                <span class="status" v-if="dataList.status === 0">待反馈</span>
                <span class="status" v-if="dataList.status === 1">待面试</span>
                <span class="status" v-if="dataList.status === 2">已完成</span>
            </div>
            <div class="nickName color888" v-text="dataList.simple_name">阿里巴巴（中国）网络技术有限公司</div>
            <div class="f2">
                <span class="date colorcecece" v-text="dataList.add_time + '投递简历'"></span>
                <span class="salary">薪资<span class="colorff9800" v-text="' 平均 ' + dataList.mean_salary + ' 最高 ' + dataList.max_salary"></span></span>
            </div>
        </div>
        <div class="content">
            <div class="fors color101010" v-for="(item, index) in dataList.apply_details" :key="index">
                <div class="forTit">
                    <span v-text="item.type">初试信息</span>
                    <div class="imgBox">
                        <img src="@/assets/lower.png" alt="">
                    </div>
                </div>
                <div class="forCont">
                    <div v-if="item.type !== 4 || item.type !== 5">
                        <img src="@/assets/time_a.png" alt="">
                        <div v-text="item.time"></div>
                    </div>
                    <div v-if="item.type !== 4 || item.type !== 5">
                        <img src="@/assets/location.png" alt="">
                        <div v-text="item.address"></div>
                    </div>
                    <div>
                        <img src="@/assets/Communication.png" alt="">
                        <div v-text="item.desc"></div>
                    </div>
                </div>
            </div>
        </div>
        <recommend v-show="appStatus === 3" :ind="ind" ref="recommend"/>
        <div style="height:100px;"></div>
        <div class="btnBox" v-if="appStatus === 0 && appStatus === 3">
            <button class="bt2">职位信息</button>
        </div>
        <div class="btnBox" v-else>
            <button class="bt1">职位信息</button>
            <button class="bt2" href="tel:18210245752"><a>电话沟通</a></button>
        </div>
        </div>
    </div>
</template>

<script>
import recommend from '../components/Recommend'

export default {
  name: 'DeliveryInfo',
  data () {
    return {
      areaIner: '',
      que: {},
      dataList: {},
      appStatus: 0,
      ind: ''
    }
  },
  components: {
    recommend
  },
  methods: {
    init () {
      this.api.MyApplyInfo(this.que.id, (res) => {
        let arr = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
        let num = 1
        this.appStatus = res.data.apply_details.length !== 0 ? res.data.apply_details[res.data.apply_details.length - 1].type : 0
        res.data.apply_details.map((p1, p2) => {
          switch (p1.type) {
            case 1:
              p1.type = '初试信息'
              break
            case 2:
              num += ''
              let nar = num.split('')
              let str = ''
              if (parseInt(num) > 10) {
                if (parseInt(nar[0]) === 1) {
                  str = arr[9]
                  for (let i = 1; i < nar.length; i++) {
                    if (arr[nar[i] - 1]) {
                      str += arr[nar[i] - 1]
                    }
                  }
                } else {
                  str = arr[nar[0] - 1] + arr[9]
                  for (let i = 1; i < nar.length; i++) {
                    if (arr[nar[i] - 1]) {
                      str += arr[nar[i] - 1]
                    }
                  }
                }
                str = '（第' + str + '次）'
              } else {
                str = '（第' + arr[num - 1] + '次）'
              }
              p1.type = '复试信息' + str
              num = parseInt(num)
              num += 1
              break
            case 3:
              p1.type = '未入职原因'
              break
            case 4:
              p1.type = 'offer信息'
              break
            case 5:
              p1.type = 'offer信息'
              break
          }
        })
        this.dataList = res.data
        this.ind = this.dataList.position_name
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '投递详情'
    this.que = this.$route.query
    this.init()
  }
}
</script>

<style scoped>
.DeliveryInfo{
}
.DeliveryInfos{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    background:rgba(248, 248, 248, 1);
    z-index: -1;
}
.czheng{
    height:100px;
}
.header{
    padding:15px;
    background:#fff;
    text-align: left;
}
.f1, .nickName{
    font-size: 14px;
}
.gend{
    padding:0 15px;
    border:1px solid red;
    text-align: left;
    margin-top:20px;
}
.gend>.titl>.titLef{
    font-size: 14px;
    color:#101010;
    line-height: 20px;
}
.gend>.titl>.titRig{
    font-size: 12px;
    line-height: 20px;
    float: right;
    color:#101010;
}
.status{
    float: right;
}
.nickName{
    margin:4px 0 20px;
}
.salary{
    float: right;
}
.fors{
    background:#fff;
    width:345px;
    border-radius: 5px;
    margin:10px auto 0;
}
.forTit{
    font-size: 14px;
    text-indent: 600;
    padding:9px 10px;
    text-align: left;
    border-bottom: 1px solid rgba(241, 241, 241, 1);
    font-weight: 600;
}
.forTit>.imgBox{
    width:14px;
    height:14px;
    float: right;
}
.forTit>.imgBox>img{
    width:16px;
    height:16px;
}
.forCont{
    padding:10px;
    font-size: 14px;
}
.forCont>div{
    text-align: left;
    min-height:23px;
}
.forCont>div>img{
    width:14px;
    height:14px;
    float: left;
    margin-top:3px;
}
.forCont>div>div{
    padding-left:20px;
}
.btnBox{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0;
    left:calc(50% - 187.5px);
    background:#fff;
    display: flex;
    justify-content: space-around;
}
.btnBox>button{
    align-self: center;
    width:165px;
    height:35px;
    font-size: 14px;
    border-radius: 30px;
}
.btnBox>.bt1{
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    background:#fff;
}
.btnBox>.bt2{
    background:rgba(255, 152, 0, 1);
    border:none;
    color:#fff;
}
.btnBox>button::after{
    border:none;
}
</style>
