import { Story, Meta } from '@storybook/react';
import React from 'react';

import WorkEnvironment from '.';

import image1 from 'assets/images/WorkEnvironment/image1.png';
import image2 from 'assets/images/WorkEnvironment/image2.png';
import image3 from 'assets/images/WorkEnvironment/image3.png';

export default {
  title: 'Components/templates/WorkEnvironment',
  component: WorkEnvironment,
  argTypes: {},
} as Meta;

const listImage = [
  image1,
  image2,
  image3,
  image1,
];

export const normal: Story = () => (
  <div style={{
    paddingLeft: 86,
    paddingRight: 86,
  }}
  >
    <WorkEnvironment
      title="môi trường làm việc tại novaland"
      listImage={listImage}
    />
  </div>
);
