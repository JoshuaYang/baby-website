import request from '@/assets/utils/request'

// 獲取時間線列表
export async function queryTimelines (params) {
  return request('/baby/timelines', {
    method: 'GET'
  })
}
