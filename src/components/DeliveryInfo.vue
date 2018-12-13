<template>
    <div class="DeliveryInfo">
        <div class="header">
            <div class="f1">
                <span class="posName">职位名称</span>
                <span class="status">待反馈</span>
            </div>
            <div class="nickName color888">阿里巴巴（中国）网络技术有限公司</div>
            <div class="f2">
                <span class="date colorcecece">yyyy-mm-dd hh:ss 投递简历</span>
                <span class="salary">薪资<span class="colorff9800"> 平均 4k 最高 10k</span></span>
            </div>
        </div>
        <div class="content">
            <div class="fors color101010">
                <div class="forTit">
                    <span>初试信息</span>
                    <div class="imgBox">
                        <img src="@/assets/lower.png" alt="">
                    </div>
                </div>
                <div class="forCont">
                    <div>
                        <img src="@/assets/time_a.png" alt="">
                        <div>yyyy-mm-dd hh:ss</div>
                    </div>
                    <div>
                        <img src="@/assets/location.png" alt="">
                        <div>此处显示面试地址</div>
                    </div>
                    <div>
                        <img src="@/assets/Communication.png" alt="">
                        <div>此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息此处显示留言信息</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnBox">
            <button class="bt1">职位信息</button>
            <button class="bt2">电话沟通</button>
        </div>
        <div class="btnBox">
            <button class="bt2">职位信息</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DeliveryInfo',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '投递详情'
  }
}
</script>

<style scoped>
.DeliveryInfo{
    position: fixed;
    width:375px;
    height:100%;
    top:0;
    left:calc(50% - 187.5px);
    background:rgba(248, 248, 248, 1);
}
.header{
    padding:15px;
    background:#fff;
    text-align: left;
}
.f1, .nickName{
    font-size: 14px;
}
.status{
    float: right;
}
.nickName{
    margin:4px 0 20px;
}
.salary{
    float: right;
}
.fors{
    background:#fff;
    width:345px;
    border-radius: 5px;
    margin:10px auto 0;
}
.forTit{
    font-size: 14px;
    text-indent: 600;
    padding:9px 10px;
    text-align: left;
    border-bottom: 1px solid rgba(241, 241, 241, 1);
    font-weight: 600;
}
.forTit>.imgBox{
    width:14px;
    height:14px;
    float: right;
}
.forTit>.imgBox>img{
    width:16px;
    height:16px;
}
.forCont{
    padding:10px;
    font-size: 14px;
}
.forCont>div{
    text-align: left;
    min-height:23px;
}
.forCont>div>img{
    width:14px;
    height:14px;
    float: left;
    margin-top:3px;
}
.forCont>div>div{
    padding-left:20px;
}
.btnBox{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0;
    left:calc(50% - 187.5px);
    background:#fff;
    display: flex;
    justify-content: space-around;
}
.btnBox>button{
    align-self: center;
    width:165px;
    height:35px;
    font-size: 14px;
    border-radius: 30px;
}
.btnBox>.bt1{
    border:1px solid rgba(255, 152, 0, 1);
    color:rgba(255, 152, 0, 1);
    background:#fff;
}
.btnBox>.bt2{
    background:rgba(255, 152, 0, 1);
    border:none;
    color:#fff;
}
.btnBox>button::after{
    border:none;
}
</style>
