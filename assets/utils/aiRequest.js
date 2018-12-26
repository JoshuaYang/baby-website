import axios from 'axios'
import md5 from 'md5'
import qs from 'querystring'

const APP_ID = 1106949372
const APP_KEY = 'sa45ZXOZfg87cvMo'

function generateFullParams (params) {
  const paramsCopy = {
    app_id: APP_ID,
    time_stamp: parseInt(Date.now() / 1000),
    nonce_str: Math.random().toString(36).slice(-5),

    ...params
  }

  // 将<key, value>请求参数对按key进行字典升序排序，得到有序的参数对列表N
  const listN = Object.keys(paramsCopy).sort().map(key => ({
    key,
    value: paramsCopy[key]
  }))

  // 将列表N中的参数对按URL键值对的格式拼接成字符串，得到字符串T（如：key1=value1&key2=value2），URL键值拼接过程value部分需要URL编码，URL编码算法用大写字母，例如%E8，而不是小写%e8
  const stringT = listN.map(item =>
    `${item.key}=${encodeURIComponent(item.value)}`
  ).join('&')

  // 将应用密钥以app_key为键名，组成URL键值拼接到字符串T末尾，得到字符串S（如：key1=value1&key2=value2&app_key=密钥)
  const stringS = `${stringT}&app_key=${APP_KEY}`

  // 对字符串S进行MD5运算，将得到的MD5值所有字符转换成大写，得到接口请求签名
  const sign = md5(stringS).toUpperCase()

  return {
    ...paramsCopy,
    sign
  }
}

export async function aiPost (url, options) {
  const params = generateFullParams(options.body)

  return axios.post(url, qs.stringify(params))
}
