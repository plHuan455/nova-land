import React, { useRef, useState, useLayoutEffect } from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import mapModifiers from 'utils/functions';

interface LeadershipCardProps {
  gender: string;
  name: string;
  imgSrc: string;
  isShow?: boolean;
}

export const LeadershipCard: React.FC<LeadershipCardProps> = ({
  gender, name, imgSrc, isShow, children,
}) => {
  const leaderShipRef = useRef<HTMLDivElement>(null);

  return (
    <div className={mapModifiers('t-leadershipCard', isShow && 'show')}>
      <div className="t-leadershipCard_thumbnail">
        <Image src={imgSrc} alt="LeadershipCard" ratio="1x1" />
      </div>
      <div className="t-leadershipCard_content">
        <div className="t-leadershipCard_gender">
          <Text
            modifiers={['16x24', 'coolBlack', '400', 'fontLexend', 'capitalize']}
            content={gender}
          />
        </div>
        <div className="t-leadershipCard_name">
          <Heading
            modifiers={['arsenic', '600', 'fontNoto', 'uppercase']}
            content={name}
          />
          <div className="t-leadershipCard_icon">
            <Icon iconName="arrowDownGrey" size="24" />
          </div>
        </div>
        <div
          style={{
            maxHeight: isShow ? leaderShipRef.current?.clientHeight : 0,
          }}
          className="t-leadershipCard_wrapper"
        >
          <div ref={leaderShipRef} className="t-leadershipCard_position">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface LeadershipDetailProps {
  gender: string;
  name: string;
  position: string;
  imgSrc: string;
  achievement: string[];
  slogan: string;
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
          modifiers={['darkMidnightBlue', '400', 'fontLexend', 'capitalize']}
          content={gender}
        />
        <div className="t-leadershipDetail_name">
          <Heading
            modifiers={['38x52', '700', 'jet', 'capitalize', 'fontNoto']}
            content={name}
          />
        </div>
        <Heading
          modifiers={['dimGray', '400', 'fontLexend']}
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
      {
        achievement.map((item, index) => (
          <div className="t-leadershipDetail_item" key={`leadershipDetail_${index.toString()}`}>
            <div className="t-leadershipDetail_item_icon">
              <Icon iconName="circleCamel" size="13" />
            </div>
            <div className="t-leadershipDetail_item_content">
              <Text
                modifiers={['16x24', '400', 'fontLexend', 'dimGray']}
                content={item}
              />
            </div>
          </div>
        ))
      }
    </div>
    <div className="t-leadershipDetail_slogan">
      <div className="t-leadershipDetail_slogan_detail">
        <Heading
          modifiers={['dimGray', '400', 'fontLexend']}
          content={slogan}
        />
      </div>
    </div>
  </div>
);

export interface dataTabsLeadershipType {
  titleTab: string;
  dataTab: LeadershipDetailProps[];
}

interface LeadershipProps {
  title: string;
  tabDataLeadership: dataTabsLeadershipType[];
}

const Leadership: React.FC<LeadershipProps> = ({
  title, tabDataLeadership,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const [indexShow, setIndexShow] = useState(0);
  const [sizeScreen, setSizeScreen] = useState(0);

  useLayoutEffect(() => {
    function updateSize() {
      setSizeScreen(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="t-leadership">
      <Container>
        <Heading
          modifiers={['32x48', '700', 'uppercase', 'center', 'fontNoto']}
          content={title}
        />
        <div className="t-leadership_wrapper">
          <Tabs variableMutate={indexActive}>
            {
              tabDataLeadership.map((item, index) => (
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
            tabDataLeadership.map((ele, idx) => (
              <TabPanel key={`leadership-${idx.toString()}`} active={idx === indexActive}>
                <div className="t-leadership_item">
                  <div className="t-leadership_item_left">
                    {
                      ele.dataTab.map((item, index) => (
                        <div
                          className="t-leadership_item_card"
                          key={`leadership-card-${index.toString()}`}
                          onClick={() => setIndexShow(index)}
                        >
                          <LeadershipCard
                            {...item}
                            isShow={index === indexShow}
                          >
                            {
                              sizeScreen > 991 ? (
                                <Text
                                  modifiers={['16x24', 'davysGrey', '400', 'fontLexend']}
                                  content={item.position}
                                />
                              ) : (
                                <LeadershipDetail
                                  {...item}
                                />
                              )
                            }
                          </LeadershipCard>
                        </div>
                      ))
                    }
                  </div>
                  <div className="t-leadership_item_right">
                    {
                      sizeScreen > 991 && ele.dataTab.map((value, number) => (
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
            ))
          }
        </div>
      </Container>
    </div>
  );
};

LeadershipCard.defaultProps = {
  isShow: false,
};

export default Leadership;
