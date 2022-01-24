import React from 'react';
import ReactDOM from 'react-dom';

import ReportList from '.';

import reportList from 'assets/dataDummy/reportList';

describe('<ReportList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ReportList
        totalPage={5}
        currentPage={1}
        reportList={reportList.ReportListDumy}
      />, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
