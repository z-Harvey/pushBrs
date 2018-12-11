<template>
    <div class="positionsList">
        <div class="sort">
            <div>
                <span>行业</span>
                <img v-if="sortNav[0]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
            <div>
                <span>城市</span>
                <img v-if="sortNav[1]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
            <div>
                <span>默认排序</span>
                <img v-if="sortNav[2]" src="@/assets/sort/lower.png" alt="">
                <img v-else src="@/assets/sort/lower_a.png" alt="">
            </div>
        </div>
        <div class="contList">
            <div class="contFor" @click="path">
                <div class="imgBox">
                    <img src="@/assets/touxiang.jpg" alt="">
                </div>
                <div class="posInfo">
                    <div>
                        <div class="posName">职位名称职位名称职位名称职位名称</div>
                        <div class="wages">
                            <span>薪资</span>
                            <span class="wage">平均 4K 最高 10K</span>
                        </div>
                    </div>
                    <div class="tagsBox">
                        <div>特点一特点一</div>
                        <div>特点一特点一</div>
                    </div>
                    <div class="forFoot">
                        <span class="nicName">聚牛天下</span>
                        <span class="diqu">北京|行业</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'positionsList',
  data () {
    return {
      sortNav: [false, false, false]
    }
  },
  methods: {
    path () {
      this.$router.push('/positionsInfo')
    }
  },
  mounted () {
    document.title = '推推牛人'
  }
}
</script>

<style scoped>
.positionsList{
    position: fixed;
    width:375px;
    height: calc(100% - 45px);
    background: rgba(240, 239, 245, 1);
    left:calc(50% - 187.5px);
    overflow: auto;
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
    height:64px;
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
