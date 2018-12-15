<template>
    <div class="navs">
        <positionsList v-show="navTar[0]" ref="positionsList"/>
        <my v-show="navTar[1]" ref="my"/>
        <div class="Dh">
            <div @click="path(0)">
                <img v-if="navTar[0]" src="@/assets/tar/lookfor.png" alt="">
                <img v-else src="@/assets/tar/lookfor_a.png" alt="">
                <p :class="navTar[0]? 'navCli' :''">找工作</p>
            </div>
            <div @click="path(1)">
                <img v-if="navTar[1]" src="@/assets/tar/people.png" alt="">
                <img v-else src="@/assets/tar/people_a.png" alt="">
                <p :class="navTar[1]? 'navCli' :''">我</p>
            </div>
        </div>
    </div>
</template>

<script>
import positionsList from '../components/positionsList'
import my from '../components/my'

export default {
  name: 'navs',
  components: {
    positionsList,
    my
  },
  data () {
    return {
      navTar: [true, false]
    }
  },
  methods: {
    path (num) {
      this.navTar = [false, false]
      this.navTar[num] = true
      this.global.navStatus = this.navTar
      switch (num) {
        case 0:
          this.$refs.positionsList.init()
          break
        case 1:
          this.$refs.my.init()
      }
    }
  },
  mounted () {
    this.navTar = this.global.navStatus
    console.log(this.global.navStatus)
    for (let i = 0; i < this.navTar.length; i++) {
      if (this.navTar[i]) {
        this.path(i)
      }
    }
  }
}
</script>

<style scoped>
.Dh{
    position: fixed;
    width:375px;
    height:45px;
    bottom: 0px;
    left:calc(50% - 187.5px);
    display: flex;
    justify-content: space-around;
    background:#fff;
}
.Dh>div{
    width:50%;
    font-size: 10px;
}
.Dh>div>img{
    width:24px;
    height:24px;
    vertical-align: top;
    margin-top:2px;
}
.navCli{
    color: rgba(255, 152, 0, 1);
}
</style>
