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
    titleTab: '2021',
  },
  {
    titleTab: '2020',
  },
  {
    titleTab: '2019',
  },
  {
    titleTab: '2018',
  },
  {
    titleTab: '2017',
  },
  {
    titleTab: '2016',
  },
  {
    titleTab: '2015',
  },
  {
    titleTab: '2014',
  },
  {
    titleTab: '2013',
  },
  {
    titleTab: '2012',
  },
];

export default dataCorporateGovernanceList;
