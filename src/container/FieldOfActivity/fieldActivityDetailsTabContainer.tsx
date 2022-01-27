import React from 'react';

import FieldActivityDetailsTab from 'components/templates/FieldActivityDetailsTab';
import Section from 'components/templates/Section';
import { getImageURL } from 'utils/functions';

export interface FieldActivityDetailsTabTypes {
  tab1: {
    image: string;
    title: string;
    tabName: string;
    descriptoion: string;
    titleProject: string;
  };
  tab2: {
    image: string;
    title: string;
    tabName: string;
    descriptoion: string;
  }
}

interface FieldActivityDetailsTabBlock {
  blocks: FieldActivityDetailsTabTypes;
}

const FieldActivityDetailsTabContainer: React.FC<FieldActivityDetailsTabBlock> = ({ blocks }) => (
  <div className="p-fieldOfActivity_heroBanner">
    <Section>
      <FieldActivityDetailsTab
        dataFieldActivity={[
          {
            label: blocks.tab1?.tabName,
            content: {
              imgSrc: getImageURL(blocks.tab1?.image),
              title: blocks.tab1?.title,
              desc: blocks.tab1?.descriptoion,
            },
          },
          {
            label: blocks.tab2?.tabName,
            content: {
              imgSrc: getImageURL(blocks.tab2?.image),
              title: blocks.tab2?.title,
              desc: blocks.tab2?.descriptoion,
            },
          },
        ]}
      />
    </Section>
  </div>
);

export default FieldActivityDetailsTabContainer;
