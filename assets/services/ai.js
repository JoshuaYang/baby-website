import axios from 'axios'
import md5 from 'md5'
import qs from 'querystring'

const APP_ID = 1106949372
const APP_KEY = 'sa45ZXOZfg87cvMo'

function objKeySort (obj) {
  // 排序的函数
  var newkey = Object.keys(obj).sort()
  var newObj = {}

  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]]
  }

  return newObj
}

function getReqSign (params) {
  // 1. 字典升序排序
  params = objKeySort(params)

  // 2. 拼按URL键值对
  let sign = ''

  Object.keys(params).forEach(function (key) {
    sign += key + '=' + encodeURIComponent(params[key]) + '&'
  })

  // 3. 拼接app_key
  sign += 'app_key' + '=' + APP_KEY

  // 4. MD5运算+转换大写，得到请求签名
  sign = md5(sign).toUpperCase()

  return sign
}

function aiRequest (url, options) {
  const opts = {
    method: 'post',
    data: {},
    ...options
  }

  return axios({
    url: url,
    method: opts.method,
    data: qs.stringify(opts.data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

// 獲取時間線列表
export async function textTrans (params) {
  const paramObj = {
    app_id: APP_ID,
    time_stamp: parseInt(Date.now() / 1000),
    nonce_str: Math.random().toString(36).slice(-5),

    ...params
  }

  paramObj.sign = getReqSign(paramObj)

  return aiRequest('/fcgi-bin/nlp/nlp_texttrans', {
    method: 'post',
    data: paramObj
  })
}

export async function getWeather (params) {
  return axios.get('https://free-api.heweather.net/s6/weather/now?location=116.40,39.9&key=61a60edcab744743905f53cb86ee9e86')
}
