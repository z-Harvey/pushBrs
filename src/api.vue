<script>
import axios from 'axios'

// const path = ''
const path = '/api'

let headerToken = (token) => {
  axios.defaults.headers.Authorization = 'JWT ' + token
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
let positionList = (success, error) => {
  axios.get(path + '/position/?link=' + (Date.parse(new Date()) + 3)).then((res) => {
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
  axios.get(path + '/industry/?' + data).then(function (res) {
    success(res)
  }, function (err) {
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
  axios.get(path + '/area/?' + data).then(function (res) {
    success(res)
  }, function (err) {
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
 * 投递简历
 */
let postMyApply = (data, success, error) => {
  axios.post(path + '/MyApply/', data).then((res) => {
    success(res)
  }, (err) => {
    error(err.response)
  })
}

export default{
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
  postMyApply
}
</script>
