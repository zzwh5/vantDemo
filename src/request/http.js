import axios from 'axios'
import qs from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
// vant的toast提示框组件，大家可根据自己的ui组件更改。
// import { Toast } from 'vant';
import { Notify } from 'vant';

const baseUrl = process.env.VUE_APP_BASE_API
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})

// 请求拦截
axios.interceptors.request.use(
  // config => {        
  //     // 每次发送请求之前判断vuex中是否存在token        
  //     // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  //     // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
  //     const token = store.state.token;        
  //     token && (config.headers.Authorization = token);        
  //     return config;    
  // },    
  // async error => {
  //   return Promise.reject(error);
  // }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 200) {
      Notify({ type: "warning", message: res.msg || '请稍后重试' });
    } else {
      Notify({ type: "success", message: "success", duration: 500 });
    }
    return res
  },
  async error => {
    // console.dir(error);
    Notify({ type: "danger", message: "连接服务器超时" });
    return Promise.reject(error);
  }
)

// 封装get请求
export function get(url, params) {
  return new Promise((resolve, reject) => {
    // axios({
    //   method: 'get',
    //   url: url,
    //   params: params,
    //   // headers: {
    //   // 'token': store.state.token,
    //   // 'content-type': 'application/x-www-form-urlencoded'
    //   // }
    // }).then(res => {
    //   resolve(res.data);
    // });

    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  })
}

// 封装post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    // console.log(url)
    // console.log(baseUrl + url) 
    axios({
      method: 'post',
      url: baseUrl + url,
      data: {},
      headers: {
        // 'token': store.state.token,
        'content-type': 'application/x-www-form-urlencoded'
      }
    }).then(res => {
      console.log(res)
      resolve(res.data);
    }).catch(error => {
      console.log(error)
      reject(error)
    });
  })
}