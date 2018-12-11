<template>
    <div class="comVer">
        <div class="time">
            <span class="tit">验证日期</span><span class="rig">于yyyy-mm-dd认证通过</span>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">验证流程</span>
            </div>
            <div class="imgBox">
                <img src="@/assets/touxiang.jpg" alt="">
            </div>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">已核实项目</span>
            </div>
            <div class="imgBox">
                <img src="@/assets/touxiang.jpg" alt="">
            </div>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">实拍照片</span>
            </div>
            <div class="contBox">
                <div class="wird">以下资料均由官方专人实地拍摄、整理</div>
                <div class="comImbs">
                    <div>公司环境</div>
                    <img src="@/assets/touxiang.jpg" alt="">
                    <img src="@/assets/touxiang.jpg" alt="">
                    <img src="@/assets/touxiang.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'comVer',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.comVer{
    padding-top:100px;
}
.time{
    width:325px;
    padding:13px 10px;
    border-radius: 5px;
    background:#fff;
    text-align: left;
    margin:0 auto;
    margin-top:10px;
}
.tits{
    border-bottom: 1px solid rgba(247, 247, 247, 1);
    padding:13px 10px;
}
.tit{
    font-size: 14px;
    font-weight: 600;
}
.imgBox{
    padding:10px;
}
.contText{
    width:325px;
    border-radius: 5px;
    background:#fff;
    text-align: left;
    margin:0 auto;
    margin-top:10px;
}
.imgBox>img{
    width:100%;
}
.contBox{
    padding:10px;
}
.wird{
    color:rgba(255, 152, 0, 1);
    font-size: 14px;
}
.comImbs>div{
    font-size: 14px;
    color:#101010;
    margin:15px 0 0;
}
.comImbs>img{
    width:100%;
    margin-top:10px;
}
</style>
