<template>
    <div class="myDelivery">
        <div class="navBox">
            <div class="navList color888">
                <div @click="init('')" :class="navList[0] ? 'colorff9800' : ''">
                    <p>全部</p>
                    <div v-show="navList[0]"></div>
                </div>
                <div @click="init(0)" :class="navList[1] ? 'colorff9800' : ''">
                    <p>待反馈</p>
                    <div v-show="navList[1]"></div>
                </div>
                <div @click="init(1)" :class="navList[2] ? 'colorff9800' : ''">
                    <p>待面试</p>
                    <div v-show="navList[2]"></div>
                </div>
                <div @click="init(2)" :class="navList[3] ? 'colorff9800' : ''">
                    <p>已完成</p>
                    <div v-show="navList[3]"></div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="conFor" v-for="(item, index) in dataList" :key="index">
                <div class="f1">
                    <span class="posName" v-text="item.position_name">职位名称</span>
                    <span class="status colorff9800" v-text="item.status === 0 ? '待反馈' : item.status === 1 ? '代面试' : '已完成'">待反馈</span>
                </div>
                <div class="comname color888" v-text="item.simple_name">公司简称</div>
                <div class="f2">
                    <span class="salary">薪资<span class="colorff9800" v-text="' 平均 ' + item.mean_salary + ' 最高 ' + item.max_salary"></span></span>
                    <span class="date colorcecece" v-text="item.add_time">yyyy-mm-dd hh:ss</span>
                </div>
            </div>
            <img class="blank" v-if="dataList.length === 0" src="@/assets/blank.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'myDelivery',
  data () {
    return {
      areaIner: '',
      dataList: [],
      navList: [true, false, false, false],
      que: 0
    }
  },
  methods: {
    init (data) {
      if (data === '') {
        this.navList = [true, false, false, false]
      } else {
        this.navList = [false, false, false, false]
        this.navList[data + 1] = true
      }
      let str = 'status=' + data
      this.api.MyApplyList(str, (res) => {
        console.log(res)
        this.dataList = res.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '我的投递'
    this.que = this.$route.query
    this.init(this.que.navTag)
  }
}
</script>

<style scoped>
.myDelivery{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    overflow: auto;
    background:rgba(248, 248, 248, 1);
}
.blank{
    margin-top:100px;
    width:150px;
    height:150px;
}
.color888{color:#888;}
.colorcecece{color:#cecece;}
.colorff9800{color:rgba(255, 152, 0, 1);}
.navBox{
    width:100%;
    height:31px;
    background:#fff;
    padding-top:11px;
    font-size: 15px;
    position: fixed;
    top:0;
    left:0;
}
.navList{
    width:259px;
    height:31px;
    margin:0 auto ;
    display: flex;
    justify-content: space-around;
}
.navList>div{
    display: inline-block
}
.navList>div>div{
    height:4px;
    width:100%;
    background:rgba(255, 152, 0, 1);
    margin-top:6px;
}
.content{
    padding-top:52px;
    height:100px;
}
.conFor{
    width:325px;
    min-height:69px;
    border-radius: 5px;
    background: #fff;
    margin:0 auto 10px;
    text-align: left;
    padding:10px;
}
.f1, .comname{
    font-size: 14px;
    line-height: 14px;
}
.comname{
    margin:8px 0 21px;
}
.status{
    float: right;
}
.f2{
    font-size: 12px
}
.date{
    float: right;
}
</style>
