<template>
    <div class="comVer">
        <div class="time">
            <span class="tit">验证日期</span><span class="rig" v-text="'于 ' + msg.check_date + '认证通过'"></span>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">验证流程</span>
            </div>
            <div class="imgBox">
                <img src="@/assets/yiheliucheng.png" alt="">
            </div>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">已核实项目</span>
            </div>
            <div class="imgBox">
                <img src="@/assets/yiheshi.png" alt="">
            </div>
        </div>
        <div class="contText">
            <div class="tits">
                <span class="tit">实拍照片</span>
            </div>
            <div class="contBox">
                <div class="wird">以下资料均由官方专人实地拍摄、整理</div>
                <div class="comImbs">
                    <div class="real" v-for="(item, index) in msg.real_data" :key="index">
                        <div v-text="item.title">title</div>
                        <img v-if="item.type === 1" :src="item.url">
                        <video v-if="item.type === 2" :src="item.url" preload="auto" x-webkit-airplay="allow" x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="portraint" width="100%" height="260px" webkit-playsinline="true" playsinline="true" autoplay="true" controls="true"></video >
                    </div>
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
      msg: {}
    }
  },
  methods: {
    init (id) {
      this.api.companySdyz(id, (res) => {
        this.msg = res.data
        console.log(res.data)
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
.comVer{
    padding:100px 0 10px;
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
.time>.rig{
    color:rgba(255, 152, 0, 1);
    font-size: 12px;
    line-height: 16px;
    float: right;
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
    width:345px;
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
.comImbs>.real{
    width:100%;
    margin-bottom: 10px;
}
.comImbs>.real>div{
    font-size: 14px;
    line-height: 25px;
}
.comImbs>.real>img{
    width:100%;
}
.comImbs>.real>video{
    width:100%;
}
</style>
