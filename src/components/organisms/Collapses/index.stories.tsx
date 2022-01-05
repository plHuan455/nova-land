import { Story, Meta } from '@storybook/react';
import React from 'react';

import Collapses from '.';

export default {
  title: 'Components/organisms/Collapses',
  component: Collapses,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Collapses active title="NovaWorld Ho Tram The Tropicana">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit tristique tellus felis odio
      ut massa pellentesque massa condimentum. Lobortis eu lectus enim ullamcorper hac nibh. Nunc
      sem egestas libero ultrices. Aliquet ultrices ultrices aliquam et consequat ac, aliquam.
      Pulvinar lorem aliquet nunc lacus vel viverra praesent. Tincidunt amet dignissim feugiat amet
      vitae sagittis. Leo donec adipiscing nisl malesuada. Diam magna vitae, duis morbi. Est, massa
      pharetra massa eleifend. A elementum.
    </div>
  </Collapses>
);
