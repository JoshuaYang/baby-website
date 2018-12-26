import {
  aiPost
} from '@/assets/utils/aiRequest'

// 獲取時間線列表
export async function textTrans (params) {
  return aiPost('/fcgi-bin/nlp/nlp_texttrans', {
    body: params
  })
}
