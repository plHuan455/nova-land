import React from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';

import Container, { CustomCol, CustomRow } from '../Container';
import Form from '../Form';

import bgFooter from 'assets/images/bg-footer.png';
import logoImg from 'assets/images/footer-logo.png';
import Button from 'components/atoms/Button';
import Icon, { IconName } from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import { InputHookForm } from 'components/atoms/Input';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { OptionType, PulldownHookForm } from 'components/molecules/Pulldown';

export type MenuFooterTypes = {
  title: string;
  link?: {
    href: string;
    title?: string;
    icon?: string;
  }[]
}

export type FooterRegisterFormTypes = {
  fullname: string;
  phone: string;
  email: string;
  project: string;
}

interface FooterProps {
  footerLink?: MenuFooterTypes[];
  method?: UseFormReturn<FooterRegisterFormTypes>;
  submitForm?: SubmitHandler<FooterRegisterFormTypes>;
  projectOptions: OptionType[];
  externalLink?: {
    policy: string;
    privacy: string;
  }
}

const Footer: React.FC<FooterProps> = ({
  footerLink, externalLink, method, submitForm, projectOptions,
}) => (
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
                    <Image src={logoImg} ratio="174x136" alt="novaland logo" />
                  </Link>
                </div>
                {/* Info  */}
                <div className="o-footer_main_info">
                  <Text modifiers={['600', 'white', 'uppercase', '12x17']}>
                    CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NOVA
                  </Text>
                  <div className="mt-8">
                    <Text
                      modifiers={['300', 'white', 'opacity07', '12x17']}
                    >
                      Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do
                      Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992
                    </Text>
                    <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                      Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé,
                      Quận 1, Thành phố Hồ Chí Minh
                    </Text>
                  </div>
                  {/* Contact Link  */}
                  <div className="o-footer_main_contact">
                    <div className="o-footer_main_contact_item">
                      <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                        Email:
                      </Text>
                      <Link href="mailto:info@novaland.com.vn" useExternal>
                        <Text modifiers={['white', '600', '12x17']} isInline>
                          info@novaland.com.vn
                        </Text>
                      </Link>
                    </div>
                    <div className="o-footer_main_contact_item">
                      <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                        Tổng đài CSKH:
                      </Text>
                      <Link href="tel:1900636666" useExternal>
                        <Text modifiers={['600', 'white', '700', '12x17']} isInline>
                          1900 63 6666
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
                  <ul className={val.link?.find((e) => !!e.icon) ? 'o-footer_main_menu_icon' : 'o-footer_main_menu_list'}>
                    {
                      val.link && val.link.map((item, i) => {
                        if (item.icon) {
                          return (
                            <div className="o-footer_main_menu_icon_item" key={i.toString()}>
                              <Link href={item.href} title={item.title}>
                                <Icon iconName={item.icon as IconName} size="40" />
                              </Link>
                            </div>
                          );
                        }
                        return (
                          <li className="o-footer_main_menu_nav" key={i.toString()}>
                            <Link href={item.href}>
                              <Text modifiers={['12x17', 'lavenderGray', '300']} isInline>
                                {item.title}
                              </Text>
                            </Link>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              ))
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
                  <InputHookForm name="fullname" placeholder="Họ và tên" />
                </div>
                <div className="o-footer_main_form_input">
                  <InputHookForm name="phone" placeholder="Số điện thoại" />
                </div>
                <div className="o-footer_main_form_input">
                  <InputHookForm name="email" placeholder="Email" />
                </div>
                <div className="o-footer_main_form_input">
                  <PulldownHookForm
                    name="project"
                    options={projectOptions}
                    placeholder="- Dự án khách hàng quan tâm -"
                  />
                </div>
                <div className="o-footer_main_form_button mt-28">
                  <Button type="submit" modifiers="primary">
                    Đăng Ký
                  </Button>
                </div>
                <div className="o-footer_main_form_notify u-mt-12">
                  <Text modifiers={['12x17', '300', 'lavenderGray']}>
                    Quý khách đăng ký nhận email quảng cáo về các chương trình ưu
                    đãi, khuyến mại và tin tức mới nhất từ Novaland.
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
              <Link href={externalLink?.privacy}>
                <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                  Chính sách bảo mật
                </Text>
              </Link>
            </div>
            <div className="o-footer_bottom_policy_item">
              <Link href={externalLink?.policy}>
                <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
                  Điều khoản khách hàng
                </Text>
              </Link>
            </div>
          </div>
          <div className="o-footer_bottom_copyright">
            <Text modifiers={['300', 'white', 'opacity07', '12x17']}>
              © 2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam).
              Tất cả các quyền được bảo hộ.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  </footer>
);

Footer.defaultProps = {
  footerLink: undefined,
  externalLink: undefined,
  method: undefined,
  submitForm: undefined,
};

export default Footer;
