import axios from 'axios'

var baseURL
    baseURL = 'https://www.yidegz.cn'  // 正式环境
    // baseURL = 'https://www.yidegz.cn:10008'  // 测试环境

const xhr = axios.create({
   baseURL,
   timeout:10000,
})

//post请求,needHeader参数用于判断是否要认证 
const postData = (url,data,header)=>{
    return new Promise((resolve,reject)=>{
       xhr({url,data,header,method:'post'})
       .then(res => {
            resolve(res.data)
       })
       .catch(err => reject(err))
    })
}


//get请求，needHeader参数用于判断是否要认证
const getData = (url,params,header) => {
   return new Promise((resolve,reject) => {
      xhr.get({url,params,header})
      .then(res => {
          resolve(res.data)
      })
      .catch(err => reject(err))
   })
}

// 加签请求
const addSign = (reqData,header) => {
   let url = '/activity/share/h5AddSign'
   postData(url,reqData,header)
}





export default{
   addSign,
}
