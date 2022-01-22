import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export type FooterLinkTypes = {
  title: string;
  link?: {
    href: string;
    title?: string;
  }[]
}

export type SocialListTypes = {
  iconName?: string;
  url?: string;
  target?: string;
}

interface FooterRecruitmentProps {
  imgLogo?: string;
  footerLink?: FooterLinkTypes;
  socialList?: SocialListTypes[];
  copyRight?: {
    list: {
      title: string;
      url: string;
      target?: string;
    }[];
    text: string
  }
  title?: string;
  description?: string;
  email?: string;
  phoneCskh?: string;
}

const FooterRecruitment: React.FC<FooterRecruitmentProps> = ({
  imgLogo,
  footerLink,
  socialList,
  copyRight,
  title,
  description,
  email,
  phoneCskh,
}) => (
  <div className="o-footer">
    <Container>
      <div className="o-footer_wrapper">
        <div className="o-footer_left">
          <div className="o-footer_left_logo">
            <Link href="/">
              <Image src={imgLogo || ''} ratio="174x136" alt="novaland logo" />
            </Link>
          </div>
          <div className="o-footer_left_info">
            <Text modifiers={['600', 'white', 'uppercase', '12x17']}>
              {title}
            </Text>
            <div className="u-mt-2">
              <Text
                modifiers={['300', 'white', 'lavenderGray', '12x17']}
                content={description}
              />
            </div>
            {/* Contact Link  */}
            <div className="o-footer_left_contact u-mt-6">
              <div className="o-footer_left_contact_item">
                <Text modifiers={['300', 'white', 'lavenderGray', '12x17']}>
                  Email:
                </Text>
                <Link href={`mailto:${email}`} useExternal>
                  <Text modifiers={['white', '600', '12x17']} isInline>
                    {email}
                  </Text>
                </Link>
              </div>
              <div className="o-footer_left_contact_item">
                <Text modifiers={['300', 'white', 'lavenderGray', '12x17']}>
                  Tổng đài CSKH:
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
        <div className="o-footer_right">
          <div className="o-footer_right_menus">
            {footerLink && (
              <>
                <div className="o-footer_right_menus_title">
                  <Text modifiers={['white', '12x17', '600', 'uppercase']}>
                    {footerLink.title}
                  </Text>
                </div>
                <ul className="o-footer_right_menus_list u-mt-16">
                  {
                    footerLink.link && footerLink.link.map((item, index) => (
                      <li className="o-footer_right_menus_nav" key={index.toString()}>
                        <Link href={item.href}>
                          <Text modifiers={['12x17', 'lavenderGray', '300']} isInline>
                            {item.title}
                          </Text>
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </>
            )}
          </div>
          <div className="o-footer_right_social">
            {socialList && (
              <>
                <div className="o-footer_right_social_title">
                  <Text modifiers={['white', '12x17', '600', 'uppercase']}>
                    THEO DÕI NOVALAND TRÊN
                  </Text>
                </div>
                <div className="o-footer_right_social_icon u-mt-lg-21 u-mt-16">
                  {
                    socialList.map((val, i) => (
                      <div className="o-footer_right_social_item" key={`social-${i.toString()}`}>
                        <Link href={val.url} target={val.target}>
                          <img src={val.iconName} alt="icon" />
                        </Link>
                      </div>
                    ))
                  }
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Container>
    {copyRight && (
      <div className="o-footer_copyRight">
        <Container>
          <div className="o-footer_copyRight_container">
            <div className="o-footer_copyRight_wrapper">
              {copyRight.list.map((item, idx) => (
                <div className="o-footer_copyRight_item" key={`copyright-${idx.toString()}`}>
                  <div className={`o-footer_copyRight_divider-${idx.toString()}`} />
                  <Link href={item.url} target={item.target}>
                    <Text modifiers={['columbiaBlue', '300', '12x17']}>{item.title}</Text>
                  </Link>
                </div>
              ))}
            </div>
            <Text modifiers={['columbiaBlue', '300', '12x17']} content={copyRight.text} />
          </div>
        </Container>
      </div>
    )}
  </div>
);

FooterRecruitment.defaultProps = {
  imgLogo: undefined,
  footerLink: undefined,
  socialList: undefined,
  title: undefined,
  description: undefined,
  email: undefined,
  phoneCskh: undefined,
  copyRight: undefined,
};

export default FooterRecruitment;
