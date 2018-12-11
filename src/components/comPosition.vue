<template>
    <div class="comPosition">
        <div class="fors">
            <div class="infos">
                <span class="nickName">职位名称</span>
                <span class="xiz">薪资<span> 平均 4k 最高 10k</span></span>
            </div>
            <div class="han">北京 | 行业</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'comPosition',
  data () {
    return {
    }
  },
  methods: {
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
