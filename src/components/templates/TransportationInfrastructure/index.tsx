import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';

export interface TransportationInfrastructureProps {
  imgSrc: string;
  imgSrcTablet?: string;
  imgSrcMobile?: string;
  title: string;
  desc: string;
}

const TransportationInfrastructure: React.FC<
  TransportationInfrastructureProps
> = ({
  imgSrc, imgSrcTablet, imgSrcMobile, title, desc,
}) => (
  <div className="t-transportInfrastructure">
    <Animate type="goUp">
      <Container>
        <Heading modifiers={['32x48', '500', 'fontNoto', 'jet', 'uppercase', 'center']}>{title}</Heading>
        <div className="u-mt-8 u-mt-sm-16">
          <Text type="div" modifiers={['dimGray', '300', 'center', '16x24']} content={desc} />
        </div>
        <div className="u-mt-16 u-mt-sm-32">
          <Image
            src={imgSrc}
            srcTablet={imgSrcTablet}
            srcMobile={imgSrcMobile}
            ratio="1194x191"
            alt="banner"
          />
        </div>
      </Container>
    </Animate>
  </div>
);

export default TransportationInfrastructure;
