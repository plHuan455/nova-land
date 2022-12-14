import React from 'react';
import { Container } from 'react-bootstrap';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Section from 'components/templates/Section';

interface SignupJobPostingsProps {
  heading?: string,
  desc?: string,
  handleClick?: () => void,
  btnText?: string,
}

const SignupJobPostings: React.FC<SignupJobPostingsProps> = ({
  heading,
  desc,
  handleClick,
  btnText,
}) => (
  <div className="t-signupJobPostings">
    <Section>
      <Container>
        <div className="t-signupJobPostings_heading">
          <Heading modifiers={['700', 'center', '30x42', 'fontCalibri', 'jet', 'uppercase']} content={heading} />
        </div>
        <div className="t-signupJobPostings_desc">
          <Text modifiers={['400', 'fontLexend', '18x28', 'center', 'dimGray']} content={desc} />
        </div>
        <div className="t-signupJobPostings_button">
          <Button onClick={handleClick}>{btnText}</Button>
        </div>
      </Container>
    </Section>
  </div>
);

SignupJobPostings.defaultProps = {
  heading: undefined,
  desc: undefined,
  handleClick: undefined,
  btnText: undefined,
};

export default SignupJobPostings;
