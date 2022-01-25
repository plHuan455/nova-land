import { yupResolver } from '@hookform/resolvers/yup';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { MemoryRouter } from 'react-router-dom';

import Footer, { FooterRegisterFormTypes } from '.';

import headerMenuDummy from 'assets/dataDummy/header';
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
        footerLink={headerMenuDummy}
        externalPolicyLink={{
          namePolicy: 'Chính sách bảo mật ',
          policyLink: '/',
          target: '_blank',
        }}
        externalPrivacyLink={{
          namePrivacy: 'Điều khoản khách hàng ',
          privacyLink: '/',
          target: '_blank',
        }}
        copyright="© 2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các quyền được bảo hộ."
        title="CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NO VA"
        description="Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do
        Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992</br>
        Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
        email="recruitment@novaland.com.vn "
        phoneCskh="1900 63 6666"
      />
    );
  });
