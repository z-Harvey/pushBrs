<template>
    <div class="myResume">
        <div class="myResumes"></div>
        <div class="header">
            <div class="imgBBs">
                <div class="imgBox">
                    <img class="tou" src="@/assets/touxiang.jpg" alt="">
                </div>
                <img class="xb" src="@/assets/woman.png" alt="">
                <img class="xb" src="@/assets/man.png" alt="">
            </div>
            <div class="nameAge">李筱沫26岁</div>
            <div class="pos">此处显示期望职位 | n年工作经验</div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">我的优势</span>
            </div>
            <div class="contCont">
                <div class="inner color101010">此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容</div>
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">工作经历</span>
            </div>
            <div class="contCont">
                <div class="forsss">
                    <div class="comInfo">
                        <span class="comName">此处显示公司名称</span>
                        <span class="comDate color888">此处显示起止时间</span>
                    </div>
                    <div class="comPosition color888">此处显示职位名称</div>
                    <div class="inner color101010">此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容</div>
                </div>
                <div class="forsss">
                    <div class="comInfo">
                        <span class="comName">此处显示公司名称</span>
                        <span class="comDate color888">此处显示起止时间</span>
                    </div>
                    <div class="comPosition color888">此处显示职位名称</div>
                    <div class="inner color101010">此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容此处显示内容</div>
                </div>
            </div>
            <div class="jingli colorff9800">
                <span>展开全部工作经历</span>
                <img src="@/assets/bom1s.png" alt="">
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">教育经历</span>
            </div>
            <div class="contCont">
                <div class="forsss">
                    <div class="comInfo">
                        <span class="comNames">哈尔滨石油学院</span>
                        <span class="comDate">此处显示起止时间</span>
                    </div>
                    <div class="comPosition">本科 · 电子信息工程</div>
                </div>
            </div>
        </div>
        <div class="conts">
            <div class="CoTitle">
                <span class="tiLef">附件</span>
            </div>
            <div class="contCont">
                <img src="@/assets/touxiang.jpg" alt="">
                <img src="@/assets/touxiang.jpg" alt="">
            </div>
        </div>
        <div style="height:80px;"></div>
        <div class="btnBox">
            <button>编辑简历</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'myResume',
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
.myResume{
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
}
.myResumes{
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
.nameAge{
    margin:6px 0 0;
}
.conts{
    width:375px;
    background:#fff;
    margin-top:10px;
}
.CoTitle{
    font-size: 14px;
    line-height: 23px;
    font-weight: 600;
    padding:14px 15px;
    text-align: left;
    border-bottom:1px solid rgba(241, 241, 241, 1);
}
.contCont{
    font-size: 14px;
    padding:10px 15px;
    text-align: left;
}
.comInfo, .comPosition{
    line-height: 25px
}
.comDate{
    float: right;
}
.inner{
    padding-bottom: 10px
}
.forsss{
    padding:10px 0 0;
    border-bottom: 1px solid rgba(241, 241, 241, 1);
}
.jingli{
    height:33px;
    line-height: 23px
}
.jingli>img{
    width:16px;
    height:16px;
    vertical-align: text-top;
}
.comNames{
    font-weight: 600
}
.contCont>img{
    width:100%;
    margin-bottom: 10px;
}
.btnBox{
    width:375px;
    height:45px;
    position: fixed;
    bottom: 0px;
    left: calc(50% - 187.5px);
    background: #fff;
    display: flex;
}
.btnBox>button{
    align-self: center;
    margin:0 auto;
    width:200px;
    height:35px;
    font-size: 14px;
    color:#fff;
    background:rgba(255, 152, 0, 1);
    border-radius: 20px;
    border:none;
}
.btnBox>button::after{
    border:none;
}
</style>
