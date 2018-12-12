<template>
    <div class="upResume">
        <div class="header">
            <div class="imgBox">
                <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <div class="userInfo">
                <div class="userName">李晓沫</div>
                <img src="@/assets/woman.png" alt="">
                <img src="@/assets/man.png" alt="">
                <div class="userRig">
                    <span>编辑个人信息</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="upBtn">
            <img src="@/assets/top_.png" alt="">
            <span>上传数据文件</span>
            <input type="file">
        </div>
        <div class="ttt">
            <div class="ind">
                <div></div>
            </div>
            <span>上传中</span>
        </div>
        <div class="btns">
            <button class="qx">取消</button>
            <button class="qr">确认上传</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'upResume',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    document.title = '上传简历'
  }
}
</script>

<style scoped>
.upResume{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width: 375px;
    height:100%;
    background: rgba(248, 248, 248, 1);
}
.header{
    width: calc(100% - 25px);
    height:50px;
    padding:12px 10px 10px 15px;
    background:#fff;
}
.imgBox{
    width:50px;
    height:50px;
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    float: left;
    margin-right:11px;
}
.imgBox>img{
    align-self: center;
    width:50px;
}
.userInfo{
    height:50px;
    width:100%;
    text-align: left;
}
.userInfo>.userName{
    font-size: 14px;
    color:#101010;
    line-height: 50px;
    display: inline-block;
}
.userInfo>img{
    width:12px;
    height:12px;
    vertical-align: text-top;
}
.userRig{
    font-size: 14px;
    color:#888;
    float: right;
    height:50px;
    line-height: 50px;
    display: flex;
}
.userRig>img{
    width:14px;
    height:14px;
    align-self: center;
}
.upBtn{
    width:125px;
    height:30px;
    border:1px solid rgba(255, 152, 0, 1);
    border-radius: 4px;
    font-size: 14px;
    color:rgba(255, 152, 0, 1);
    background:#fff;
    position: relative;
    line-height: 30px;
    text-align: center;
    margin:150px auto 0;
}
.upBtn>img{
    width:16px;
    height:16px;
    vertical-align: text-top;
}
.upBtn>input{
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    height:100%;
    opacity: 0;
}
.ttt{
    display: flex;
    margin:32px auto 0;
    width:212px;
}
.ttt>.ind{
    align-self: center;
    width:162px;
    height:6px;
    border-radius: 8px;
    background:rgba(255, 152, 0, 1);
    margin:4px 0;
}
.ttt>span{
    line-height: 14px;
    font-size: 14px;
    color:rgba(140, 140, 140, 1);
    margin-left:5px;
    vertical-align: top;
}
.btns{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0px;
    left:0px;
    background:#fff;
    display: flex;
    justify-content: space-around;
}
.btns>button{
    align-self: center;
    width:165px;
    height:35px;
    font-size: 14px
}
.btns>button::after{
    border:none;
}
.btns>.qx{
    border:1px solid rgba(255, 152, 0, 1);/*no*/
    background:#fff;
    border-radius: 30px;
    color:rgba(255, 152, 0, 1);
}
.btns>.qr{
    background:rgba(255, 152, 0, 1);
    border-radius: 30px;
    border:none;
    color:#fff;
}
</style>
