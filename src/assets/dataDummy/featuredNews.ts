import imgFeaturedNews1 from 'assets/images/FeaturedNews/img_featuredNews1.png';
import imgFeaturedNews2 from 'assets/images/FeaturedNews/img_featuredNews2.png';
import imgFeaturedNews3 from 'assets/images/FeaturedNews/img_featuredNews3.png';
import { FeaturedNewsCardProps } from 'components/templates/FeaturedNews';

const featuredNewsCardList: FeaturedNewsCardProps[] = [
  {
    imgSrc: imgFeaturedNews1,
    ratio: '582x534',
    alt: 'ImgFeaturedNews1',
    title: 'Bốn dự án thành phần cao tốc Bắc Nam sẽ hoàn thành năm 2022',
    time: '1 phút trước',
    href: '/',
  },
  {
    imgSrc: imgFeaturedNews2,
    ratio: '582x252',
    alt: 'ImgFeaturedNews2',
    title: 'Cao tốc Phan Thiết - Dầu Giây qua Đồng Nai phấn đấu vượt tiến độ...',
    time: '2 giờ trước',
    href: '/',
  },
  {
    imgSrc: imgFeaturedNews3,
    ratio: '582x252',
    alt: 'ImgFeaturedNews3',
    title: 'Novaland nằm trong Top 50 công ty niêm yết tốt nhất Việt Nam 2021',
    time: '6 giờ trước',
    href: '/',
  },
];

export default featuredNewsCardList;
