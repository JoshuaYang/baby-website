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
];

const result = _.groupBy(data, 'monthAge');

export default result;
