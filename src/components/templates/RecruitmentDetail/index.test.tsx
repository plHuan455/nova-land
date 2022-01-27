import React from 'react';
import ReactDOM from 'react-dom';

import RecruitmentDetail from '.';

import {
  content, dataBanner, listInfoData, listRelatedJobData,
} from 'assets/dataDummy/recruimentDetail';

describe('<RecruitmentDetail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <RecruitmentDetail
        content={content}
        dataBanner={dataBanner}
        listInfo={listInfoData}
        listRelatedJob={listRelatedJobData}
        onClickApply={() => {}}
        onClickShare={() => {}}
      />, div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
