import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface TermsPolicyProps {
  title:string;
  description: string;
}

const TermsPolicy: React.FC<TermsPolicyProps> = ({ title, description }) => (
  <div className="t-termsPolicy">
    <Container>
      <div className="t-termsPolicy_content">
        <div className="t-termsPolicy_heading">
          <Heading modifiers={['52x65', '600', 'capitalize', 'jet', 'center', 'fontNoto']}>
            {title}
          </Heading>
        </div>
        <Text modifiers={['18x22', 'fontLexend', 'arsenic', 'justify']} content={description} />
      </div>

    </Container>
  </div>
);

export default TermsPolicy;
