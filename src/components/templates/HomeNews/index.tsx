import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
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
          <Image src={imgSrc} ratio="1x1" alt="HomeNewsCard" />
        </Link>
      </div>
      <div className="t-homeNewsCard_wrapper">
        <div className="t-homeNewsCard_title">
          <Link href={href}>
            <Text
              modifiers={['16x24', '600', 'arsenic']}
              content={title}
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
}) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-homeNews">
      <Container>
        <Heading
          modifiers={['32x48', '500', 'uppercase', 'jet', 'center', 'fontNoto']}
          content={title}
        />
        <div className="t-homeNews_wrapper">
          <Tabs variableMutate={indexActive}>
            {
              tabDataHomeNews.map((item, index) => (
                <Tab
                  size="20x28"
                  key={`tab-${index.toString()}`}
                  label={item.titleTab}
                  active={index === indexActive}
                  handleClick={() => {
                    setIndexActive(index);
                    if (handleActive) handleActive(index);
                  }}
                />
              ))
            }
          </Tabs>
          {loading ? <Loading isShow /> : (
            <div className="t-homeNews_list">
              {
                newsList && newsList.length > 0 ? newsList.map((ele, idx) => (
                  <div className="t-homeNews_content" key={`homeNews-homeNewsCard-${idx.toString()}`}>
                    <div className="t-homeNews_item">
                      <HomeNewsCard
                        {...ele}
                      />
                    </div>
                  </div>
                ))
                  : (
                    <div className="t-homeNews_empty">
                      <Text modifiers={['center', '20x28']}>Không có tin tức</Text>
                    </div>
                  )
              }
            </div>
          )}
          <div className="t-homeNews_button">
            <Link href={href} target={target}>
              <Button modifiers="outlineSpanishGray">
                {nameButton || 'Xem tất cả bài viết'}
              </Button>
            </Link>
          </div>
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
};

export default HomeNews;
