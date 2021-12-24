import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

interface TransportationInfrastructureProps {
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
    <Container>
      <div className="t-transportInfrastructure_title">
        <Heading modifiers={['32x48', '700', 'fontNoto', 'jet', 'uppercase']}>{title}</Heading>
      </div>
      <div className="t-transportInfrastructure_desc">
        <Text modifiers={['dimGray', '400', 'center']}>{desc}</Text>
      </div>
      <div className="t-transportInfrastructure_img">
        <Image
          src={imgSrc}
          srcTablet={imgSrcTablet}
          srcMobile={imgSrcMobile}
          ratio="1126x376"
          alt="banner"
        />
      </div>
    </Container>
  </div>
);

TransportationInfrastructure.defaultProps = {
  imgSrcTablet: undefined,
  imgSrcMobile: undefined,
};

export default TransportationInfrastructure;
