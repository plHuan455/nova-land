import React, { useEffect, useState } from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';

interface AwardCardProps {
  src: string;
  alt?: string;
  desc: string;
  awardYear: string;
}
const AwardCard: React.FC<AwardCardProps> = ({
  src,
  alt = 'award-img',
  desc,
  awardYear,
}) => (
  <div className="t-awardList_card">
    <div className="t-awardList_card_wrap">
      <div className="t-awardList_card_img">
        <img src={src} alt={alt} />
      </div>
      <div className="t-awardList_card_desc">
        <Text modifiers={['18x22', 'fontLexend', 'arsenic', 'center']}>{desc}</Text>
      </div>
    </div>
    <div className="t-awardList_card_year">
      <div className="t-awardList_card_year-clip">
        <Heading modifiers={['24x34', 'white', '400', 'center', 'fontNoto']}>
          {awardYear}
        </Heading>
      </div>
    </div>
  </div>
);

export type TabsDataTypes = {
  year: string;
  awardList: AwardCardProps[];
};

export interface AwardListProps {
  title: string;
  desc: string;
  tabsData: TabsDataTypes[];
  getActiveIdx?: (idx: number) => void;
  handleActiveTab: (idx: number) => void;
}

const AwardList: React.FC<AwardListProps> = ({
  title,
  desc,
  tabsData,
  getActiveIdx,
  handleActiveTab,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (getActiveIdx) getActiveIdx(activeIdx);
  }, [activeIdx, getActiveIdx]);

  return (
    <div className="t-awardList">
      <Container>
        <Heading
          modifiers={[
            '500',
            'fontNoto',
            'uppercase',
            '32x48',
            'jet',
            'center',
          ]}
        >
          {title}
        </Heading>
        <div className="t-awardList_desc">
          <Text modifiers={['16x24', '300', 'fontLexend', 'davysGrey', 'center']} content={desc} />
        </div>
        <div className="t-awardList_tabs">
          <Tabs>
            {tabsData?.map((item, idx) => (
              <Tab
                key={item.year}
                label={item.year}
                active={idx === activeIdx}
                acitveColor="goldenBrown"
                size="20x28"
                handleClick={() => {
                  setActiveIdx(idx);
                  handleActiveTab(idx);
                }}
              />
            ))}
          </Tabs>
          {tabsData?.map((panel, panelIdx) => (
            <TabPanel
              key={`award-panel-${panel.year}`}
              active={panelIdx === activeIdx}
            >
              <div className="t-awardList_tabs_panelWrap">
                {tabsData[panelIdx].awardList.length > 0 ? (
                  <>
                    {tabsData[panelIdx].awardList.map((item, cardIdx) => (
                      <div
                        key={`award-card-${item.awardYear
                        }-${cardIdx.toString()}`}
                        className="t-awardList_tabs_panelWrap-item"
                      >
                        <AwardCard
                          {...item}
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <Heading modifiers={['center', '38x52']}>
                      Không có dữ liệu
                    </Heading>
                  </>
                )}
              </div>
            </TabPanel>
          ))}
        </div>
      </Container>
    </div>
  );
};

AwardCard.defaultProps = {
  alt: undefined,
};

export default AwardList;
