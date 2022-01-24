import React, { useState } from 'react';

import Animate from 'components/organisms/Animate';
import { Tab, TabPanel, Tabs } from 'components/organisms/Tabs';
import TransportationInfrastructure from 'components/templates/TransportationInfrastructure';

interface FieldActivityContentType {
  imgSrc: string;
  title: string;
  desc: string;
}

interface FieldActivityType{
  label: string;
  content: FieldActivityContentType;
}

export interface FieldActivityDetailsTabProps {
  dataFieldActivity: Array<FieldActivityType>;
}

const FieldActivityDetailsTab: React.FC<FieldActivityDetailsTabProps> = ({ dataFieldActivity }) => {
  const [indexActive, setIndexActive] = useState(0);

  return (
    <div className="t-fieldActivityDetailsTab">
      <Animate type="goUp">
        <Tabs variableMutate={indexActive}>
          {
        dataFieldActivity.map((item, index) => (
          <Tab
            key={`tab-${index.toString()}`}
            label={item.label}
            active={index === indexActive}
            size="20x28"
            handleClick={() => setIndexActive(index)}
          />
        ))
      }
        </Tabs>
        {dataFieldActivity.map((item, index) => (
          <TabPanel key={`tab-panel-${index.toString()}`} active={index === indexActive}>
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
};

FieldActivityDetailsTab.defaultProps = {
};

export default FieldActivityDetailsTab;
