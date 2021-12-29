import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import footerMenuData from 'assets/dataDummy/footer';
import { OptionType } from 'components/molecules/Pulldown';
import Footer, { FooterRegisterFormTypes } from 'components/organisms/Footer';
import registerSchema from 'utils/schemas';

interface FooterContainerProps {
}

export const dummyOption: OptionType[] = [
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

const FooterContainer: React.FC<FooterContainerProps> = () => {
  const method = useForm<FooterRegisterFormTypes>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
    defaultValues: {
      phone: '',
      fullname: '',
      email: '',
    },
  });

  const handleSubmit = useCallback((data: FooterRegisterFormTypes) => {
    // eslint-disable-next-line no-console
    console.log(data);
  }, []);

  return (
    <Footer
      projectOptions={dummyOption}
      externalLink={{
        privacy: '/',
        policy: '/',
      }}
      footerLink={footerMenuData}
      method={method}
      submitForm={handleSubmit}
    />
  );
};

export default FooterContainer;
