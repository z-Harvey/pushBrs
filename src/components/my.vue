<template>
    <div class="my">
        <div class="header">
            <img src="@/assets/login_bg.png" alt="">
            <div class="imgBox">
                <div>
                    <img src="@/assets/touxiang.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="navRow">
            <div class="naLi">
                <div class="navRImg">
                    <img src="@/assets/pick_a.png" alt="">
                    <div class="naTag">00</div>
                </div>
                <div>全部投递</div>
            </div>
            <div class="naLi">
                <div class="navRImg">
                    <img src="@/assets/feedback_a.png" alt="">
                    <div class="naTag">00</div>
                </div>
                <div>待反馈</div>
            </div>
            <div class="naLi">
                <div class="navRImg">
                    <img src="@/assets/Interview_a.png" alt="">
                    <div class="naTag">00</div>
                </div>
                <div>待面试</div>
            </div>
            <div class="naLi">
                <div class="navRImg">
                    <img src="@/assets/yes_a.png" alt="">
                    <div class="naTag">00</div>
                </div>
                <div>已完成</div>
            </div>
        </div>
        <div class="ulList">
            <div class="uLef color2c2c2c">
                <img src="@/assets/resume.png" alt="">
                <span class="color2c2c2c">我的微简历</span>
            </div>
            <div class="uRig">
                <span class="color888">完成度80%</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList">
            <div class="uLef color2c2c2c">
                <img src="@/assets/file.png" alt="">
                <span class="color2c2c2c">简历附件</span>
            </div>
            <div class="uRig">
                <span class="color888">已上传</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList">
            <div class="uLef color2c2c2c">
                <img src="@/assets/my_demand.png" alt="">
                <span class="color2c2c2c">求职意向</span>
            </div>
            <div class="uRig">
                <span class="color888">离职-随时到岗</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
        <div class="ulList">
            <div class="uLef color2c2c2c">
                <img src="@/assets/profile.png" alt="">
                <span class="color2c2c2c">我的微简历</span>
            </div>
            <div class="uRig">
                <span class="color888">完成度80%</span>
                <img src="@/assets/right.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'my',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '我'
  }
}
</script>

<style scoped>
.my{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    overflow: auto;
    background: rgba(240, 239, 245, 1);
}
.color888{
    color:#888;
}
.color2c2c2c{
    color:rgba(44, 44, 44, 1);
}
.header{
    width:375px;
    height:100px;
    position: relative;
}
.header>img{
    width:375px;
    position: absolute;
    bottom: 0px;
    left:0;
    z-index: -1;
}
.imgBox{
    width:55px;
    height:55px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background:rgba(255, 255, 255, 0.36);
    margin:10px auto 0;
}
.imgBox>div{
    position: absolute;
    width:52px;
    height:52px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    bottom: 1px;
    right:1px;
}
.imgBox>div>img{
    width:52px;
    align-self: center;
}
.navRow{
    width:345px;
    height:80px;
    border-radius: 5px;
    background: #fff;
    margin:10px auto 0;
    display: flex;
    justify-content: space-around;
}
.naLi{
    align-self: center;
    width:25%;
}
.navRImg{
    position: relative;
}
.navRImg>img{
    width:30px;
    height:30px;
}
.naTag{
    border-radius:10px;
    font-size: 10px;
    padding:1px 5px;
    color:rgba(229, 28, 35, 1);
    position: absolute;
    left:55%;
    top:0;
    background:#fff;
}
.ulList{
    background:#fff;
    width:345px;
    height:45px;
    border-radius: 5px;
    margin:10px auto 0;
}
.uLef{
    font-size: 14px;
    float: left;
    height:45px;
    display: flex;
    line-height: 45px;
    padding-left:10px;
}
.uLef>img{
    align-self: center;
    width:24px;
    height:24px;
    margin-right:4px;
}
.uRig{
    padding-right:10px;
    font-size: 14px;
    display: flex;
    line-height: 45px;
    float: right;
}
.uRig>img{
    width:14px;
    height:14px;
    align-self: center;
    margin-left:4px;
}
</style>
