import React from 'react';

import Carousel, { NextArrow, PrevArrow } from '../Carousel';

import Image from 'components/atoms/Image';

const settingDefault = {
  dotsClass: 'slick-dots o-carousel_dots',
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  infinite: false,
  cssEase: 'ease-in-out',
  customPaging() {
    return (
      <span className="o-carousel_dot" />
    );
  },
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

export interface BranchListType {
  image: string;
}

interface BranchListProps {
  data: BranchListType[];
}

const BranchList: React.FC<BranchListProps> = ({
  data,
}) => (
  <div className="o-branchList">
    <div className="o-branchList_carousel">
      {data && data.length > 0 && (
        <Carousel settings={settingDefault}>
          {data.map((item, idx) => (
            <div key={idx.toString()} className="o-branchList_image">
              <Image
                alt={`slider-${idx.toString()}`}
                src={item.image}
                ratio="110x86"
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  </div>
);

BranchList.defaultProps = {
};

export default BranchList;
