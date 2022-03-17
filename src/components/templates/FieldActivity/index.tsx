import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';

export interface FieldActivityProps {
  title: string;
  imgSrc: string;
}

const FieldActivity: React.FC<FieldActivityProps> = ({ title, imgSrc }) => (
  <Animate type="goUp">
    <div className="t-fieldActivity">
      <Container>
        <Heading
          modifiers={['32x48', '700', 'fontCalibri', 'jet', 'uppercase', 'center']}
          content={title}
        />
        <div className="t-fieldActivity_thumbnail u-mt-16 u-mt-sm-24 u-mt-lg-32">
          <Image
            src={imgSrc}
            ratio="674x272"
            alt={title}
          />
        </div>
      </Container>
    </div>
  </Animate>
);

export default FieldActivity;
