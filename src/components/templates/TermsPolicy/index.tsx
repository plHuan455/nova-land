import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface TermsPolicyProps {
  title:string;
  description: string;
  isPageSustainableDevelopment?: boolean;
}

const TermsPolicy: React.FC<TermsPolicyProps> = ({
  title,
  description,
  isPageSustainableDevelopment,
}) => (
  <div className={`${mapModifiers('t-termsPolicy', isPageSustainableDevelopment && 'isPageSustainableDevelopment')} pt-80 pb-80`}>
    <Container>
      <div className="t-termsPolicy_content">
        <div className="t-termsPolicy_heading">
          <Heading modifiers={[isPageSustainableDevelopment ? '30x42' : '52x65', '600', 'capitalize', 'jet', 'center', 'fontNoto']}>
            {title}
          </Heading>
        </div>
        <div className="t-termsPolicy_content_ckeditor">
          <Text modifiers={['20x28', 'fontLexend', 'dimGray', 'justify']} content={description} />
        </div>
      </div>

    </Container>
  </div>
);

export default TermsPolicy;
