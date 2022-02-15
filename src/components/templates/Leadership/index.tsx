import React, { useState } from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Loading from 'components/atoms/Loading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import Section from 'components/templates/Section';
import mapModifiers from 'utils/functions';

interface LeadershipCardProps {
  gender: string;
  name: string;
  position: string;
  imgSrc: string;
  isShow?: boolean;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  gender, name, imgSrc, isShow, children, position,
}) => (
  <div className={mapModifiers('t-leadershipCard', isShow && 'show')}>
    <div className="t-leadershipCard_wrapper">
      <div className="t-leadershipCard_thumbnail">
        <Image src={imgSrc} alt="LeadershipCard" ratio="1x1" />
      </div>
      <div className="t-leadershipCard_content">
        <div className="t-leadershipCard_gender">
          <Text
            modifiers={['14x20', 'darkMidnightBlue', '300', 'capitalize']}
            content={gender}
          />
        </div>
        <div className="t-leadershipCard_name">
          <Text
            modifiers={['jet', '500', 'fontNoto', '18x28']}
            content={name}
          />
          {/* <div className="t-leadershipCard_icon">
            <Icon iconName="arrowDownGrey" size="24" />
          </div> */}
        </div>
        <div className="t-leadershipCard_position">
          <Text
            modifiers={['14x20', 'dimGray', '300']}
            content={position}
          />
        </div>
      </div>
    </div>
    <div className="t-leadershipCard_detail">
      {children}
    </div>
  </div>
);

export interface LeadershipDetailProps {
  gender: string;
  name: string;
  position: string;
  imgSrc: string;
  achievement: string;
  slogan?: string;
}

export const LeadershipDetail: React.FC<LeadershipDetailProps> = ({
  gender,
  name,
  position,
  imgSrc,
  achievement,
  slogan,
}) => (
  <div className="t-leadershipDetail">
    <div className="t-leadershipDetail_wrapper">
      <div className="t-leadershipDetail_info">
        <Heading
          modifiers={['darkMidnightBlue', '300', 'capitalize']}
          content={gender}
        />
        <div className="t-leadershipDetail_name">
          <Heading
            modifiers={['38x52', '500', 'jet', 'capitalize', 'fontNoto']}
            content={name}
          />
        </div>
        <div className="t-leadershipDetail_divider" />
        <Text
          modifiers={['dimGray', '300', '20x28']}
          content={position}
        />
      </div>
      <div className="t-leadershipDetail_thumbnail">
        <Image
          src={imgSrc}
          ratio="223x320"
          alt="leadershipDetail"
        />
      </div>
    </div>
    <div className="t-leadershipDetail_achievement">
      <Text
        modifiers={['16x24', '300', 'dimGray']}
        content={achievement}
      />
    </div>
    {
      slogan && (
        <div className="t-leadershipDetail_slogan">
          <div className="t-leadershipDetail_slogan_detail">
            <Text
              modifiers={['dimGray', '300', '20x28']}
              content={slogan}
            />
          </div>
        </div>
      )
    }
  </div>
);

export interface dataTabsLeadershipType {
  id: number;
  name: string;
  slug: string;
}

export interface LeadershipProps {
  title: string;
  tabCategoryLeadership: dataTabsLeadershipType[];
  tabDataLeaderShip?: LeadershipDetailProps[];
  hasButtonViewAll: boolean;
  handleClickViewAll?: () => void;
  handleChangeTab: (index: number) => void;
  loading?: boolean;
  isViewMore?: boolean;
}

const Leadership: React.FC<LeadershipProps> = ({
  title,
  tabCategoryLeadership,
  hasButtonViewAll,
  handleClickViewAll,
  handleChangeTab,
  loading,
  tabDataLeaderShip,
  isViewMore,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const [indexShow, setIndexShow] = useState(0);

  return (
    <div className="t-leadership">
      <Section>
        <Container>
          <Heading
            modifiers={['32x48', '500', 'uppercase', 'center', 'fontNoto', 'jet']}
            content={title}
          />
          <div className="t-leadership_wrapper">
            <Tabs variableMutate={indexActive}>
              {
                tabCategoryLeadership.map((item, index) => (
                  <Tab
                    size="20x28"
                    key={`tab-${index.toString()}`}
                    label={item.name}
                    active={index === indexActive}
                    handleClick={() => {
                      setIndexActive(index);
                      setIndexShow(0);
                      handleChangeTab(index);
                    }}
                  />
                ))
              }
            </Tabs>
            { loading ? <Loading isShow />
              : tabCategoryLeadership.map((_, idx) => (
                <TabPanel key={`leadership-${idx.toString()}`} active={idx === indexActive}>
                  <div className="t-leadership_item">
                    <div className="t-leadership_item_left">
                      <div className={mapModifiers('t-leadership_item_list', isViewMore && 'isViewMore')}>
                        {
                        tabDataLeaderShip?.map((item, index) => (
                          <div
                            className="t-leadership_item_card"
                            key={`leadership-card-${index.toString()}`}
                            onClick={() => setIndexShow(index)}
                          >
                            <LeadershipCard
                              {...item}
                              isShow={index === indexShow}
                            >
                              <LeadershipDetail
                                {...item}
                              />
                            </LeadershipCard>
                          </div>
                        ))
                      }
                      </div>
                      {hasButtonViewAll && (
                      <div className="t-leadership_item_btn">
                        <Button onClick={handleClickViewAll} modifiers="with-icon" iconName={isViewMore ? 'arrowUpBrown' : 'arrowDownBrown'} />
                      </div>
                      )}
                    </div>
                    <div className="t-leadership_item_right">
                      {
                        tabDataLeaderShip?.map((value, number) => (
                          <div
                            className={mapModifiers('t-leadership_item_detail', number === indexShow && 'show')}
                            key={`leadership-detail-${number.toString()}`}
                          >
                            <LeadershipDetail
                              {...value}
                            />
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </TabPanel>
              ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

LeadershipCard.defaultProps = {
  isShow: false,
};

export default Leadership;
