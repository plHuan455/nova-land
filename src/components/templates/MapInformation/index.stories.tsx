import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MapInformation, { MapInformationCard } from '.';

import dataMapInformation from 'assets/dataDummy/mapInformation';

export default {
  title: 'Components/templates/MapInformation',
  component: MapInformation,
  argTypes: {},
} as Meta;

export const card: Story = () => (
  <div style={{ maxWidth: '448px', height: '100vh', margin: '20px' }}>
    <Router>
      <MapInformationCard
        {...dataMapInformation[0].dataMarker}
      />
    </Router>
  </div>
);

export const normal: Story = () => (
  <div style={{
    width: '100%',
    height: '100vh',
    padding: '40px',
  }}
  >
    <Router>
      <MapInformation
        mapAPIkey="AIzaSyAt4eV8aoSdhKXHQSQvJc7aSEGlcnUVbdo"
        mapMarker={dataMapInformation}
      />
    </Router>
  </div>
);
