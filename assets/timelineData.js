import _ from 'lodash';

const data = [
  {
    monthAge: 0,
    title: '乙肝疫苗（HepB）第1針',
  },
  {
    monthAge: 0,
    title: '卡介苗（BCG）第1針',
  },
  {
    monthAge: 1,
    title: '乙肝疫苗（HepB）第2針',
  },
  {
    monthAge: 2,
    title: '脊灰滅活疫苗（IPV）第1針',
  },
  {
    monthAge: 3,
    title: '脊灰減毒活疫苗（OPV）第1針',
  },
  {
    monthAge: 3,
    title: '百白破疫苗（DTaP）第1針',
  },
  {
    monthAge: 4,
    title: '脊灰減毒活疫苗（OPV）第2針',
  },
  {
    monthAge: 4,
    title: '百白破疫苗（DTaP）第2針',
  },
  {
    monthAge: 5,
    title: '百白破疫苗（DTaP）第3針',
  },
  {
    monthAge: 6,
    title: '乙肝疫苗（HepB）第3針',
  },
  {
    monthAge: 6,
    title: 'A群流腦多糖疫苗（MPSV-A）第1針',
  },
  {
    monthAge: 8,
    title: '麻風疫苗（MR）第1針',
  },
  {
    monthAge: 8,
    title: '乙腦減毒活疫苗（JE-L）第1針',
  },
  {
    monthAge: 9,
    title: 'A群流腦多糖疫苗（MPSV-A）第2針',
  },
  {
    monthAge: 18,
    title: '百白破疫苗（DTaP）第4針',
  },
  {
    monthAge: 18,
    title: '麻腮風疫苗（MMR）第1針',
  },
  {
    monthAge: 18,
    title: '甲肝滅活疫苗（HepA-I）第1針',
  },

  {
    monthAge: 24,
    title: '乙腦減毒活疫苗（JE-L）第2針',
  },
  {
    monthAge: 24,
    title: '甲肝滅活疫苗（HepA-I）第2針',
  },
  {
    monthAge: 36,
    title: 'A+C群流腦多糖疫苗（MPSV-A）第1針',
  },
  {
    monthAge: 48,
    title: '脊灰減毒活疫苗（OPV）第3針',
  },
  {
    monthAge: 72,
    title: '白破疫苗（DT）第1針',
  },
  {
    monthAge: 72,
    title: 'A+C群流腦多糖疫苗（MPSV-A）第2針',
  },

  {
    monthAge: 0.5,
    title: '補充AD',
  },
  {
    monthAge: 0.5,
    title: '補充維生素D',
  },
];

// 根據月齡分組，鍵為月齡
const groupDatas = _.groupBy(data, 'monthAge');

// 將分組的鍵根據時間先後排序
const sortedKeys = Object.keys(groupDatas).sort((x, y) => x - y);

// 根據時間先後，構建出最終數組
const result = sortedKeys.map(key => ({
  monthAge: key,
  data: groupDatas[key],
}));

export default result;
