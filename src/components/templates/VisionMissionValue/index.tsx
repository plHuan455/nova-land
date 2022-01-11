import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';
import useMatchHeight from 'hooks/useMatchHeight';

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
    <div className="t-VMV_title">
      <Heading modifiers={['32x48', '500', 'fontNoto', 'white', 'uppercase', 'center']}>{title}</Heading>
    </div>
    <div className="t-VMV_desc u-mt-16 u-mt-md-24 u-mt-lg-32 u-mb-16 u-mb-md-24">
      <Text modifiers={['300', 'fontLexend', 'white', 'center', '16x24']}>{desc}</Text>
    </div>
    <div className="t-VMV_list">
      {dataList?.map((item, idx) => (
        <div key={`content-${idx.toString()}`} className="t-VMV_list-item">
          <div className="t-VMV_list-img">
            <Image src={item.src} ratio="1x1" alt={item.title} />
          </div>
          <div className="u-ml-12 u-ml-lg-16">
            <Text modifiers={['300', 'white', 'left', '16x24']}>{item.title}</Text>
          </div>
        </div>
      ))}
    </div>
  </div>
);

interface VisionMissionValueProps {
  dataList: ContentBlockProps[];
}

const VisionMissionValue: React.FC<VisionMissionValueProps> = ({ dataList }) => {
  useMatchHeight('.t-VMV_title');
  useMatchHeight('.t-VMV_desc');

  return (
    <div className="t-VMV">
      <Container>
        <div className="t-VMV_wrapper">
          {dataList?.map((item, idx) => (
            <div key={`VMV-item-${idx.toString()}`} className="t-VMV_block">
              <Animate type="fadeInUp" extendClassName={`t-VMV_block-animate-${idx + 1}`}>
                <ContentBlock {...item} />
              </Animate>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VisionMissionValue;
