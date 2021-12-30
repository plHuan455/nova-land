import { yupResolver } from '@hookform/resolvers/yup';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';

import Footer, { FooterRegisterFormTypes } from '.';

import footerMenuData from 'assets/dataDummy/footer';
import { dummyOption } from 'container/Footer';
import registerSchema from 'utils/schemas';

storiesOf('Components/organisms/Footer', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('normal', () => {
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
    );
  });
