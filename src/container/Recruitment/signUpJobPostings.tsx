import React from 'react';

import SignupJobPostings from 'components/templates/SignupJobPostings';

const SignUpJobPostingsContainer: React.FC = () => (
  <div className="p-recruitment_signUpJobPostingsContainer">
    <SignupJobPostings
      btnText="Đăng ký ngay"
      desc="Trong chiến lược phát triển bền vững, Novaland luôn xem việc đầu tư phát triển nguồn nhân lực chất lượng cao và
    tạo dựng môi trường làm việc tốt nhất là nhiệm vụ hàng đầu của mình."
      heading="Đăng ký nhận tin tuyển dụng"
    />
  </div>
);

export default SignUpJobPostingsContainer;
