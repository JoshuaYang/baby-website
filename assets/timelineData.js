import _ from 'lodash';

const data = [
  {
    monthAge: 1,
    title: '打针1',
  },
  {
    monthAge: 1,
    title: '打针b',
  },
  {
    monthAge: 4,
    title: '打针xxx',
  },
  {
    monthAge: 3,
    title: '打针xxx',
  },
  {
    monthAge: 2,
    title: '打针xxx',
  },
  {
    monthAge: 0.5,
    title: 'AD',
  },
];

// 根據月齡分組，鍵為月齡
const groupDatas = _.groupBy(data, 'monthAge');

// 將分組的鍵根據時間先後排序
const sortedKeys = Object.keys(groupDatas).sort();

// 根據時間先後，構建出最終數組
const result = sortedKeys.map(key => ({
  monthAge: key,
  data: groupDatas[key],
}));

export default result;
