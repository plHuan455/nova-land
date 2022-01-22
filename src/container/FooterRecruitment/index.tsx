import React from 'react';

import logoImg from 'assets/images/footer-logo.png';
import imgSocialIn from 'assets/images/img_socaial_in.png';
import imgSocialFacebook from 'assets/images/img_social_facebook.png';
import FooterRecruitment from 'components/organisms/FooterRecruitment';

const FooterRecruitmentContainer: React.FC = () => (
  <FooterRecruitment
    imgLogo={logoImg}
    footerLink={{
      title: 'VỀ NOVALAND',
      link: [
        {
          href: '/',
          title: 'Về Novaland',
        },
        {
          href: '/1',
          title: 'Môi trường làm việc',
        },
        {
          href: '/2',
          title: 'Cơ hội nghề nghiệp',
        },
      ],
    }}
    socialList={[
      {
        iconName: imgSocialFacebook,
        url: '/facebook',
        target: '_blank',
      },
      {
        iconName: imgSocialIn,
        url: '/in',
        target: '_blank',
      },
    ]}
    copyRight={{
      text: '© 2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các quyền được bảo hộ.',
      list: [
        {
          title: 'Chính sách bảo mật',
          url: '/chinh-sach-bao-mat',
          target: '_blank',
        },
        {
          title: ' Điều khoản khách hàng',
          url: '/dieu-khoan-khch-hang',
          target: '_blank',
        },
      ],
    }}
    title="CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA"
    description="Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do
  Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992 </br>
  Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
    email="info@novaland.com.vn"
    phoneCskh="0902 960 132"
  />
);

export default FooterRecruitmentContainer;
