<script>
import axios from 'axios'

// const path = ''
const path = '/api'

let headerToken = (token) => {
  axios.defaults.headers.Authorization = 'JWT ' + token
}

/**
 * JSSDK
 */
let JSSDK = (success, error) => {
  axios.get(path + '/JsSignature/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 登录 post {code: '1'}
 */
let login = (data, success, error) => {
  axios.post(path + '/login/', data).then((res) => {
    success(res)
    headerToken(res.data.token)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 发送验证码 post {mobile : '18888888888'}
 */
let verifyCode = (data, success, error) => {
  axios.post(path + '/verify_code/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 注册 post {mobile : 1888888, token : ****, verify_code : 111111}
 */
let register = (data, success, error) => {
  axios.post(path + '/register/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 职位列表 get
 */
let positionList = (data, success, error) => {
  axios.get(path + '/position/?link=' + (Date.parse(new Date()) + 3) + '&' + data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 职位详情 get
 */
let positionInfo = (id, success, error) => {
  axios.get(path + '/position/' + id + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 公司信息 头部 get
 */
let companyHeader = (id, success, error) => {
  axios.get(path + '/company_header/' + id + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 公司信息 get
 */
let companyInfo = (id, success, error) => {
  axios.get(path + '/company/' + id + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 实地验证 get
 */
let companySdyz = (id, success, error) => {
  axios.get(path + '/company_sdyz/' + id + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 再招职位 get company=id
 */
let positionZz = (data, success, error) => {
  axios.get(path + '/position/?link=' + (Date.parse(new Date()) + 3) + '&' + data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 检查目前拥有的简历类型 get
 */
let resumeCheck = (success, error) => {
  axios.get(path + '/resume_check/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 创建个人简历时，获取初始信息 get  {id}
 * advantage  我的优势
 * attachment  附件 e
 * city  期望城市
 * edu_history  教育经历  e
 * industry  期望行业
 * job_status  求职状态
 * position  期望职位
 * salary  期望薪资
 * user {  头部信息
 *   avatar  头像
 *   gender  性别
 *   name  姓名
 *   user  ID
 * }
 * work_history  工作经历 e
 */
let getResumeInit = (id, success, error) => {
  axios.get(path + '/resume/' + id + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 行业接口
 */
let getSearchIndustry = function (data, success, error) {
  axios.get(path + '/industry/?' + data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 图片上传 type  头像 = 1，附件 = 2
 */
let uploadImg = (data, success, error) => {
  axios.post(path + '/upload/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 获取城市列表
 * pid=****
 */
let getAreaList = function (data, success, error) {
  axios.get(path + '/area/?' + data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 提交微简历
 */
let postResume = (data, success, error) => {
  axios.post(path + '/resume/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 修改微简历
 */
let putResume = (data, success, error) => {
  axios.put(path + '/resume/' + Date.parse(new Date()) + '/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 投递简历
 */
let postMyApply = (data, success, error) => {
  axios.post(path + '/MyApply/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * '我'界面信息
 */
let myInfo = function (success, error) {
  axios.get(path + '/mine/' + (Date.parse(new Date()) + 3) + '/').then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 我的投递列表 status = 0-待反馈 1-代面试。2-已完成
 */
let MyApplyList = function (data, success, error) {
  axios.get(path + '/MyApply/?link=' + (Date.parse(new Date()) + 3) + '&' + data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 投递详情 id
 */
let MyApplyInfo = function (data, success, error) {
  axios.get(path + '/MyApply/' + data + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 我的微简历 user
 */
let MyResume = function (success, error) {
  axios.get(path + '/resume/' + Date.parse(new Date()) + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 我的简历附件 user
 */
let MyResumeFile = function (success, error) {
  axios.get(path + '/resume_file/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 删除我的微简历 user
 */
let deleteResumeFile = function (success, error) {
  axios.delete(path + '/resume_file/' + Date.parse(new Date()) + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 获取个人信息数据
 */
let getuserInfo = function (success, error) {
  axios.get(path + '/user/' + Date.parse(new Date()) + '/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 修改个人信息数据
 */
let putUserInfo = function (data, success, error) {
  axios.put(path + '/user/' + Date.parse(new Date()) + '/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 收藏 {position : id}
 */
let postFavPosition = (data, success, error) => {
  axios.post(path + '/fav_position/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 取消收藏 {position : id}
 */
let delectFavPosition = (data, success, error) => {
  axios.delete(path + '/fav_position/' + data + '/').then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
/**
 * 收藏列表
 */
let getFavPosition = function (success, error) {
  axios.get(path + '/fav_position/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}
export default{
  JSSDK,
  getFavPosition, // 职位收藏
  postFavPosition, // 收藏
  delectFavPosition, // 取消收藏
  deleteResumeFile, // 删除简历附件
  getuserInfo, // 获取个人信息数据
  putUserInfo, // 修改个人信息数据
  MyResumeFile, // 我的简历附件
  MyResume, // 我的微简历
  MyApplyList, // 我的投递列表
  MyApplyInfo, // 投递详情
  login, // 登录
  verifyCode, // 发送验证码
  register, // 注册
  positionList, // 职位列表
  positionInfo, // 职位详情
  companyHeader, // 公司信息 头部
  companyInfo, // 公司信息
  companySdyz, // 实地验证
  positionZz, // 在招职位
  resumeCheck, // 检查目前拥有的简历类型
  getResumeInit, // 创建个人简历时，获取初始信息
  getSearchIndustry, // 获取行业接口
  uploadImg, // 上传图片获取路径
  getAreaList, // 城市接口
  postResume, // 提交微简历
  putResume, // 修改微简历
  postMyApply,
  myInfo // '我'界面信息
}
</script>
