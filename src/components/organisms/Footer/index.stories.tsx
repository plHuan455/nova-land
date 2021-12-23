/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

import Footer, { FooterRegisterFormTypes } from '.';

import footerMenuData from 'assets/dataDummy/footer';
import { OptionType } from 'components/molecules/Pulldown';
import registerSchema from 'utils/schemas';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;
const dummyOption: OptionType[] = [
  { value: 'Quan1', label: 'Quan 1' },
  { value: 'Quan2', label: 'Quan 2' },
  { value: 'Quan3', label: 'Quan 3' },
  { value: 'Quan4', label: 'Quan 4' },
  { value: 'Quan5', label: 'Quan 5' },
  { value: 'Quan6', label: 'Quan 6' },
  { value: 'Quan7', label: 'Quan 7' },
  { value: 'Quan8', label: 'Quan 8' },
  { value: 'Quan9', label: 'Quan 9' },
];
export const normal: Story = () => {
  const method = useForm<FooterRegisterFormTypes>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
      fullname: '',
      email: '',
    },
  });
  const handleSubmit = (data: FooterRegisterFormTypes) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <BrowserRouter>
      <Footer
        method={method}
        submitForm={handleSubmit}
        projectOptions={dummyOption}
        externalLink={{
          privacy: '/',
          policy: '/',
        }}
        footerLink={footerMenuData}
      />
    </BrowserRouter>
  );
};
