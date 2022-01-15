import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import Container from 'components/organisms/Container';

interface FieldActivityProps {
  title: string;
  imgSrc: string;
}

const FieldActivity: React.FC<FieldActivityProps> = ({ title, imgSrc }) => (
  <Animate type="goUp">
    <div className="t-fieldActivity">
      <Container>
        <Heading
          modifiers={['32x48', '500', 'fontNoto', 'jet', 'uppercase', 'center']}
          content={title}
        />
        <div className="u-mt-16 u-mt-sm-24 u-mt-lg-32">
          <Image
            src={imgSrc}
            ratio="721x303"
            alt="field_activity"
          />
        </div>
      </Container>
    </div>
  </Animate>
);

export default FieldActivity;
