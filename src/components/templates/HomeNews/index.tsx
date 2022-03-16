import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import { PrevArrow, NextArrow } from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';
import { Tab, Tabs } from 'components/organisms/Tabs';

export interface HomeNewsCardProps {
  imgSrc: string;
  title: string;
  desc: string;
  date: string;
  totalViews: number;
  href?: string;
  isHiddenViews?: boolean;
}

export const HomeNewsCard: React.FC<HomeNewsCardProps> = ({
  imgSrc,
  title,
  desc,
  date,
  totalViews,
  href,
  isHiddenViews,
}) => {
  const [isOpenViews, setIsOpenView] = useState(!isHiddenViews);

  return (
    <div className="t-homeNewsCard">
      <div className="t-homeNewsCard_thumbnail">
        <Link href={href}>
          <Image src={imgSrc} ratio="1x1" alt={title} />
        </Link>
      </div>
      <div className="t-homeNewsCard_wrapper">
        <div className="t-homeNewsCard_title">
          <Link href={href}>
            <Text
              modifiers={['16x24', '600', 'arsenic', 'capitalize']}
              content={title.toLocaleLowerCase()}
            />
          </Link>
        </div>
        <div className="t-homeNewsCard_content">
          <Text
            modifiers={['300', 'arsenic']}
            content={desc}
          />
        </div>
        <div className="t-homeNewsCard_divider" />
        <div className="t-homeNewsCard_general">
          <div className="t-homeNewsCard_date">
            <Text
              modifiers={['12x17', '300', 'ls-005', 'arsenic']}
              content={date}
            />
          </div>
          <div className="t-homeNewsCard_view">
            <span onClick={() => setIsOpenView(!isOpenViews)}>
              <Icon iconName="eyeOpen" size="14" />
            </span>
            <div className="t-homeNewsCard_view_total">
              <Text modifiers={['12x17', '300', 'ls-005', 'arsenic']}>
                {
                  isOpenViews ? totalViews : '---'
                }
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface dataTabsType {
  titleTab: string;
}

interface HomeNewsProps {
  title: string,
  href: string;
  target?: string;
  nameButton?: string;
  tabDataHomeNews: dataTabsType[];
  newsList?: HomeNewsCardProps[];
  handleActive?: (id: number) => void;
  loading?: boolean;
  classTabsActive?: string;
}

const HomeNews: React.FC<HomeNewsProps> = ({
  title,
  tabDataHomeNews,
  href,
  target,
  nameButton,
  newsList,
  handleActive,
  loading,
  classTabsActive,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const { t } = useTranslation();

  const handleClickNext = () => {
    if (indexActive < tabDataHomeNews.length - 1 && indexActive >= 0) {
      setIndexActive(indexActive + 1);
    }
  };

  const handleClickPrev = () => {
    if (indexActive <= tabDataHomeNews.length - 1 && indexActive > 0) {
      setIndexActive(indexActive - 1);
    }
  };

  useEffect(() => {
    if (handleActive) {
      handleActive(indexActive);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexActive]);

  return (
    <div className="t-homeNews">
      <Container>
        <Heading
          modifiers={['32x48', '500', 'uppercase', 'jet', 'center', 'fontNoto']}
          content={title}
        />
        <div className="t-homeNews_wrapper">
          <div className="t-homeNews_wrapper_cover">
            <PrevArrow extendClassname={`t-homeNews_wrapper_cover_prev slick-arrow slick-prev ${indexActive === 0 && 'slick-disabled'}`} onClick={handleClickPrev} />
            <Tabs classTabsActive={classTabsActive} variableMutate={indexActive}>
              {
                tabDataHomeNews.map((item, index) => (
                  <Tab
                    type={classTabsActive}
                    size="20x28"
                    key={`tab-${index.toString()}`}
                    label={item.titleTab}
                    active={index === indexActive}
                    handleClick={() => {
                      setIndexActive(index);
                    }}
                  />
                ))
              }
            </Tabs>
            <NextArrow extendClassname={`t-homeNews_wrapper_cover_next slick-arrow slick-next ${indexActive === tabDataHomeNews.length - 1 && 'slick-disabled'}`} onClick={handleClickNext} />
          </div>
          {(() => {
            if (loading) return <Loading isShow />;
            return (
              <div className="t-homeNews_list">
                {
              newsList && newsList.length > 0 ? (
                <>
                  {newsList.map((ele, idx) => (
                    <div className="t-homeNews_content" key={`homeNews-homeNewsCard-${idx.toString()}`}>
                      <div className="t-homeNews_content_titleMobile">
                        <Link href={ele.href}>
                          <Text
                            modifiers={['16x24', '600', 'arsenic', 'capitalize']}
                            content={ele.title.toLocaleLowerCase()}
                          />
                        </Link>
                      </div>
                      <div className="t-homeNews_item">
                        <HomeNewsCard
                          {...ele}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="t-homeNews_button">
                    <Link href={href} target={target}>
                      <Button modifiers="outlineSpanishGray">
                        {nameButton || t('news.see_all_posts')}
                      </Button>
                    </Link>
                  </div>
                </>
              )
                : (
                  <div className="t-homeNews_empty">
                    <Text modifiers={['center', '20x28']}>{t('news.no_news')}</Text>
                  </div>
                )
            }
              </div>
            );
          })()}

        </div>
      </Container>
    </div>
  );
};

HomeNews.defaultProps = {
  target: undefined,
  nameButton: undefined,
  newsList: undefined,
  handleActive: undefined,
  loading: false,
  classTabsActive: undefined,
};

export default HomeNews;
