/* eslint-disable react/require-default-props */

import React from 'react';

import error404Img from 'assets/images/errors/error-404.png';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';

export interface ErrorProps {
  title: string;
  description: string;
  btnHomeText: string;
  image?: string;
  linkButton?: string;
  targetButton?: string;
}

const Error: React.FC<ErrorProps> = ({
  title,
  description,
  btnHomeText,
  image,
  linkButton,
  targetButton,
}) => (
  <div className="t-error">
    <Section>
      <Container>
        <div className="t-error_imgError">
          <Image ratio="641x211" src={image || error404Img} alt="imageError" />
        </div>
        <div className="t-error_wrapContent">
          <Heading modifiers={['jet', '30x37-5', '600', 'center']}>
            {title}
          </Heading>
          <Text modifiers={['jet', '20x28', '400', 'center']}>
            {description}
          </Text>
          <div className="t-error_btn">
            <Link href={linkButton} target={targetButton}>
              <Button>{btnHomeText}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  </div>
);

export default Error;
