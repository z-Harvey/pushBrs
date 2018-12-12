<template>
    <div class="myDelivery">
        <div class="navBox">
            <div class="navList color888">
                <div>
                    <p>全部</p>
                    <div></div>
                </div>
                <div>
                    <p>待反馈</p>
                    <div></div>
                </div>
                <div>
                    <p>待面试</p>
                    <div></div>
                </div>
                <div>
                    <p>已完成</p>
                    <div></div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="conFor">
                <div class="f1">
                    <span class="posName">职位名称</span>
                    <span class="status colorff9800">待反馈</span>
                </div>
                <div class="comname color888">公司简称</div>
                <div class="f2">
                    <span class="salary">薪资<span class="colorff9800"> 平均 4k  最高 10k</span></span>
                    <span class="date colorcecece">yyyy-mm-dd hh:ss</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myDelivery',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '我的投递'
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
}
.conFor{
    width:325px;
    min-height:69px;
    border-radius: 5px;
    background: #fff;
    margin:0 auto;
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
