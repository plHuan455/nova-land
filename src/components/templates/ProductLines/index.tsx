/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

import Heading from 'components/atoms/Heading';
import InfoProduct, { InfoType } from 'components/molecules/InfoProduct';
import Animate from 'components/organisms/Animate';
import Carousel, { NextArrow, PrevArrow } from 'components/organisms/Carousel';
import { TabBg, TabBgPanel, TabsBg } from 'components/organisms/TabsBg';

interface ProductLinesContentType {
  imgSrc: string;
  title: string;
  desc: Array<InfoType>;
}

export interface ProductLinesType {
  label: string;
  imgActive?: string;
  imgInActive?: string;
  content: ProductLinesContentType;
  slug: string;
}

interface ProductLinesProps {
  title: string;
  dataProductLines: Array<ProductLinesType>;
  handleChangeTab?: (realEstatesSlug: string) => void;
}

const ProductLines: React.FC<ProductLinesProps> = ({
  title,
  dataProductLines,
  handleChangeTab,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  if (dataProductLines.length < 1) return null;

  const settingDefault = {
    dots: false,
    slidesToShow: dataProductLines.length < 4 ? dataProductLines.length : 4,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    cssEase: 'ease-in-out',
    afterChange: (currentIndex: number) => setIndexActive(currentIndex),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleActiveTab = (realEstatesSlug: string, index: number) => {
    setIndexActive(index);
    if (handleChangeTab) handleChangeTab(realEstatesSlug);
  };

  return (
    <div className="t-productLines">
      <Animate type="goUp">
        <div className="t-productLines_title">
          <Heading
            modifiers={[
              '30x42',
              '500',
              'jet',
              'uppercase',
              'center',
              'fontNoto',
            ]}
          >
            {title}
          </Heading>
        </div>
        <TabsBg variableMutate={indexActive}>
          <Carousel settings={settingDefault}>
            {dataProductLines.map((item, index) => (
              <TabBg
                key={`tab-${index.toString()}`}
                label={item.label}
                active={index === indexActive}
                imgActive={item.imgActive}
                imgInActive={item.imgInActive}
                handleClick={() => handleActiveTab(item.slug, index)}
              />
            ))}
          </Carousel>
        </TabsBg>
        {dataProductLines.map((item, index) => (
          <TabBgPanel
            key={`tab-panel-${index.toString()}`}
            active={index === indexActive}
          >
            <InfoProduct
              title={item.content.title || ''}
              imgSrc={item.content.imgSrc}
              listInfo={item.content.desc}
            />
          </TabBgPanel>
        ))}
      </Animate>
    </div>
  );
};

ProductLines.defaultProps = {};

export default ProductLines;
