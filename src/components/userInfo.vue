<template>
    <div class="userInfo">
        <div class="conTent">
            <div class="imgBox">
                <img src="@/assets/touxiang.jpg" alt="">
                <div class="imgMotBox">
                    <img src="@/assets/camera.png" alt="">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">姓名<span class="reds">*</span></span>
                <input class="inp color888" type="text" placeholder="请输入真实姓名">
            </div>
            <div class="listBox">
                <span class="leTit color101010">性别<span class="reds">*</span></span>
                <div class="age color101010">
                    <div>帅哥</div>
                    <div>美女</div>
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">电话<span class="reds">*</span></span>
                <input class="inp color888" type="number" pattern="[0-9]*" placeholder="请输入电话">
            </div>
            <div class="listBox">
                <span class="leTit color101010">参加工作时间<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="date">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">出生年月<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="date">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">所在地<span class="reds">*</span></span>
                <div class="clickBox color888" v-text="'请选择地区'"></div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">详细地址</span>
                <div class="areaBox">
                    <textarea class="color888" placeholder="请输入详细地址"></textarea>
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">邮件<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="text" placeholder="请输入邮箱">
                </div>
            </div>
            <div class="listBox">
                <span class="leTit color101010">微信号<span class="reds">*</span></span>
                <div class="dateBox color888">
                    <input type="text" placeholder="请输入微信号">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'userInfo',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '个人信息'
  }
}
</script>

<style scoped>
.userInfo{
    position: fixed;
    width:375px;
    height:100%;
    background: rgba(240, 239, 245, 1);
    top:0;
    left:calc(50% - 187.5px);
    overflow: auto;
}
.reds{color:red;}
.color101010{color:#101010;}
.color888{color:#888;}
.conTent{
    width:325px;
    border-radius: 5px;
    min-height:10px;
    background:#fff;
    margin:10px auto 0;
    padding:0 10px;
}
.imgBox{
    width: 60px;
    height:60px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    position: relative;
    float: right;
    margin-top:10px;
}
.imgBox>img{
    width:60px;
    align-self: center;
}
.imgBox>.imgMotBox{
    height:60px;
    background: rgba(16, 16, 16, 0.5);
    width:60px;
    position: absolute;
    top:50%;
    left:0;
}
.imgBox>.imgMotBox>img{
    width:22px;
    height:22px;
    margin:3px auto 0;
}
.listBox{
    width:100%;
    min-height:45px;
    text-align: left;
}
.leTit{
    font-size: 14px;
    line-height: 45px;
}
.inp{
    width:218px;
    height:30px;
    margin-left: 3px;
    border: none;
    font-size: 14px;
}
.inp::after{
    border:none;
}
.age{
    width: 218px;
    height:30px;
    margin-left:3px;
    font-size: 14px;
    display: inline-block;
}
.age>div{
    padding:0 25px;
    height:30px;
    line-height: 30px;
    display: inline-block;
    border-radius: 3px;
    background:rgba(241, 241, 241, 1);
}
.dateBox{
    height:45px;
    width:100%;
}
.dateBox>input{
    width: 100%;
    height:30px;
    font-size: 14px;
    border:none;
    text-indent: 5px
}
.dateBox>input::after{
    border:none;
}
.clickBox{
    height:45px;
    width:100%;
    font-size: 14px;
    text-indent: 5px;
}
.areaBox{
    min-height:45px;
    width:100%;
    padding:15px 0;
}
.areaBox>textarea{
    width:315px;
    height:50px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    border: none;
    font-size: 14px;
    padding:5px;
}
</style>
