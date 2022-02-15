import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import InvestmentRelationsOtherDocument from '.';

import RegulationsList from 'assets/dataDummy/InvestmentRelationsOtherDocument';
import { OptionType } from 'components/molecules/Pulldown';

export default {
  title: 'Components/templates/InvestmentRelationsOtherDocument',
  component: InvestmentRelationsOtherDocument,
  argTypes: {},
} as Meta;

const dummyOption: OptionType[] = [
  { value: '1', label: 'Gần đây' },
  { value: '2', label: 'Mới nhất' },

];
export const normal: Story = () => (
  <BrowserRouter>
    <InvestmentRelationsOtherDocument
      dataMenu={[]}
      dataRegulations={RegulationsList}
      sortOptions={dummyOption}
      totalPage={1}
      handleChangePage={() => {}}
      handleSort={() => {}}
    />
  </BrowserRouter>
);
