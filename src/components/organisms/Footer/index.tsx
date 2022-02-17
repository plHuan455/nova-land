import React from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Container, { CustomCol, CustomRow } from '../Container';
import Form from '../Form';

import bgFooter from 'assets/images/bg-footer.png';
import logoImg from 'assets/images/footer-logo.png';
import Button from 'components/atoms/Button';
import Image from 'components/atoms/Image';
import { InputHookForm } from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { OptionType, PulldownHookForm } from 'components/molecules/Pulldown';
import { MenuItemDataTypes } from 'services/menus/types';
import { checkExternalUrl, getImageURL } from 'utils/functions';

export type SocialListTypes = {
  iconName?: string;
  url?: string;
  target?: string;
}

export type FooterRegisterFormTypes = {
  fullname: string;
  phone: string;
  email: string;
  project?: OptionType | null;
}

interface FooterProps {
  imgLogo?: string;
  footerLink?: MenuItemDataTypes[];
  method?: UseFormReturn<FooterRegisterFormTypes>;
  submitForm?: SubmitHandler<FooterRegisterFormTypes>;
  projectOptions: OptionType[];
  externalPolicyLink?: {
    namePolicy?: string;
    policyLink?: string;
    target?: string;
  }
  externalPrivacyLink?: {
    namePrivacy?: string;
    privacyLink?: string;
    target?: string;
  }
  copyright?: string;
  title?: string;
  description?: string;
  email?: string;
  phoneCskh?: string;
  socialList?: SocialListTypes[];
  loadingBtn?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  imgLogo,
  footerLink,
  externalPolicyLink,
  externalPrivacyLink,
  method,
  submitForm,
  projectOptions,
  copyright,
  title,
  description,
  email,
  phoneCskh,
  socialList,
  loadingBtn,
}) => {
  const { t } = useTranslation();

  return (
    <footer className="o-footer" style={{ backgroundImage: `url(${bgFooter})` }}>
      <Container>
        <div className="o-footer_main">
          <CustomRow>
            <CustomCol lg={7}>
              {/* Main Menu Footer  */}
              <div className="o-footer_main_menu">
                <div className="o-footer_main_menu_top">
                  {/* Logo  */}
                  <div className="o-footer_main_logo">
                    <Link href="/">
                      <Image src={imgLogo || logoImg} ratio="174x136" alt="novaland logo" />
                    </Link>
                  </div>
                  {/* Info  */}
                  <div className="o-footer_main_info">
                    <Text modifiers={['600', 'white', 'uppercase', '12x17']}>
                      {title}
                    </Text>
                    <div className="mt-8">
                      <Text
                        content={description}
                        modifiers={['300', 'white', 'opacity07', '12x17']}
                      />
                    </div>
                    {/* Contact Link  */}
                    <div className="o-footer_main_contact">
                      <div className="o-footer_main_contact_item">
                        <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                          Email:
                        </Text>
                        <Link href={`mailto:${email}`} useExternal>
                          <Text modifiers={['white', '600', '12x17']} isInline>
                            {email}
                          </Text>
                        </Link>
                      </div>
                      <div className="o-footer_main_contact_item">
                        <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                          {`${t('footer.customer_service')}:`}
                        </Text>
                        <Link href={`tel:${phoneCskh}`} useExternal>
                          <Text modifiers={['600', 'white', '700', '12x17']} isInline>
                            {phoneCskh}
                          </Text>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom  */}
              <div className="o-footer_main_menu_bottom">
                {
                footerLink && footerLink.map((val, idx) => (
                  <div className="o-footer_main_menu_wrap" key={idx.toString()}>
                    <div className="o-footer_main_menu_title">
                      <Text modifiers={['white', '12x17', '600', 'uppercase']}>
                        {val.title}
                      </Text>
                    </div>
                    <ul className="o-footer_main_menu_list">
                      {
                        val.subMenu && val.subMenu.map((item, i) => (
                          <li className="o-footer_main_menu_nav" key={i.toString()}>
                            <Link href={item.link}>
                              <Text modifiers={['12x17', 'lavenderGray', '300']} isInline>
                                {item.title}
                              </Text>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                ))
                }
                {
                  socialList && socialList.length > 0 && (
                    <div className="o-footer_main_menu_wrap">
                      <div className="o-footer_main_menu_title">
                        <Text modifiers={['white', '12x17', '600', 'uppercase']}>
                          {t('footer.follow_novaland')}
                        </Text>
                      </div>
                      <ul className="o-footer_main_menu_icon">
                        {
                          socialList.map((item, index) => (
                            <div className="o-footer_main_menu_icon_item" key={index.toString()}>
                              <Link
                                href={item.url}
                                target={item.target}
                                useExternal={checkExternalUrl(item.url)}
                              >
                                <img src={getImageURL(item.iconName)} alt="icon" />
                              </Link>
                            </div>
                          ))
                        }
                      </ul>
                    </div>
                  )
                }
              </div>
            </CustomCol>
            <CustomCol lg={5}>
              {/* Register Form  */}
              <div className="o-footer_main_form">
                <Form
                  method={method}
                  submitForm={submitForm}
                >
                  <div className="o-footer_main_form_input">
                    <InputHookForm name="fullname" placeholder={t('register.name_placeholder')} />
                  </div>
                  <div className="o-footer_main_form_input">
                    <InputHookForm name="phone" placeholder={t('register.phone_placeholder')} />
                  </div>
                  <div className="o-footer_main_form_input">
                    <InputHookForm name="email" placeholder="Email" />
                  </div>
                  <div className="o-footer_main_form_input">
                    <PulldownHookForm
                      name="project"
                      options={projectOptions}
                      placeholder={`- ${t('register.project_placeholder')} -`}
                    />
                  </div>
                  <div className="o-footer_main_form_button mt-28">
                    <Button type="submit" modifiers="primary" isLoading={loadingBtn}>
                      {t('register.btn_register')}
                    </Button>
                  </div>
                  <div className="o-footer_main_form_notify u-mt-12">
                    <Text modifiers={['12x17', '300', 'lavenderGray']}>
                      {t('footer.note')}
                    </Text>
                  </div>
                </Form>
              </div>
            </CustomCol>
          </CustomRow>
        </div>

      </Container>
      <div className="o-footer_bottom">
        <Container>
          <div className="o-footer_bottom_wrap">
            <div className="o-footer_bottom_policy">
              <div className="o-footer_bottom_policy_item">
                <Link href={externalPolicyLink?.policyLink} target={externalPolicyLink?.target}>
                  <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                    {externalPolicyLink?.namePolicy}
                  </Text>
                </Link>
              </div>
              <div className="o-footer_bottom_policy_item">
                <Link href={externalPrivacyLink?.privacyLink} target={externalPrivacyLink?.target}>
                  <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                    {externalPrivacyLink?.namePrivacy}
                  </Text>
                </Link>
              </div>
            </div>
            <div className="o-footer_bottom_copyright">
              <Text
                content={copyright}
                modifiers={['300', 'white', 'opacity07', '12x17']}
              />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  imgLogo: undefined,
  footerLink: undefined,
  externalPolicyLink: undefined,
  externalPrivacyLink: undefined,
  method: undefined,
  submitForm: undefined,
  copyright: undefined,
  title: undefined,
  description: undefined,
  email: undefined,
  phoneCskh: undefined,
  socialList: undefined,
  loadingBtn: false,
};

export default Footer;
