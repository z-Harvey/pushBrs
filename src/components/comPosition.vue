<template>
    <div class="comPosition">
        <div class="fors" v-for="(item, index) in dataLiist" :key="index" @click="path(item)">
            <div class="infos">
                <span class="nickName" v-text="item.name">职位名称</span>
                <span class="xiz">薪资<span v-text="' 平均 ' + item.mean_salary + ' 最高 ' + item.max_salary"></span></span>
            </div>
            <div class="han" v-text="item.area + ' | ' + item.industry"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'comPosition',
  data () {
    return {
      dataLiist: []
    }
  },
  methods: {
    init (id) {
      this.api.positionZz('company=' + id, (res) => {
        console.log(res)
        this.dataLiist = res.data.results
      }, (err) => {
        console.log(err)
      })
    },
    path (item) {
      this.$router.push({name: 'positionsInfo', query: {posId: item.id}})
    }
  }
}
</script>

<style scoped>
.comPosition{
    padding-top:100px;
    height:calc(100% - 100px);
    width:375px;
    position: absolute;
    background:rgba(248, 248, 248, 1);
    /* overflow: auto; */
}
.fors{
    width:325px;
    padding:10px;
    border-radius: 5px;
    margin:0 auto;
    background:#fff;
    text-align: left;
    margin-top:10px;
}
.infos>.nickName{
    font-size: 14px;
    color:#101010;
    line-height: 20px
}
.infos>.xiz{
    font-size: 12px;
    float: right;
}
.xiz>span{
    color:rgba(255, 152, 0, 1);
}
.han{
    color:#ccc;
}
</style>
