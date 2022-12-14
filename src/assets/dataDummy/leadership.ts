import imgLeadership1 from 'assets/images/Leadership/img_leadership1.png';
import {
  dataTabsLeadershipType,
  LeadershipDetailProps,
} from 'components/templates/Leadership';

const dataLeadershipList: dataTabsLeadershipType[] = [
  {
    id: 1,
    name: 'Hội đồng quản trị',
    slug: '',
  },
  {
    id: 2,
    name: 'Ban giám đốc',
    slug: '',
  },
];

export const dataLeadership: LeadershipDetailProps[] = [
  {
    gender: 'Ông',
    name: 'Bùi Thành Nhơn',
    position: 'Nhà sáng lập - Chủ tịch Hội đồng Quản trị',
    imgSrc: imgLeadership1,
    achievement: ' Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA, HSB-TUCK, Đại học Dartmouth, Hoa Kỳ. </br> Là một trong những chủ doanh nghiệp tư nhân đầu tiên tại TP.HCM từ những năm 1980. Thành viên Tổ chức doanh nhân thế giới (YPO - WPO).',
    slogan: 'Con người Novaland với giá trị cốt lõi: Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu của Tập đoàn; là chìa khóa của sự thành công sẽ sớm hiện thực được sứ mạng, hoài bão của Novaland Group.',
  },
  {
    gender: 'Ông',
    name: 'Bùi Xuân Huy',
    position: 'Thành viên Hội đồng Quản trị, Tổng Giám đốc',
    imgSrc: imgLeadership1,
    achievement: ' Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA, HSB-TUCK, Đại học Dartmouth, Hoa Kỳ. </br> Là một trong những chủ doanh nghiệp tư nhân đầu tiên tại TP.HCM từ những năm 1980. Thành viên Tổ chức doanh nhân thế giới (YPO - WPO).',
    slogan: 'Con người Novaland với giá trị cốt lõi: Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu của Tập đoàn; là chìa khóa của sự thành công sẽ sớm hiện thực được sứ mạng, hoài bão của Novaland Group.',
  },
  {
    gender: 'Bà',
    name: 'Hoàng Thu Châu',
    position: 'Thành viên Hội đồng Quản trị, Phó Tổng Giám đốc',
    imgSrc: imgLeadership1,
    achievement: ' Cử nhân Nông nghiệp. Tốt nghiệp Executive MBA, HSB-TUCK, Đại học Dartmouth, Hoa Kỳ. </br> Là một trong những chủ doanh nghiệp tư nhân đầu tiên tại TP.HCM từ những năm 1980. Thành viên Tổ chức doanh nhân thế giới (YPO - WPO).',
    slogan: 'Con người Novaland với giá trị cốt lõi: Hiệu quả - Chính trực - Chuyên nghiệp là tài sản quý báu của Tập đoàn; là chìa khóa của sự thành công sẽ sớm hiện thực được sứ mạng, hoài bão của Novaland Group.',
  },
];

export default dataLeadershipList;
