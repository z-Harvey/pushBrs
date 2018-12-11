<template>
    <div class="navs">
        <positionsList ref="positionsList"/>
        <div class="Dh">
            <div>
                <img v-if="navTar[0]" src="@/assets/tar/lookfor.png" alt="">
                <img v-else src="@/assets/tar/lookfor_a.png" alt="">
                <p :class="navTar[0]? 'navCli' :''">找工作</p>
            </div>
            <div>
                <img v-if="navTar[1]" src="@/assets/tar/people.png" alt="">
                <img v-else src="@/assets/tar/people_a.png" alt="">
                <p :class="navTar[1]? 'navCli' :''">我</p>
            </div>
        </div>
    </div>
</template>

<script>
import positionsList from '../components/positionsList'

export default {
  name: 'navs',
  components: {
    positionsList
  },
  data () {
    return {
      navTar: [true, false]
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
