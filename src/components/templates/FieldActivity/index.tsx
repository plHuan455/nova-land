import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Container from 'components/organisms/Container';

interface FieldActivityProps {
  title: string;
  imgSrc: string;
}

const FieldActivity: React.FC<FieldActivityProps> = ({ title, imgSrc }) => (
  <div className="t-fieldActivity">
    <Container>
      <div className="t-fieldActivity_title">
        <Heading
          modifiers={['32x48', '700', 'fontNoto', 'jet', 'uppercase', 'center']}
          content={title}
        />
      </div>
      <div className="t-fieldActivity_image">
        <Image
          src={imgSrc}
          ratio="721x303"
          alt="FieldActivity"
        />
      </div>
    </Container>
  </div>
);

export default FieldActivity;
