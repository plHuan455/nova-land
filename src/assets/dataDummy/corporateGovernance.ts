import { dataBodyList, dataHeaderList } from './tableCategory';

import { TitleTabType } from 'components/templates/CorporateGovernance';
import { TableCategoryProps } from 'components/templates/TableCategory';

const dataCorporateGovernanceList: TableCategoryProps[] = [
  {
    dataHeader: dataHeaderList,
    dataBody: dataBodyList,
    totalPage: 10,
  },
  {
    dataHeader: [
      {
        id: 1,
        value: 'CÔNG BỐ KẾT QUẢ KINH DOANH',
      },
      {
        id: 2,
        value: 'Quý 1',
      },
      {
        id: 2,
        value: 'Quý 2',
      },
      {
        id: 3,
        value: 'Quý 3',
      },
      {
        id: 4,
        value: 'Quý 4',
      },
    ],
    dataBody: [
      {
        documentName: 'Tóm tắt kết quả kinh doanh</br>(Tài Liệu Thuyết Trình)',
        dataByQuarter: new Array(4).fill({ data: '' }),
      },
    ],
    totalPage: 2,
  },
];

export const dataTitleTab: TitleTabType[] = [
  {
    id: 1,
    year: '2021',
  },
  {
    id: 2,
    year: '2020',
  },
  {
    id: 3,
    year: '2019',
  },
  {
    id: 4,
    year: '2018',
  },
  {
    id: 5,
    year: '2017',
  },
  {
    id: 6,
    year: '2016',
  },
  {
    id: 7,
    year: '2015',
  },
  {
    id: 8,
    year: '2014',
  },
  {
    id: 9,
    year: '2013',
  },
  {
    id: 10,
    year: '2012',
  },
];

export default dataCorporateGovernanceList;
