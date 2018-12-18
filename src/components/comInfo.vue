<template>
  <div class="comInfo">
    <div>
      <div class="contentBox">
        <div class="title">标杆客户</div>
        <div class="content">
          <div class="forBox" v-for="(item, index) in msg.bg_customer" :key="index">
            <div class="imgBox">
              <img :src="item.logo" alt="">
            </div>
            <p v-text="item.simple_name">公司简称</p>
          </div>
        </div>
      </div>
      <div class="contentBox">
        <div class="title">企业简介</div>
        <div class="contents" v-text="msg.desc"></div>
      </div>
      <div class="contentBox">
        <div class="title">公司地址</div>
        <div class="contents">
          <div class="fors" v-for="(item, index) in msg.address" :key="index">
            <div class="yuan"></div>
            <div class="forTex" v-text="item.address"></div>
          </div>
        </div>
      </div>
      <div class="contentBox">
        <div class="title">资质信息</div>
        <div class="contentzz">
          <div class="zztit">营业执照</div>
          <div>
            <img v-for="(item, index) in msg.materials" :key="index" :src="item.images" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comInfo',
  data () {
    return {
      msg: {}
    }
  },
  methods: {
    init (id) {
      this.api.companyInfo(id, (res) => {
        console.log(res)
        this.msg = res.data
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.comInfo{
  padding:100px 0 10px;
}
.contentBox{
  width:345px;
  border-radius: 5px;
  background:#fff;
  overflow: hidden;
  margin:10px auto 0;
}
.content{
  min-height:112px;
  overflow-y: hidden;
  overflow-x: auto;
  white-space: nowrap;
  padding:5px 5px;
}
.forBox{
  margin:10px 15px 0 0;
  position: relative;
  display: inline-block;
  text-align: center;
}
.forBox>p{
  font-size: 12px;
  line-height: 20px;
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
  min-height:70px;
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
  margin-bottom:9px;
}
.contentzz>div>img{
  width:325px;
}
</style>
