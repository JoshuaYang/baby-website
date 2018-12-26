import axios from 'axios'

const APP_ID = 1106949372
const APP_KEY = 'sa45ZXOZfg87cvMo'

console.log(APP_ID, APP_KEY)

// 獲取時間線列表
export async function textTrans (params) {
  return axios.post('https://api.ai.qq.com/fcgi-bin/nlp/nlp_texttrans', {
    ...params
  })
}
