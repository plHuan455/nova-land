import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

type DataTypes = {
  src: string;
  title: string;
}

export interface ContentBlockProps {
  title: string;
  desc: string;
  dataList: DataTypes[];
}

const ContentBlock: React.FC<ContentBlockProps> = ({ title, desc, dataList }) => (
  <div className="t-VMV_content">
    <Heading modifiers={['32x48', '700', 'fontNoto', 'white', 'uppercase', 'center']}>{title}</Heading>
    <div className="u-mt-16 u-mt-md-24 u-mt-lg-32 u-mb-16 u-mb-md-24 u-mb-lg-32">
      <Text modifiers={['400', 'fontLexend', 'white', 'center']}>{desc}</Text>
    </div>
    <div className="t-VMV_list">
      {dataList?.map((item, idx) => (
        <div key={`content-${idx.toString()}`} className="t-VMV_list-item">
          <div className="t-VMV_list-img">
            <Image src={item.src} ratio="1x1" alt={item.title} />
          </div>
          <div className="u-ml-12 u-ml-lg-16">
            <Text modifiers={['400', 'fontLexend', 'white', 'center']}>{item.title}</Text>
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface VisionMissionValueProps {
  dataList: ContentBlockProps[];
}

const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ dataList }) => (
  <div className="t-VMV">
    <Container>
      <div className="t-VMV_wrapper">
        {dataList?.map((item, idx) => (
          <div key={`VMV-item-${idx.toString()}`} className="t-VMV_block">
            <ContentBlock {...item} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);

VisionMissionValue.defaultProps = {
};

export default VisionMissionValue;
