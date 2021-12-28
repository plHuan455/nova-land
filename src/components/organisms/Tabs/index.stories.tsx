import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import { Tab, TabPanel, Tabs } from '.';

import Container from 'components/organisms/Container';

export default {
  title: 'Components/organisms/Tabs',
  component: Tabs,
  argTypes: {},
} as Meta;

const dummyData = [
  {
    label: 'Tin Tập Đoàn',
    content: 'Content 1',
  },
  {
    label: 'Tin Thị Trường',
    content: 'Content 2',
  },
  {
    label: 'Tin Dự án',
    content: 'Content 3',
  },
];

export const Normal: Story = () => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div style={{ background: '#bfbfbf' }}>
      <Container>
        <Tabs variableMutate={indexActive}>
          {
            dummyData.map((item, index) => (
              <Tab
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexActive}
                handleClick={() => setIndexActive(index)}
              />
            ))
          }
        </Tabs>
        {
          dummyData.map((item, index) => (
            <TabPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
              {item.content}
            </TabPanel>
          ))
        }
      </Container>
    </div>
  );
};
