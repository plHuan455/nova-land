import imgCorporateNews1 from 'assets/images/NewsList/img_corporate_news1.png';
import imgCorporateNews2 from 'assets/images/NewsList/img_corporate_news2.png';
import imgCorporateNews3 from 'assets/images/NewsList/img_corporate_news3.png';
import imgCorporateNews4 from 'assets/images/NewsList/img_corporate_news4.png';
import imgMarketNews1 from 'assets/images/NewsList/img_market_news1.png';
import imgMarketNews2 from 'assets/images/NewsList/img_market_news2.png';
import imgMarketNews3 from 'assets/images/NewsList/img_market_news3.png';
import imgMarketNews4 from 'assets/images/NewsList/img_market_news4.png';
import { HomeNewsCardProps, dataTabsType } from 'components/templates/HomeNews';

const dataCorporateNews: HomeNewsCardProps[] = [
  {
    imgSrc: imgCorporateNews1,
    title: 'Novaland ký kết đồng hành cùng các đối tác trong lĩnh vực xây dựng',
    desc: 'Ngày 05 - 06/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM),...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgCorporateNews2,
    title: 'Sắp khởi công đường Hàm Kiệm – Tiến Thành',
    desc: 'Ban Quản lý Dự án và xây dựng công trình giao thông thuộc Sở Giao thông vận tải cho hay...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgCorporateNews3,
    title: 'Phan Vũ tiếp tục đồng hành cùng Novaland thi công các cụm dự án...',
    desc: 'Ngày 05/01/2022, tại Novaland Gallery (2Bis Nguyễn Thị Minh Khai, Q.1, TP.HCM), Công ty...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgCorporateNews4,
    title: 'Novaland ký kết đồng hành cùng các đối tác trong lĩnh vực xây dựng',
    desc: 'Hợp tác giữa doanh nghiệp bất động sản và ngân hàng tạo giải pháp tín dụng giàu ưu đãi,...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
];

export const dataMarketNews: HomeNewsCardProps[] = [
  {
    imgSrc: imgMarketNews1,
    title: 'Cận cảnh thảm nhựa cao tốc Phan Thiết - Dầu Giây ngày đầu năm 2022',
    desc: 'Tận dụng "thời gian vàng" các nhà thầu thi công cao tốc Phan Thiết - Dầu Giây đang thi công...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgMarketNews2,
    title: 'Tận dụng "thời gian vàng" thi công cao tốc Phan Thiết - Dầu Giây',
    desc: 'Thời tiết đang thuận lợi, nhà thầu thi công cao tốc Phan Thiết - Dầu Giây cần gấp rút thi công...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgMarketNews3,
    title: 'Người dân TP.HCM đón Giáng sinh sớm, check-in cùng cây thông cao 25 m',
    desc: 'Còn hơn một tháng nữa mới đến Giáng sinh, nhưng Novaland Gallery đã trang hoàng...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
  {
    imgSrc: imgMarketNews4,
    title: 'Bình Thuận đón những du khách đầu tiên trong giai đoạn bình thường mới',
    desc: 'Ngày 24/10, tại Pandanus Resort và Centara Mirage Resort (thành phố Phan Thiết),...',
    date: '23/11/2021',
    totalViews: 111,
    href: '/',
  },
];

export const tabDataProjectNews: dataTabsType[] = [
  {
    titleTab: 'NovaWorld Phan Thiet',
  },
  {
    titleTab: 'NovaWorld Ho Tram',
  },
  {
    titleTab: 'Aqua City',
  },
];

export default dataCorporateNews;
