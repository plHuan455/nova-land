import React from 'react';
import { useTranslation } from 'react-i18next';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import Container from 'components/organisms/Container';
import FeaturedNews from 'components/templates/FeaturedNews';
import mapModifiers from 'utils/functions';

export interface NewsCategoryCardProps {
  imgSrc: string;
  ratio: Ratio;
  alt?: string;
  title: string;
  desc: string;
  href: string;
  isLatestJobs?: boolean;
  tagLeft?: string;
  tagRight?: string;
  locationText?: string;
  bntText?: string;
}

export const NewsCategoryCard: React.FC<NewsCategoryCardProps> = ({
  imgSrc,
  ratio,
  title,
  desc,
  href,
  isLatestJobs,
  tagLeft,
  tagRight,
  locationText,
  bntText,
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={mapModifiers(
        't-newsCategoryCard',
        isLatestJobs && 'isLatestJobs',
      )}
    >
      {isLatestJobs && (
        <div className="t-newsCategoryCard-tag">
          <div className="t-newsCategoryCard-tag_left">
            <Text modifiers={['white', '12x17', 'fontLexend']}>{tagLeft}</Text>
          </div>
          <div className="t-newsCategoryCard-tag_right">
            <Text modifiers={['white', '12x17', 'fontLexend']}>{tagRight}</Text>
          </div>
        </div>
      )}
      <Link href={href}>
        <div className="t-newsCategoryCard_wrapper">
          <div className="t-newsCategoryCard_thumbnail">
            <Image src={imgSrc} ratio={ratio} alt={title} />
          </div>
          <div className="t-newsCategoryCard_content">
            {isLatestJobs && (
              <div className="t-newsCategoryCard_location">
                <Icon size="20" iconName="location" />
                <div className="t-newsCategoryCard_locationText">
                  <Text
                    modifiers={['400', 'fontLexend', '12x17', 'spanishGray']}
                    content={locationText}
                  />
                </div>
              </div>
            )}
            <div className="t-newsCategoryCard_title">
              <Heading modifiers={['20x30', '600', 'jet', 'capitalize']}>{title.toLocaleLowerCase()}</Heading>
            </div>
            <div className="t-newsCategoryCard_desc u-mt-4">
              <Text
                modifiers={
                  isLatestJobs ? ['400', 'dimGray', '16x24'] : ['300', 'dimGray']
                }
              >
                {desc}
              </Text>
            </div>
            <div className="t-newsCategoryCard_btn u-mt-lg-24 u-mt-sm-14 u-mt-10">
              <Text modifiers={['300', 'camel', 'underline']}>
                {bntText || t('general.see_more_btn')}
              </Text>
              <div className="t-newsCategoryCard_btn_icon u-ml-10" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

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
  totalPage: number;
  currentPage?: number;
  handleChangePage?: (page: number) => void;
  loading?: boolean;
}

const NewsCategory: React.FC<NewsCategoryProps> = ({
  dataNewsCategory,
  totalPage,
  currentPage,
  handleChangePage,
  loading,
}) => (
  <div className="t-newsCategory">
    {loading ? (
      <Loading isShow />
    ) : (
      <>
        <div className="t-newsCategory_top">
          {dataNewsCategory.length > 0 && (
            <FeaturedNews dataFeaturedNews={dataNewsCategory.slice(0, 3)} />
          )}
        </div>
        <div className="t-newsCategory_bottom">
          <Container>
            <div className="t-newsCategory_wrapper">
              {dataNewsCategory.map(
                (item, index) => index > 2 && (
                <div className="t-newsCategory_item" key={index.toString()}>
                  <NewsCategoryCard {...item} ratio="376x212" />
                </div>
                ),
              )}
            </div>
          </Container>
        </div>
        {totalPage > 0 && (
          <div className="t-newsCategory_pagination u-mt-md-40 u-mt-28">
            <Pagination
              totalPage={totalPage}
              pageCurrent={currentPage}
              handleChangePage={(page: number) => handleChangePage && handleChangePage(page)}
            />
          </div>
        )}
      </>
    )}
  </div>
);

NewsCategory.defaultProps = {
  currentPage: undefined,
  handleChangePage: undefined,
  loading: false,
};

export default NewsCategory;
