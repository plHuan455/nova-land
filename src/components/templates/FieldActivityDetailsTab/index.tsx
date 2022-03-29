import React from 'react';

import Animate from 'components/organisms/Animate';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';

interface FieldActivityContentType {
  imgSrc: string;
  title: string;
  desc: string;
}

interface FieldActivityType {
  label: string;
  content: FieldActivityContentType;
}

export interface FieldActivityDetailsTabProps {
  dataFieldActivity: Array<FieldActivityType>;
  handleChangeTab: (index: number) => void;
  tag: number;
}

const FieldActivityDetailsTab: React.FC<FieldActivityDetailsTabProps> = ({
  dataFieldActivity,
  tag,
  handleChangeTab,
}) => (
  <div className="t-fieldActivityDetailsTab">
    <Animate type="goUp">
      <Tabs variableMutate={tag}>
        {dataFieldActivity.map((item, index) => (
          <Tab
            key={`tab-${index.toString()}`}
            label={item.label}
            active={index === tag}
            size="20x28"
            handleClick={() => handleChangeTab(index)}
          />
        ))}
      </Tabs>
      {dataFieldActivity.map((item, index) => (
        <TabPanel key={`tab-panel-${index.toString()}`} active={index === tag}>
          <TransportationInfrastructure
            imgSrc={item.content.imgSrc}
            title={item.content.title}
            desc={item.content.desc}
          />
        </TabPanel>
      ))}
    </Animate>
  </div>
);

FieldActivityDetailsTab.defaultProps = {};

export default FieldActivityDetailsTab;
