import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import EventList from '.';

describe('<EventList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <EventList
          eventList={[]}
          totalPage={0}
          handleGetPage={() => {}}
        />
      </BrowserRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
