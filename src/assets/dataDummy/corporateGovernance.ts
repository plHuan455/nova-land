import { dataBodyList, dataHeaderList } from './tableCategory';

import { dataTabsType } from 'components/templates/CorporateGovernance';

const dataCorporateGovernanceList: dataTabsType[] = [
  {
    titleTab: '2021',
    dataTab: [
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
    ],
  },
  {
    titleTab: '2020',
    dataTab: [],
  },
  {
    titleTab: '2019',
    dataTab: [],
  },
  {
    titleTab: '2018',
    dataTab: [],
  },
  {
    titleTab: '2017',
    dataTab: [],
  },
  {
    titleTab: '2016',
    dataTab: [],
  },
  {
    titleTab: '2015',
    dataTab: [],
  },
  {
    titleTab: '2014',
    dataTab: [],
  },
  {
    titleTab: '2013',
    dataTab: [],
  },
  {
    titleTab: '2012',
    dataTab: [],
  },
];

export default dataCorporateGovernanceList;
