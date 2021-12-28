import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';

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
            modifiers={['400', 'arsenic']}
            content={desc}
          />
        </div>
        <div className="t-homeNewsCard_divider" />
        <div className="t-homeNewsCard_general">
          <div className="t-homeNewsCard_date">
            <Text
              modifiers={['12x17', '400', 'ls-005', 'arsenic', 'fontLato']}
              content={date}
            />
          </div>
          <div className="t-homeNewsCard_view">
            <span onClick={() => setIsOpenView(!isOpenViews)}>
              <Icon iconName="eyeOpen" size="14" />
            </span>
            <div className="t-homeNewsCard_view_total">
              <Text modifiers={['12x17', '400', 'ls-005', 'arsenic', 'fontLato']}>
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
  dataTab: HomeNewsCardProps[];
}

interface HomeNewsProps {
  title: string,
  tabDataHomeNews: dataTabsType[],
  handleShowMore?: () => void;
}

const HomeNews: React.FC<HomeNewsProps> = ({
  title, tabDataHomeNews, handleShowMore,
}) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-homeNews">
      <Container>
        <Heading
          modifiers={['32x48', '700', 'uppercase', 'arsenic', 'center', 'fontNoto']}
          content={title}
        />
        <div className="t-homeNews_wrapper">
          <Tabs variableMutate={indexActive}>
            {
              tabDataHomeNews.map((item, index) => (
                <Tab
                  key={`tab-${index.toString()}`}
                  label={item.titleTab}
                  active={index === indexActive}
                  handleClick={() => setIndexActive(index)}
                />
              ))
            }
          </Tabs>
          {
            tabDataHomeNews.map((ele, idx) => (
              <TabPanel key={`homeNews-${idx.toString()}`} active={idx === indexActive}>
                <div className="t-homeNews_content">
                  {ele.dataTab.map((item, index) => (
                    <div className="t-homeNews_item" key={`homeNews-homeNewsCard-${index.toString()}`}>
                      <HomeNewsCard
                        {...item}
                      />
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))
          }
          <div className="t-homeNews_button">
            <Button modifiers="outline" onClick={handleShowMore}>
              Xem tất cả bài viết
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

HomeNews.defaultProps = {
  handleShowMore: undefined,
};

export default HomeNews;
