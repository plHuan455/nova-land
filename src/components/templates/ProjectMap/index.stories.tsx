import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProjectMap from '.';

import listProjectMap from 'assets/dataDummy/projectMap';
import img from 'assets/images/ProjectMap/map.png';

export default {
  title: 'Components/templates/ProjectMap',
  component: ProjectMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ProjectMap
    image={{ height: 725, path: img, width: 471 }}
    listCategory={listProjectMap}
    textProject="DỰ ÁN"
    idActive={0}
    handleSelect={() => {}}
  />
);
