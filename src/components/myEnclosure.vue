<template>
    <div class="myEnclosure">
        <div class="myEnclosures"></div>
        <div class="header">
            <div class="imgBBs">
                <div class="imgBox">
                    <img class="tou" src="@/assets/touxiang.jpg" alt="">
                </div>
                <img class="xb" src="@/assets/woman.png" alt="">
                <img class="xb" src="@/assets/man.png" alt="">
            </div>
            <div class="nameAge">李筱沫  26岁</div>
            <div class="pos">此处显示期望职位 | n年工作经验</div>
        </div>
        <img class="imgss" src="@/assets/PDF.png" alt="">
        <div class="enName">XXX-XXX-XXX.pdf</div>
        <div class="enSize">999KB</div>
        <div class="upDate">YYYY/MM/DD HH:MM 上传</div>
        <div class="btnBox">
            <button class="b1">删除附件</button>
            <button class="b2">重新上传</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myEnclosure',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '我的微简历'
  }
}
</script>

<style scoped>
.myEnclosure{
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
}
.myEnclosures{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    background: rgba(240, 239, 245, 1);
    z-index: -1;
}
.header{
    width:375px;
    min-height:121px;
    background:#fff;
    padding-top:12px;
}
.imgBBs{
    width:60px;
    height:60px;
    position: relative;
    margin:0 auto;
}
.imgBox{
    width:60px;
    height:60px;
    border-radius: 50%;
    display: flex;
    overflow: hidden;
}
.imgBox>img{
    width:60px;
    align-self: center;
}
.xb{
    width:16px;
    height:16px;
    position: absolute;
    top:0px;
    right: 0px;
}
.nameAge, .pos{
    font-size: 14px;
    line-height: 23px;
}
.imgss{
    width:50px;
    height:50px;
    margin:40px auto 8px;
}
.enName{
    font-size: 14px;
}
.enSize{
    margin:20px auto 8px;
}
.enSize, .upDate{
    font-size: 12px;
    color:#ccc;
}
.btnBox{
    width:375px;
    height:45px;
    display: flex;
    position: fixed;
    bottom: 0px;
    left:calc(50% - 187.5px);
    justify-content: space-around;
    background:#fff;
}
.btnBox>button{
    align-self: center;
    width:165px;
    height:35px;
    border-radius: 30px;
    border:none;
    font-size: 14px
}
.btnBox>button::after{
    border:none;
}
.btnBox>.b1{
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    background:#fff;
}
.btnBox>.b2{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
