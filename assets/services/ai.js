import axios from 'axios'

const APP_ID = 1106949372
const APP_KEY = 'sa45ZXOZfg87cvMo'

console.log(APP_ID, APP_KEY)

// 獲取時間線列表
export async function textTrans (params) {
  return axios.post('/fcgi-bin/nlp/nlp_texttrans', {
    app_id: '',
    time_stamp: '',
    nonce_str: '',
    sign: '',

    ...params
  })
}

export async function getWeather (params) {
  return axios.get('https://free-api.heweather.net/s6/weather/now?location=116.40,39.9&key=61a60edcab744743905f53cb86ee9e86')
}
