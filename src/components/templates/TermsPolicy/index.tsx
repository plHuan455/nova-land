import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

export interface TermsPolicyProps {
  title:string;
  description: string;
}

const TermsPolicy: React.FC<TermsPolicyProps> = ({ title, description }) => (
  <div className="t-termsPolicy pt-80 pb-80">
    <Container>
      <div className="t-termsPolicy_content">
        <div className="t-termsPolicy_heading">
          <Heading modifiers={['52x65', '600', 'capitalize', 'jet', 'center', 'fontCalibri']}>
            {title}
          </Heading>
        </div>
        <div className="t-termsPolicy_content_ckeditor">
          <Text modifiers={['18x22', 'fontLexend', 'arsenic', 'justify']} content={description} />
        </div>
      </div>

    </Container>
  </div>
);

export default TermsPolicy;
