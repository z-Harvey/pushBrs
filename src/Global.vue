<script>
let userInfo = {} // 用户基本信息
let userStatus = {} // 用户状态信息
let HTTPStatusCode = {
  400: '错误请求',
  401: '未授权',
  402: '402',
  403: '服务器拒绝请求',
  404: '未找到',
  405: '方法禁用',
  406: '不接受',
  407: '需要代理授权',
  408: '请求超时',
  409: '冲突',
  410: '已删除',
  411: '需要有效长度',
  412: '未满足前提条件',
  413: '413', // 请求实体过大
  414: '请求的 URI 过长',
  415: '不支持的媒体类型',
  416: '请求范围不符合要求',
  417: '417', // 未满足期望值
  500: '服务器内部错误',
  501: '尚未实施',
  502: '错误网关',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP 版本不受支持'
}
// let glFn = {
//   stop () {
//     let mo = function (e) {e.preventDefault()}
//     document.body.style.overflow = 'hidden'
//     // document.addEventListener("touchmove",mo,false);//禁止页面滑动
//   },
//   /***取消滑动限制***/
//   move () {
//     let mo = function (e) {e.preventDefault()}
//     document.body.style.overflow=''//出现滚动条
//     document.removeEventListener("touchmove", mo, false);
//   }
// }
export default{
  userInfo,
  userStatus,
  HTTPStatusCode
  // glFn
}
</script>
