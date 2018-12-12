<template>
    <div class="newResume">
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
        <div class="contList">
            <div class="uls">
                <div class="liLe">求职状态<span class="reds">*</span></div>
                <div class="liRig">
                    <span>离职-随时到岗</span>
                    <img src="@/assets/right.png" alt="">
                </div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">求职期望<span class="reds">*</span></div>
            </div>
            <div class="inpList">
                <div class="inp">
                    <input class="color888" type="text" placeholder="期望职位">
                </div>
                <div class="diCli color888">期望行业</div>
                <div class="diCli color888">工作城市</div>
                <div class="inp">
                    <input class="color888" type="text" placeholder="薪资要求">
                </div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">我的优势<span class="reds">*</span></div>
            </div>
            <div class="inpList">
                <div class="areas">
                    <textarea maxlength="200" v-model="areaIner" placeholder="简要说明你的优势"></textarea>
                    <div class="jis color888" v-text="areaIner.length + '/200'"></div>
                </div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">工作经历<span class="reds">*</span>(至少填写一份经历)</div>
            </div>
            <div class="inpList">
                <div>
                    <div class="inp">
                        <input class="color888" type="text" placeholder="公司名称">
                    </div>
                    <div class="inp">
                        <input class="color888" type="text" placeholder="职位名称">
                    </div>
                    <div class="inp">
                        <div class="dateTie color888">起止时间</div>
                        <input class="color888" type="date">
                    </div>
                    <div class="areas">
                        <textarea maxlength="200" placeholder="简要说明你的优势"></textarea>
                        <div class="jis color888">0/300</div>
                    </div>
                </div>
                <div class="bewBtn color888">+ 新增工作经历</div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">教育经历<span class="reds">*</span></div>
            </div>
            <div class="inpList">
                <div>
                    <div class="inp">
                        <input class="color888" type="text" placeholder="学校名称">
                    </div>
                    <div class="diCli color888">学历</div>
                    <div class="inp">
                        <input class="color888" type="text" placeholder="专业">
                    </div>
                    <div class="inp">
                        <div class="dateTie color888">起止时间</div>
                        <input class="color888" type="date">
                    </div>
                    <div class="areas">
                        <textarea maxlength="200" placeholder="在校经历"></textarea>
                        <div class="jis color888">0/300</div>
                    </div>
                </div>
                <div class="bewBtn color888">+ 新增教育经历</div>
            </div>
        </div>
        <div class="contList">
            <div class="uls">
                <div class="liLe">上传附件</div>
            </div>
            <div class="inpLists">
                <div class="jytit color888">上传荣誉证书、奖杯、学历等过往业绩证明材料</div>
                <div class="putImgBtn">
                    <img src="@/assets/home_navImg.png" alt="">
                </div>
            </div>
        </div>
        <div style="height:100px;"></div>
        <div class="footerBtn">
            <button>创建简历</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'newResume',
  data () {
    return {
      areaIner: ''
    }
  },
  methods: {
  },
  mounted () {
    document.title = '创建微简历'
  }
}
</script>

<style scoped>
.reds{
    color:red;
}
.newResume{
    position: fixed;
    top:0;
    left:calc(50% - 187.5px);
    width: 375px;
    height:100%;
    background: rgba(248, 248, 248, 1);
    overflow: auto;
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
.uls{
    padding:10px 15px;
    background: #fff;
    margin-top:10px;
    height:24px;
}
.liLe{
    float: left;
    font-size: 14px;
    line-height: 24px
}
.liRig{
    float: right;
    display: flex;
}
.liRig>span{
    font-size: 14px;
    line-height: 24px;

}
.liRig>img{
    align-self: center;
    width:14px;
    height:14px;
}
.inpList{
    background:#fff;
    padding-bottom: 7px;
}
.inpLists{
    background:#fff;
    padding-bottom: 7px;
    padding-left:15px;
}
.inp{
    width:345px;
    height:45px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    margin:0 auto 10px;
    display: flex;
}
.inp>input{
    align-self: center;
    width:345px;
    height:30px;
    font-size: 14px;
    line-height: 30px;
    text-indent: 20px;
    border:none;
    background:rgba(0, 0, 0, 0);
}
.inp>input[type = date]{
    width:250px;
    text-align: right;
}
.inp>.dateTie{
    font-size: 14px;
    float: left;
    line-height: 45px;
    text-indent: 20px;
}
.diCli{
    width:345px;
    border-radius: 5px;
    background:rgba(241, 241, 241, 1);
    margin:0 auto 10px;
    font-size: 14px;
    text-align: left;
    padding:15.5px 0;
    text-indent: 20px;
}
.areas{
    width:345px;
    height:114px;
    background:rgba(241, 241, 241, 1);
    border-radius: 5px;
    margin:0 auto;
    position: relative;
}
.areas>textarea{
    width:calc(100% - 30px);
    height:calc(100% - 30px);
    border:none;
    background:rgba(0, 0, 0, 0);
    border-radius: 5px;
    font-size: 14px;
    padding:15px;
}
.areas>textarea{
    border:none;
}
.areas>.jis{
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    right:10px;
    line-height: 23px;
}
.color888{
    color:#888;
}
.bewBtn{
    width:128px;
    height:30px;
    border:1px solid rgba(206, 206, 206, 1);
    border-radius: 3px;
    line-height: 30px;
    margin:7px auto 0;
}
.jytit{
    font-size: 14px;
    text-align: left;
}
.putImgBtn{
    width:68px;
    height: 68px;
    display: flex;
    background:rgba(241, 241, 241, 1);
    margin-top:10px;
}
.putImgBtn>img{
    width:24px;
    height:24px;
    align-self: center;
    margin:0 auto;
}
.footerBtn{
    position: fixed;
    width:375px;
    height:48px;
    background:#fff;
    display: flex;
    bottom: 0;
    left:0;
}
.footerBtn>button{
    align-self: center;
    width:200px;
    height:35px;
    font-size: 14px;
    margin:0 auto;
    background:rgba(255, 152, 0, 1);
    color:#fff;
    border-radius: 20px;
    border:none;
}
.footerBtn>button::after{
    border:none;
}
</style>
