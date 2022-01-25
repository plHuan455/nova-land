import { storiesOf } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '.';

import headerMenuDummy from 'assets/dataDummy/header';
import logo from 'assets/images/logo.png';

storiesOf('Components/organisms/Header', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('normal', () => (
    <div style={{ height: '130vh' }}>
      <Header
        headerMenu={headerMenuDummy}
        logoSrc={logo}
      />
    </div>
  ));
