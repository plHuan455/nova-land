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
  <div className="t-VMV_contentBlock">
    <Heading modifiers={['32x48', '700', 'fontNoto', 'white', 'uppercase', 'center']}>{title}</Heading>
    <div className="t-VMV_contentBlock_desc">
      <Text modifiers={['400', 'fontLexend', 'white', 'center']}>{desc}</Text>
    </div>
    <div className="t-VMV_contentBlock_list">
      {dataList?.map((item, idx) => (
        <div key={`contentBlock-${idx.toString()}`} className="t-VMV_contentBlock_list_item">
          <div className="t-VMV_contentBlock_list_item-img">
            <Image src={item.src} ratio="1x1" alt="" />
          </div>
          <div className="t-VMV_contentBlock_list_item-desc">
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
