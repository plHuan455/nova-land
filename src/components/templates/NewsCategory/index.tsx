import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import FeaturedNews from 'components/templates/FeaturedNews';

export interface NewsCategoryCardProps {
  imgSrc: string;
  ratio: Ratio;
  alt?: string;
  title: string;
  desc: string;
  href: string;
}

export const NewsCategoryCard: React.FC<NewsCategoryCardProps> = ({
  imgSrc,
  ratio,
  alt,
  title,
  desc,
  href,
}) => (
  <div className="t-newsCategoryCard">
    <Link href={href}>
      <div className="t-newsCategoryCard_wrapper">
        <div className="t-newsCategoryCard_thumbnail">
          <Image src={imgSrc} ratio={ratio} alt={alt || 'NewsCategoryCar'} />
        </div>
        <div className="t-newsCategoryCard_content">
          <div className="t-newsCategoryCard_title">
            <Heading modifiers={['20x30', '600', 'jet']}>
              {title}
            </Heading>
          </div>
          <div className="t-newsCategoryCard_desc u-mt-4">
            <Text modifiers={['300', 'dimGray']}>
              {desc}
            </Text>
          </div>
          <div className="t-newsCategoryCard_btn u-mt-lg-24 u-mt-sm-14 u-mt-10">
            <Text modifiers={['300', 'camel', 'underline']}>
              Xem thêm
            </Text>
            <div className="t-newsCategoryCard_btn_icon u-ml-10" />
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export interface NewsCategoryItemTypes {
  imgSrc: string;
  ratio: Ratio;
  alt?: string;
  title: string;
  desc: string;
  time: string;
  href: string;
}

interface NewsCategoryProps {
  dataNewsCategory: NewsCategoryItemTypes[];
}

const NewsCategory: React.FC<NewsCategoryProps> = ({ dataNewsCategory }) => (
  <div className="t-newsCategory">
    <div className="t-newsCategory_top">
      {dataNewsCategory.length > 0 && (
        <FeaturedNews dataFeaturedNews={dataNewsCategory.slice(0, 3)} />
      )}
    </div>
    <div className="t-newsCategory_bottom">
      <Container>
        <div className="t-newsCategory_wrapper">
          {dataNewsCategory.map((item, index) => (
            index > 2 && (
              <div className="t-newsCategory_item">
                <NewsCategoryCard {...item} />
              </div>
            )
          ))}
        </div>
      </Container>
    </div>
  </div>
);

export default NewsCategory;
