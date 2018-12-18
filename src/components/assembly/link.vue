<template>
   <div class="linkage" v-if="show">
        <div class="cont-box">
            <div class="cont-content" v-show="glinks === 1">
                <div class="ons">
                    <div v-for="(item, index) in ons" :key="index" @click="clickList(item)">
                        <p v-text="item.name">sss</p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="cont-content" v-if="msg.type === 'cs'">
                <div>
                    <div v-for="(item, index) in cs1" :key="index" @click="cs2s(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-for="(item, index) in cs2" :key="index" @click="cs3s(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-for="(item, index) in cs3" :key="index" @click="csqr(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="cont-content" v-else-if="glinks !== 1">
                <div>
                    <div v-for="(item, index) in toList1" :key="index" @click="hangye(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <div v-for="(item, index) in toList2" :key="index" @click="to2Click(item)">
                        <p v-text="item.name"></p>
                        <div class="imgBox">
                            <img v-if="item.show" src="@/assets/yes_b.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <dir style="height:40px;" v-if="msg.type !== 'cs'"></dir>
            <div class="btnbox" v-if="msg.type !== 'cs'">
                <button @click="qx" class="btn">取消</button>
                <button @click="qr" class="btn qr">确认</button>
            </div>
        </div>
        <!-- <Eject ref="eject" /> -->
   </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'linkage',
  data () {
    return {
      show: false,
      glinks: 2,
      ons: [],
      call: {},
      toList1: [],
      toList2: [],
      cs1: [],
      cs2: [],
      cs3: [],
      cs2cos: {},
      cs3cos: {},
      to2Cos: {},
      msg: {}
    }
  },
  methods: {
    initScorll () {
      let eje = this.$refs.eje
      let bs = new BScroll(eje, {probeType: 3})
      bs.on('scroll', (pos) => {
        console.log(pos)
      })
    },
    glink (obj) {
      this.call = obj
      this.ons = [{id: 1, name: '离职-随时到岗', show: false}, {id: 2, name: '在职-暂不考虑', show: false}, {id: 3, name: '在职-考虑机会', show: false}, {id: 4, name: '在职-月内到岗', show: false}]
      this.show = true
      this.glinks = 1
    },
    xzlink (obj) {
      this.call = obj
      this.ons = [{id: 1, name: '1 ~ 5k', show: false}, {id: 2, name: '6 ~ 10k', show: false}, {id: 3, name: '11 ~ 15k', show: false}, {id: 4, name: '16 ~ 20k', show: false}, {id: 5, name: '21 ~ 25k', show: false}, {id: 5, name: '26 ~ 30k', show: false}]
      this.show = true
      this.glinks = 1
    },
    xllink (obj) {
      this.call = obj
      this.ons = [{name: '小学', show: false}, {name: '初中', show: false}, {name: '中专', show: false}, {name: '中技', show: false}, {name: '高中', show: false}, {name: '大专', show: false}, {name: '本科', show: false}, {name: '硕士', show: false}, {name: '博士', show: false}]
      this.show = true
      this.glinks = 1
    },
    qx () {
      this.show = false
      this.glinks = 2
    },
    tolink (obj) {
      this.msg = obj
      if (obj.type === 'hangye') {
        this.hangye()
      } else if (obj.type === 'cs') {
        this.cs1s()
      }
      this.show = true
    },
    qr () {
      let arr = []
      if (this.glinks === 1) {
        this.ons.map((p1) => {
          if (p1.show === true) {
            this.call.success(p1)
            // return
          }
        })
      } else if (this.msg.type === 'hangye') {
        for (let i in this.to2Cos) {
          this.to2Cos[i].map((p1, p2) => {
            if (p1.show) {
              arr.push(p1)
            }
          })
        }
        this.msg.success(arr)
      }
      this.show = false
      this.glinks = 2
    },
    clickList (item) {
      this.ons.map((p1) => {
        p1.show = false
      })
      item.show = true
    },
    /**
     * 行业二级点击
     */
    to2Click (item) {
      let ms = this.msg.ms
      let num = 0
      if (!item.show) {
        for (let i in this.to2Cos) {
          this.to2Cos[i].map((p1, p2) => {
            if (p1.show) {
              num++
            }
          })
        }
      }
      if (!(num === ms)) {
        item.show = !item.show
      }
    },
    /**
     * 行业 获取数据 模块
     */
    hangye (item) {
      let str = ''
      if (!item) {
        str = 'pid=0'
      } else {
        str = 'pid=' + item.id
        this.toList1.map((p1, p2) => {
          p1.show = false
        })
        item.show = true
        if (this.to2Cos[item.id]) {
          this.toList2 = this.to2Cos[item.id]
          return
        }
      }
      this.api.getSearchIndustry(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        if (!item) {
          this.toList1 = res.data
        } else {
          this.to2Cos[item.id] = res.data
          this.toList2 = res.data
        }
      }, (err) => {
        console.log(err)
        // this.$refs.eject.errmot(err)
      })
    },
    /**
     * 城市 获取数据 模块
     */
    cs1s (item) {
      let str = 'pid=0'
      this.api.getAreaList(str, (res) => {
        console.log(res)
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        this.cs1 = res.data
      }, (err) => {
        console.log(err)
        // this.$refs.eject.errmot(err)
      })
    },
    /**
     * 城市 2 获取数据 模块
     */
    cs2s (item) {
      let str = 'pid=' + item.id
      this.cs1.map((p1) => {
        p1.show = false
      })
      item.show = true
      if (this.cs2cos[item.id]) {
        this.cs2 = this.cs2cos[item.id]
        this.cs3 = []
        return
      }
      this.api.getAreaList(str, (res) => {
        this.cs3 = []
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        this.cs2 = res.data
        this.cs2cos[item.id] = this.cs2
      }, (err) => {
        console.log(err)
        // this.$refs.eject.errmot(err)
      })
    },
    /**
     * 城市 3 获取数据 模块
     */
    cs3s (item) {
      let str = 'pid=' + item.id
      this.cs2.map((p1) => {
        p1.show = false
      })
      for (let i in this.cs3cos) {
        this.cs3cos[i].map((p1) => {
          p1.show = false
        })
      }
      for (let i in this.cs2cos) {
        this.cs2cos[i].map((p1) => {
          p1.show = false
        })
      }
      item.show = true
      if (this.cs3cos[item.id]) {
        this.cs3 = this.cs3cos[item.id]
        return
      }
      this.api.getAreaList(str, (res) => {
        res.data.map((p1, p2) => {
          p1['show'] = false
        })
        this.cs3 = res.data
        this.cs3cos[item.id] = this.cs3
      }, (err) => {
        console.log(err)
        // this.$refs.eject.errmot(err)
      })
    },
    csqr (item) {
      let arr = []
      this.cs1.map((p1) => {
        if (p1.show) {
          arr.push(p1.name)
        }
      })
      for (let i in this.cs2cos) {
        this.cs2cos[i].map((p1) => {
          if (p1.show) {
            arr.push(p1.name)
          }
        })
      }
      arr.push(item.name)
      this.msg.success(arr)
      this.show = false
      this.glinks = 2
      this.cs1 = []
      this.cs2 = []
      this.cs3 = []
      this.cs2cos = []
      this.cs3cos = []
      this.msg = {}
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.linkage{
    position: fixed;
    top: 0;
    left: calc(50% - 187.5px);
    width:375px;
    height:100%;
    z-index: 10;
    background: rgba(0,0,0,.2);
    display: flex;
    z-index: 9;
}
.cont-box{
    width:calc(92% - 20px);
    max-height:250px;
    min-height: 20px;
    background:#fff;
    margin:0 auto;
    align-self: center;
    border-radius: 3px;
    padding:15px;
    font-size: 14px;
    position: relative;
}
.tit{
    color:rgba(255, 152, 0, 1);
    height:20px;
    line-height: 20px;
    margin-bottom: 10px;
}
.cont-content{
    display: flex;
    justify-content: space-between
}
.cont-content>div{
    max-height:200px;
    overflow: auto;
    text-align: left;
    width: 50%;
}
.cont-content>.ons{
    max-height:200px;
    overflow: auto;
    text-align: center;
    width: 100%;
}
.cont-content>div>div{
    line-height: 23px;
    padding:5px;
    position: relative;
}
.imgBox{
    height:23px;
    position: absolute;
    padding:5px;
    top:0;
    right:0;
    display: flex;
}
.imgBox>img{
    width:14px;
    height:14px;
    align-self: center
}
.btnbox{
    position: absolute;
    bottom: 5px;
    left:10px;
    width:calc(100% - 20px);
    height:40px;
    border:0;
    background:#fff;
}
.btnbox>button{
    font-size: 14px;
}
.btn{
    height:40px;
    float: left;
    width:50%;
    border:0;
    background:#fff;
}
.btn::after{
    border:0;
}
.qr{
    color:rgba(2, 187, 0, 1);
}
</style>
