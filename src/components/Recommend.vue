<template>
    <div class="positionCollection">
        <div class="title"><span class="titLef">推荐职位</span><span class="titRig" @click="ged">更多</span></div>
        <div class="contList">
            <div class="contFor" v-for="(item, index) in dataList" :key="index" @click="path(item)">
                <div class="imgBox">
                    <img :src="item.company.logo" alt="">
                </div>
                <div class="posInfo">
                    <div>
                        <div class="posName" v-text="item.name"></div>
                        <div class="wages">
                            <span>薪资</span>
                            <span class="wage" v-text="' 平均 ' + item.mean_salary + ' 最高 ' + item.max_salary"></span>
                        </div>
                    </div>
                    <div class="tagsBox">
                        <!-- <div>特点一特点一</div> -->
                        <div v-text="item.company.point"></div>
                    </div>
                    <div class="forFoot">
                        <span class="nicName" v-text="item.company.name"></span>
                        <span class="diqu" v-text="item.area + ' | ' + item.industry"></span>
                    </div>
                </div>
            </div>
        </div>
        <img class="blank" v-if="dataList.length === 0" src="@/assets/blank.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'positionCollection',
  data () {
    return {
      dataList: [{company: {}}],
      industry: ''
    }
  },
  methods: {
    ged () {
      this.global.navStatus = [true, false]
      this.$router.push('/')
    },
    path (item) {
      this.$router.push({name: 'positionsInfo', query: {posId: item.id}})
    },
    init () {
      let str = 'industry=' + this.industry + '&page_size=6'
      this.api.positionList(str, (res) => {
        this.dataList = res.data.results
        console.log(this.dataList)
        // this.dataList.map((p1, p2) => {
        //   p1.company.point = p1.company.point.split('、')
        // })
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '职位收藏'
    this.init()
  },
  props: ['ind']
}
</script>

<style scoped>
.positionCollection{
    padding-top:20px;
}
.contFor{
    padding:10px;
    width:335px;
    margin:0 auto 10px;
    background:#fff;
    border-radius: 5px;
    min-height:64px;
}
.title{
    padding:0 15px;
    height:20px;
    line-height: 20px;
    text-align: left;
    margin-bottom:10px;
}
.title>.titLef{
    font-size: 14px;
}
.title>.titRig{
    font-size: 12px;
    float: right;
}
.blank{
    margin-top:100px;
    width:150px;
    height:150px;
}
.imgBox{
    border-radius: 3px;
    width:64px;
    height: 64px;
    display: flex;
    overflow: hidden;
    float: left;
    margin-right:4px;
}
.imgBox>img{
    width:64px;
    align-self: center;
}
.posName{
    width:120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow:ellipsis;
    text-align: left;
    float: left;
    font-size: 14px;
    line-height: 14px;
}
.wages{
    text-align: right;
    font-size: 12px;
    line-height: 14px;
}
.wages>.wage{
    color:rgba(255, 152, 0, 1);
}
.tagsBox{
    display: block;
    text-align: left;
    margin-top:4px;
}
.tagsBox>div{
    padding:2px 4.5px;
    background:rgba(255, 152, 0, 0.7);
    font-size: 10px;
    border-radius: 2px;
    display: inline-block;
    color:#fff;
}
.forFoot{
    margin-top:10px;
    text-align: left;
}
.forFoot>.nicName{
    font-size: 12px;
    color:#888;
}
.forFoot>.diqu{
    float: right;
    font-size: 12px;
    color:#ccc;
}
</style>
