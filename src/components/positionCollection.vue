<template>
    <div class="positionCollection">
        <div class="contList">
            <div class="contFor" v-for="(item, index) in dataList" :key="index" @click="path(item)">
                <div class="imgBox">
                    <img :src="item.position.company.logo" alt="">
                </div>
                <div class="posInfo">
                    <div>
                        <div class="posName" v-text="item.position.name"></div>
                        <div class="wages">
                            <span>薪资</span>
                            <span class="wage" v-text="' 平均 ' + item.position.mean_salary + ' 最高 ' + item.position.max_salary"></span>
                        </div>
                    </div>
                    <div class="tagsBox">
                        <!-- <div>特点一特点一</div> -->
                        <div v-text="item.position.company.point"></div>
                    </div>
                    <div class="forFoot">
                        <span class="nicName" v-text="item.position.company.name"></span>
                        <span class="diqu" v-text="item.position.area + ' | ' + item.position.industry"></span>
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
      dataList: [
        {
          position: {
            company: {logo: ''}
          }
        }
      ]
    }
  },
  methods: {
    path (item) {
      this.$router.push({name: 'positionsInfo', query: {posId: item.position.id}})
    }
  },
  mounted () {
    document.title = '职位收藏'
    this.api.getFavPosition((res) => {
      console.log(res.data)
      this.dataList = res.data.results
    }, (err) => {
      console.log(err)
    })
  }
}
</script>

<style scoped>
.positionCollection{
    position: fixed;
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
    left:calc(50% - 187.5px);
    overflow: auto;
}
.contList{
    padding-top:10px;
}
.contFor{
    padding:10px;
    width:335px;
    margin:0 auto 10px;
    background:#fff;
    border-radius: 5px;
    min-height:64px;
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
