import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { OptionType } from 'components/molecules/Pulldown';
import Footer, { FooterRegisterFormTypes, SocialListTypes } from 'components/organisms/Footer';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getSystemAsync } from 'store/system';
import { getImageURL } from 'utils/functions';
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
  const { dataSystem } = useAppSelector((state) => state.system);
  const menuList = useAppSelector((state) => state.menus.groupedFooter);

  const dispatch = useAppDispatch();

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

  const socialLink: SocialListTypes[] | undefined = useMemo(
    () => dataSystem?.header.social?.map((val) => ({
      iconName: val.icon,
      url: val.link?.url,
      target: val.link?.target,
    })),
    [dataSystem],
  );

  useEffect(() => {
    dispatch(getSystemAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Footer
      imgLogo={getImageURL(dataSystem?.logo)}
      projectOptions={dummyOption}
      footerLink={menuList}
      method={method}
      submitForm={handleSubmit}
      externalPolicyLink={{
        namePolicy: dataSystem?.footer.policy.text,
        policyLink: dataSystem?.footer.policy.url,
        target: dataSystem?.footer.policy.target,
      }}
      externalPrivacyLink={{
        namePrivacy: dataSystem?.footer.terms.text,
        privacyLink: dataSystem?.footer.terms.url,
        target: dataSystem?.footer.terms.target,
      }}
      copyright={dataSystem?.footer.copyright}
      title={dataSystem?.footer.title}
      description={dataSystem?.footer.description}
      email={dataSystem?.header.email}
      phoneCskh={dataSystem?.header.phoneCskh}
      socialList={socialLink}
    />
  );
};

export default FooterContainer;
