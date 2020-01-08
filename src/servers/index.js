import axios from 'axios'

var baseURL
baseURL = 'https://www.yidegz.cn'  // 正式环境
// baseURL = 'http://www.yidegz.cn:10008'  // 测试环境

const xhr = axios.create({
    baseURL,
    timeout: 10000,
    // headers: {
    //     'Content-Type': 'application/json;charset=UTF-8',
    //     h5Sign: sessionStorage.getItem('h5Sign')
    // }
})



//post请求
const postData = (url,data,headers) => {
    return new Promise((resolve, reject) => {
        xhr({ url, data,headers, method: 'post' })
            .then(res => {
                resolve(res)
            })
            .catch(err => reject(err))
    })
}


//获取简介
const postInfo = (reqData,headers) => {
    let url = '/activity/goods/listActivityById'
    return postData(url, reqData,headers)
}

//获取列表
const postList = (reqData,headers) => {
    let url = '/activity/goods/listActivityGoodsByPage'
    return postData(url,reqData,headers)
}

//获取app用户默认地址
const postDefaultAddress = (reqData,headers) => {
    let url = '/user/address/getUserDefaultAddress'
    return postData(url,reqData,headers)
}


export default {
    postInfo,
    postList,
    postDefaultAddress,
}
