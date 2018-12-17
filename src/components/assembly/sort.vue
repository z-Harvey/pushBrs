// 筛选
<template>
  <div class="sort" v-if="show" :style="styles" @click="close">
    <div class="Screening" @click.stop="f1($event)">
        <div class="s2" v-if="msg.type === 2">
            <div @click="s2Clik(0)">
                <p>默认排序</p>
                <img v-if="s2[0]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(1)">
                <p>按平均薪资由高到低</p>
                <img v-if="s2[1]" src="@/assets/yes.png" alt="">
            </div>
            <div @click="s2Clik(2)">
                <p>按最高薪资由高到低</p>
                <img v-if="s2[2]" src="@/assets/yes.png" alt="">
            </div>
        </div>
        <div class="s3" v-if="msg.type === 3">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type3Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="s3" v-if="msg.type === 31">
            <div>
                <div>
                    <div @click="type3Call(qb)">
                        <p>全部</p>
                        <img v-if="qb.show" src="@/assets/yes.png" alt="">
                    </div>
                    <div v-for="(item, index) in s1List1" :key="index" @click="type31Init(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div v-for="(item, index) in s1List2" :key="index" @click="type3Call(item)">
                        <p v-text="item.name"></p>
                        <img v-if="item.show" src="@/assets/yes.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sort',
  data () {
    return {
      s1Arr1: [false, false, false, false],
      s1Arr2: [false, false],
      msg: {
        type: null
      },
      s2: [true, false, false, false, false],
      s22: [true, false, false],
      s1List1: [],
      s1List2: [],
      show: false,
      qb: {
        name: '',
        id: '00',
        show: false
      }
    }
  },
  methods: {
    f1 (e) {
    },
    close () {
      this.show = false
      this.msg.fail()
    },
    on_display (obj) {
      this.msg = obj
      this.show = true
      if (obj.type === 3) {
        this.type3Init()
      } else if (obj.type === 31) {
        this.type31Init()
      }
    },
    s2Clik (num) {
      let arr = [false, false, false]
      arr[num] = !this.s2[num]
      if (!arr[num]) {
        arr[0] = true
      }
      this.s2 = arr
      this.msg.success(num)
      this.close()
    },
    s2Cliks (num) {
      let arr = [false, false, false]
      arr[num] = !this.s2[num]
      if (!arr[num]) {
        arr[0] = true
      }
      this.s22 = arr
      this.msg.success(num)
      this.close()
    },
    type3Init (item) {
      let str = ''
      this.s1List2 = []
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        str = 'pid=' + item.id
      } else {
        str = 'pid=0'
      }
      this.api.getSearchIndustry(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (item) {
          this.s1List2 = res.data
          return
        }
        this.s1List1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    type31Init (item) {
      let str = ''
      this.s1List2 = []
      this.qb.show = false
      if (item) {
        this.s1List1.map((p1, p2) => {
          p1['show'] = false
        })
        item.show = true
        str = 'pid=' + item.id
      } else {
        str = 'pid=0'
      }
      this.api.getAreaList(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (item) {
          this.s1List2 = res.data
          return
        }
        this.s1List1 = res.data
      }, (err) => {
        console.log(err)
      })
    },
    type3Call (item) {
      item.show = true
      this.s1List2 = []
      this.msg.success(item.name)
      this.close()
    }
  },
  mounted () {
  },
  props: ['styles']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort{
    position: fixed;
    width:375px;
    height:100%;
    left: calc(50% - 187.5);
    background: rgba(0,0,0,0);
    background:rgba(0,0,0,.2);
}
.Screening{
    position: fixed;
    left:calc(50% - 187.5);
    width:375px;
}
.s1{
    background:#fff;
    padding:10px 15px;
}
.s1-tit{
    font-size: 14px;
    line-height: 40px;
}
.s1-btnbox>div{
    padding:5px 8px;
    font-size: 14px;
    display: inline-block;
    background:rgba(241, 241, 241, 1);
    color:#101010;
    border-radius: 3px;
    line-height: 14px;
}
.s1-btnlist{
    padding:10px 0 0 0;
    border-top: 1px solid #ececed;
    margin-top:10px;
}
.s1-btnlist>button{
    border:0;
    border-radius: .40px;
}
.s1-btnlist>button::after{
    border:0;
}
.cz{
    width:80px;
    height:40px;
    background:#bbb;
    color:#fff;
}
.qd{
    width:1110px;
    height:40px;
    background:rgba(255, 152, 0, 1);
    color:#fff;
}
.s2{
    background:#fff;
    padding:10px 15px;
    font-size: 14px;
    text-align: left;
    line-height: 40px;
}
.s2>div{
    position: relative;
}
.s2>div>img{
    width:14px;
    height:14px;
    position: absolute;
    top:13px;
    right:20px;
}
.s3{
    background:#fff;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    color:#2c2c2c;
    line-height: 20px;
    padding:10px 0;
}
.s3>div{
    width:50%;
    max-height:180px;
    overflow: auto;
}
.s3>div>div{
    position: relative;
}
.s3>div>div>div{
    position: relative;
    padding:.40px 0;
}
.s3>div>div>div>img{
    width:12px;
    height:12px;
    position: absolute;
    right:6px;
    top:3px;
}
.s3>div>div>p{}
.s1-btnbox>.xz{
    background: rgba(255, 152, 0, 1);
    color:#fff;
}
</style>
