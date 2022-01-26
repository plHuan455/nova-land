import React from 'react';

import image1 from 'assets/images/WorkEnvironment/image1.png';
import image2 from 'assets/images/WorkEnvironment/image2.png';
import image3 from 'assets/images/WorkEnvironment/image3.png';
import Container from 'components/organisms/Container';
import Section from 'components/templates/Section';
import WorkEnvironment from 'components/templates/WorkEnvironment';

const listImage = [
  image1,
  image2,
  image3,
  image1,
];

const WorkEnvironmentContainer: React.FC = () => (
  <div className="p-recruitment_workEnvironmentContainer">
    <Section>
      <Container>
        <WorkEnvironment
          title="môi trường làm việc tại novaland"
          listImage={listImage}
        />
      </Container>
    </Section>
  </div>
);

export default WorkEnvironmentContainer;
