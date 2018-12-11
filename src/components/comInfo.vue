<template>
  <div class="comInfo">
    <div>
      <div class="contentBox">
        <div class="title">标杆客户</div>
        <div class="content">
          <div class="forBox">
            <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <p>公司简称</p>
          </div>
          <div class="forBox">
            <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <p>公司简称</p>
          </div>
          <div class="forBox">
            <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <p>公司简称</p>
          </div>
          <div class="forBox">
            <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <p>公司简称</p>
          </div>
          <div class="forBox">
            <div class="imgBox">
              <img src="@/assets/touxiang.jpg" alt="">
            </div>
            <p>公司简称</p>
          </div>
        </div>
      </div>
      <div class="contentBox">
        <div class="title">企业简介</div>
        <div class="contents">此处显示企业简介内容此业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容此处显示企业简介内容</div>
      </div>
      <div class="contentBox">
        <div class="title">公司地址</div>
        <div class="contents">
          <div class="fors">
            <div class="yuan"></div>
            <div class="forTex">此处显示地址信息</div>
          </div>
          <div class="fors">
            <div class="yuan"></div>
            <div class="forTex">此处显示地址信息</div>
          </div>
        </div>
      </div>
      <div class="contentBox">
        <div class="title">资质信息</div>
        <div class="contentzz">
          <div class="zztit">营业执照</div>
          <div>
            <img src="@/assets/touxiang.jpg" alt="">
          </div>
        </div>
      </div>
      <div style="height:90px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comInfo',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.comInfo{
  padding-top:90px;
}
.contentBox{
  width:345px;
  border-radius: 5px;
  background:#fff;
  overflow: hidden;
  margin:10px auto 0;
}
.content{
  height:112px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  padding:0 5px;
}
.forBox{
  margin:10px 15px 0 0;
  position: relative;
  display: inline-block;
  text-align: center;
}
.title{
  padding:14px 10px;
  font-size: 14px;
  color:#101010;
  font-weight: 600;
  border-bottom: 1px solid rgba(236, 236, 237, 1);/*no*/
}
.imgBox{
  width:70px;
  height:70px;
  display: flex;
}
.imgBox>img{
  width:70px;
  align-self: center;
}
.contents{
  padding:10px;
  font-size: 14px;
  color:#888;
  display: inline-block;
  /* clear: both; */
}
.fors{
  display: flex;
}
.fors>div{
  align-self: center;
  display: inline-block;
}
.fors>.yuan{
  width:8px;
  height:8px;
  background: rgba(255, 152, 0, 1);
  border-radius: 50%;
  margin-right:4px;
}
.fors>.forTex{
  font-size: 14px;
  color:rgba(44, 44, 44, 1);
}
.contentzz{
  padding:15px 10px;
}
.contentzz>.zztit{
  font-size: 14px;
  color:#101010;
}
.contentzz>div>img{
  width:325px;
}
</style>
