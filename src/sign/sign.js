import api from '@/servers/index'


//存储签名
const saveSign = (obj) => {
  let h5Sign = signToString(obj)
  sessionStorage.setItem('h5Sign', h5Sign)
  return h5Sign
}

//是否正规的签名对象
const isH5SignObj = (signObj) => {
  return 'object' === typeof (signObj) && signObj.sign != undefined
}

//获取签名对象（防空解析）
const getH5signObj = () => {
  let h5Sign = sessionStorage.getItem('h5Sign');
  return h5sign ? JSON.parse(h5Sign) : {};
}

//添加签名
const addSign = (addParam, oldParamObj) => {
  if (addParam !== undefined && 'object' === typeof (addParam)) {
    let h5SignObj = oldParamObj || getH5signObj();

    //过滤不正确格式
    if (isH5SignObj(h5SignObj)) {
      if (h5SignObj.addParam == undefined) {
        h5SignObj.addParam = {}
      }
      for (key in addParam) {
        h5SignObj.addParam[key] = addParam[key]
      }
    }
    return h5SignObj
  }
}

//前面对象转json字符串
const signToString = (signObj) => {
  return 'object' === typeof (signObj) ? JSON.stringify(signObj) : signObj
}

//签名转字符串
const addSignToString = (addParam, oldParam) => {
  let signObj = addSign(addParam, oldParam)
  return isH5SignObj(signObj) ? addSignToString() : ''
}

//获取请求头
const signHeader = (addParam) => {
  let header = {
    "Content-Type":"application/json;charset=utf8"
  };

  header.h5Sign = addParam !== undefined
    ? addSignToString(addParam)
    : sessionStorage.getItem('h5Sign')

  return header;

}

//获取头部和覆盖保存签名
const signHeaderAddSave = (signObj) => {
  let header = signHeader()
  header.h5Sign = isH5SignObj(signObj) ? saveSign(signObj) : ""
  return header;
}

//添加签名
const addSignAndSave = (addParam,oldParam) => {
  let h5Sign = ''
  let header = signHeader()
  if (header.h5Sign) {
      api.addSign(signToString(addParam),header)
  }
  return saveSign(h5Sign)
}



export default {
  saveSign,
  isH5SignObj,
  getH5signObj,
  addSign,
  signToString,
  addSignToString,
  signHeader,
  signHeaderAddSave,
  addSignAndSave,
}

