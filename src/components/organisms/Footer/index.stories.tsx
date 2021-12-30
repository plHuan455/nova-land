import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router } from 'react-router-dom';

import Footer, { FooterRegisterFormTypes } from '.';

import footerMenuData from 'assets/dataDummy/footer';
import { dummyOption } from 'container/Footer';
import registerSchema from 'utils/schemas';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
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
    <Router>
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
    </Router>
  );
};
