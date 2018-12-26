import {
  aiPost
} from '@/assets/utils/aiRequest'

// 文本翻譯
export async function textTrans (params) {
  return aiPost('/fcgi-bin/nlp/nlp_texttrans', {
    body: params
  })
}

// 智能闲聊
export async function textChat (params) {
  return aiPost('/fcgi-bin/nlp/nlp_textchat', {
    body: params
  })
}

// 意圖成分
export async function wordCom (params) {
  return aiPost('/fcgi-bin/nlp/nlp_wordcom', {
    body: params
  })
}

// 情感分析
export async function textPolar (params) {
  return aiPost('/fcgi-bin/nlp/nlp_textpolar', {
    body: params
  })
}
