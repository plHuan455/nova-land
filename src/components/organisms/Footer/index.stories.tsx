/* eslint-disable react-hooks/rules-of-hooks */
import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

import Footer, { FooterRegisterFormTypes } from '.';

import footerMenuData from 'assets/dataDummy/footer';
import registerSchema from 'utils/schemas';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

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
        externalLink={{
          privacy: '/',
          policy: '/',
        }}
        footerLink={footerMenuData}
      />
    </BrowserRouter>
  );
};
