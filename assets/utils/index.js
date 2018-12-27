import _ from 'lodash'

export function parseTimelineData (data) {
  // 根據月齡分組，鍵為月齡
  const groupMonthAgeDatas = _.groupBy(data, 'monthAge')

  // 將分組的鍵根據時間先後排序
  const sortedKeys = Object.keys(groupMonthAgeDatas).sort((x, y) => x - y)

  // 根據時間先後，構建出最終數組
  const timelineData = sortedKeys.map(key => {
    const groupMonthAgeData = groupMonthAgeDatas[key]

    const groupCategoryDatas = _.groupBy(groupMonthAgeData, 'category.name')

    const groupCategoryData = []
    for (const [key, value] of Object.entries(groupCategoryDatas)) {
      groupCategoryData.push({
        name: key,
        items: value
      })
    }

    // console.log(groupCategoryData)

    // console.log(key, 'xxx', groupCategoryData)

    return {
      monthAge: +key,
      categories: groupCategoryData
    }
  })

  return timelineData
}
