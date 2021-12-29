import brand1 from 'assets/images/dynasty_house.png';
import brand2 from 'assets/images/jumbo.png';
import img1 from 'assets/images/nova_edu.png';
import img2 from 'assets/images/nova_health_care.png';
import img3 from 'assets/images/nova_hospitality.png';
import brand4 from 'assets/images/phin_deli.png';
import brand3 from 'assets/images/sgcasa.png';
import { EcoCardProps } from 'components/molecules/EcoCard';

export const brandList = [
  {
    imgSrc: brand1,
  },
  {
    imgSrc: brand2,
  },
  {
    imgSrc: brand3,
  },
  {
    imgSrc: brand4,
  },
];

export const ecoCardList: EcoCardProps[] = [
  {
    fieldImgSrc: img1,
    brandList,
    href: '/',
  },
  {
    fieldImgSrc: img2,
    brandList,
    href: '/',
  },
  {
    fieldImgSrc: img3,
    brandList,
    href: '/',
  },
  {
    fieldImgSrc: img1,
    brandList,
    href: '/',
  },
  {
    fieldImgSrc: img2,
    brandList,
    href: '/',
  },
];
