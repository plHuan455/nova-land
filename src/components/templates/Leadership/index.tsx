import React, {
  useCallback, useState,
} from 'react';

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
            modifiers={['jet', '500', 'fontCalibri', '18x28']}
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
          modifiers={['darkMidnightBlue', '300', 'capitalize', 'fontCalibri']}
          content={gender}
        />
        <div className="t-leadershipDetail_name">
          <Heading
            modifiers={['38x52', '500', 'jet', 'capitalize', 'fontCalibri']}
            content={name}
          />
        </div>
        <div className="t-leadershipDetail_divider" />
        <Text
          modifiers={['dimGray', '300', '20x28', 'fontCalibri']}
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
  handleChangeLeader?: (index: number) => void;
  currentLeader?: LeadershipDetailProps;
  leaderShipList?: LeadershipDetailProps[];
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
  handleChangeLeader,
  currentLeader,
  leaderShipList,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const [indexShow, setIndexShow] = useState(0);

  const handleChangeItem = useCallback((index: number) => {
    if (handleChangeLeader) {
      setIndexShow(index);
      handleChangeLeader(index);
    }
  }, [handleChangeLeader]);

  return (
    <div className="t-leadership">
      <Section>
        <Container>
          <Heading
            modifiers={['32x48', '700', 'uppercase', 'center', 'fontCalibri', 'jet']}
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
                            onClick={() => handleChangeItem(index)}
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
                        leaderShipList?.map((value, number) => (
                          <div
                            className={mapModifiers('t-leadership_item_detail', number === indexShow && 'show')}
                            key={`leadership-detail-${number.toString()}`}
                          >
                            <LeadershipDetail
                              gender={currentLeader ? currentLeader.gender : ''}
                              name={currentLeader ? currentLeader.name : ''}
                              position={currentLeader ? currentLeader.position : ''}
                              imgSrc={currentLeader ? currentLeader.imgSrc : ''}
                              achievement={currentLeader ? currentLeader.achievement : ''}
                              slogan={currentLeader ? currentLeader.slogan : ''}
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
