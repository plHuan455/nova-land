import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';

interface WorkEnvironmentProps {
  title: string,
  listImage: string[];
  handleFindMore?: () => void;
}

const setting = {
  slidesToShow: 3,
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
      breakpoint: 1330,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      },
    },
  ],
};

const WorkEnvironment: React.FC<WorkEnvironmentProps> = ({
  title,
  listImage,
  handleFindMore,
}) => (
  <div className="t-workEnvironment">
    <div className="t-workEnvironment_title">
      <Heading modifiers={['700', '30x42', 'center', 'jet', 'fontCalibri', 'uppercase']}>{title}</Heading>
    </div>
    <div className="t-workEnvironment_carousel">
      <Carousel settings={setting}>
        {
          listImage.map((item, index) => (
            <div key={`t-workEnvironment-${index.toString()}`} className="t-workEnvironment_carousel-item">
              <Image src={item} alt={title} ratio="378x212" />
            </div>
          ))
        }
      </Carousel>
    </div>
    <div className="t-workEnvironment_button">
      <Button modifiers="outlineSpanishGray" onClick={handleFindMore}>Tìm hiểu thêm</Button>
    </div>
  </div>
);

WorkEnvironment.defaultProps = {
  handleFindMore: undefined,
};

export default WorkEnvironment;
