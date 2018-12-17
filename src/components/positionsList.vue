<template>
    <div class="positionsList">
        <div class="positionsLists"></div>
        <div class="sort">
            <div @click="sorts(0)">
                <span>行业</span>
                <img v-if="sortD[0]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
            <div @click="sorts(1)">
                <span>城市</span>
                <img v-if="sortD[1]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
            <div @click="sorts(2)">
                <span>默认排序</span>
                <img v-if="sortD[2]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
        </div>
        <img class="blank" v-if="dataList.length === 0" src="@/assets/blank.png" alt="">
        <div class="contList">
            <div class="contFor" v-for="(item, index) in dataList" :key="index" @click="path(item)">
                <div class="imgBox">
                    <img :src="item.company.logo" alt="">
                </div>
                <div class="posInfo">
                    <div>
                        <div class="posName" v-text="item.name">职位名称职位名称职位名称职位名称</div>
                        <div class="wages">
                            <span>薪资</span>
                            <span class="wage" v-text="'平均 ' + item.mean_salary + ' 最高 ' + item.max_salary">平均 4K 最高 10K</span>
                        </div>
                    </div>
                    <div class="tagsBox">
                        <!-- <div v-for="(items, indexs) in item.company.point" :key="indexs" v-text="items"></div> -->
                        <div v-text="item.company.point"></div>
                    </div>
                    <div class="forFoot">
                        <span class="nicName" v-text="item.company.simple_name">聚牛天下</span>
                        <span class="diqu" v-text="item.area + ' | ' + item.industry">北京|行业</span>
                    </div>
                </div>
            </div>
            <div style="height:80px;"></div>
        </div>
        <sort ref="sort" :styles="'top:80px;'"/>
    </div>
</template>

<script>
export default {
  name: 'positionsList',
  data () {
    return {
      sortD: [false, false, false],
      dataList: [],
      industry: '',
      area: '',
      ordering: ''
    }
  },
  methods: {
    sorts (num) {
      let arr = [false, false, false]
      if (this.sortD[num]) {
        this.sortD = arr
        this.$refs.sort.close()
        return
      }
      let obj = {}
      switch (num) {
        case 0:
          obj = {
            type: 3,
            success: (data) => {
              this.industry = data
              this.init()
            },
            fail: () => {
              this.sortD = [false, false, false]
            }
          }
          this.$refs.sort.on_display(obj)
          break
        case 1:
          obj = {
            type: 31,
            success: (data) => {
              this.area = data
              this.init()
            },
            fail: () => {
              this.sortD = [false, false, false]
            }
          }
          this.$refs.sort.on_display(obj)
          break
        case 2:
          obj = {
            type: 2,
            success: (data) => {
              let arr = ['', '-salary_info__mean_salary', '-salary_info__max_salary']
              this.ordering = arr[data]
              this.init()
            },
            fail: () => {
              this.sortD = [false, false, false]
            }
          }
          this.$refs.sort.on_display(obj)
          break
      }
      arr[num] = true
      this.sortD = arr
    },
    path (item) {
      this.$router.push({name: 'positionsInfo', query: {posId: item.id}})
    },
    init () {
      let str = 'ordering=' + this.ordering + '&area=' + this.area + '&industry=' + this.industry
      this.api.positionList(str, (res) => {
        this.dataList = res.data.results
        // this.dataList.map((p1, p2) => {
        //   p1.company.point = p1.company.point.split('、')
        // })
        console.log('职位列表：', this.dataList)
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    document.title = '推推牛人'
    this.init()
  }
}
</script>

<style scoped>
.positionsList{
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
    left:calc(50% - 187.5px);
    margin:0 auto;
}
.blank{
    margin-top:100px;
    width:150px;
    height:150px;
}
.positionsLists{
    position: fixed;
    width:375px;
    height: calc(100% - 45px);
    background: rgba(240, 239, 245, 1);
    left:calc(50% - 187.5px);
    overflow: auto;
    z-index: -1;
}
.sort{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width:375px;
    height:40px;
    background: #fff;
    display: flex;
    justify-content: space-around;
}
.sort>div{
    width:33%;
    align-self: center;
}
.sort>div>img{
    width:12px;
    height:12px;
}
.sort>div>span{
    font-size: 12px;
}
.contList{
    padding-top:50px;
}
.contFor{
    padding:10px;
    width:335px;
    margin:0 auto 10px;
    background:#fff;
    border-radius: 5px;
    min-height:64px;
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
    float: left;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
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
