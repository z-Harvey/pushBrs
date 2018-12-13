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
  axios.get(path + '/position//?link=' + (Date.parse(new Date()) + 3) + '&' + data).then((res) => {
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
  positionZz // 在招职位
}
</script>
