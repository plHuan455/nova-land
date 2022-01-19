import imgLatestNews1 from 'assets/images/LatestNews/img_latestNews1.png';
import imgLatestNews2 from 'assets/images/LatestNews/img_latestNews2.png';
import imgLatestNews3 from 'assets/images/LatestNews/img_latestNews3.png';
import { LatestNewsCardProps } from 'components/templates/LatestNews';

const latestNewsCardList: LatestNewsCardProps[] = [
  {
    imgSrc: imgLatestNews1,
    ratio: '582x534',
    alt: 'ImgLatestNews1',
    title: 'Bốn dự án thành phần cao tốc Bắc Nam sẽ hoàn thành năm 2022',
    time: '1 phút trước',
    href: '/',
  },
  {
    imgSrc: imgLatestNews2,
    ratio: '582x252',
    alt: 'ImgLatestNews2',
    title: 'Cao tốc Phan Thiết - Dầu Giây qua Đồng Nai phấn đấu vượt tiến độ...',
    time: '2 giờ trước',
    href: '/',
  },
  {
    imgSrc: imgLatestNews3,
    ratio: '582x252',
    alt: 'ImgLatestNews3',
    title: 'Novaland nằm trong Top 50 công ty niêm yết tốt nhất Việt Nam 2021',
    time: '6 giờ trước',
    href: '/',
  },
];

export default latestNewsCardList;
