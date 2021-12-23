/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactSlick, { CustomArrowProps, Settings } from 'react-slick';

import mapModifiers from 'utils/functions';

export interface CarouselProps {
  settings?: Settings;
  asNavFor?: ReactSlick;
  ref?: React.RefObject<ReactSlick>;
  children: React.ReactNode;
  centerMode?: boolean;
}

interface ArrowProps extends CustomArrowProps {
  extendClassname?: string
}

export const PrevArrow: React.FC<ArrowProps> = ({
  className, onClick, extendClassname = '',
}) => (
  <div
    className={`o-carousel_arrow o-carousel_arrow_prev ${className} ${extendClassname}`}
    onClick={onClick}
  />
);

export const NextArrow: React.FC<ArrowProps> = ({
  className, onClick, extendClassname = '',
}) => (
  <div
    className={`o-carousel_arrow o-carousel_arrow_next ${className} ${extendClassname}`}
    onClick={onClick}
  />
);

const Carousel = React.forwardRef<ReactSlick, CarouselProps>(
  ({
    settings, children, asNavFor, centerMode,
  }, ref) => (
    <div className={mapModifiers('o-carousel', centerMode && 'centermode', settings?.arrows && 'hasarrow')}>
      <ReactSlick
        centerPadding="0"
        {...settings}
        {...(asNavFor && { asNavFor })}
        ref={ref}
      >
        {React.Children.map(children, (item) => (
          <div className="o-carousel_wrap">
            <div className="o-carousel_item">{item}</div>
          </div>
        ))}
      </ReactSlick>
    </div>
  ),
);

Carousel.defaultProps = {
  settings: {
    infinite: true,
    dots: true,
    dotsClass: 'o-carousel_dots',
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    cssEase: 'ease-in-out',
  },
};

export default Carousel;
