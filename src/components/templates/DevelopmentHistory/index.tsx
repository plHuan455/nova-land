import React from 'react';

import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

interface DevelopmentHistoryProps {
  title?: string;
  description?: string;
}

type ProcessItemProps = {
  year:string;
}

const ProcessItem:React.FC<ProcessItemProps> = ({
  year,
}) => (
  <div className="t-processItem">
    <span className="t-processItem_year">{year}</span>
    <div className="t-processItem_hexagon">
      <div />
      <div />
      <div />
    </div>
  </div>
);

const DevelopmentHistory: React.FC<DevelopmentHistoryProps> = ({
  title,
  description,
}) => {
  const settings = {
    dots: false,
    variableWidth: true,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    center: true,
  };

  return (
    <div className="t-developmentHistory">
      <Container>
        <Heading type="h3" modifiers={['32x48', '700', 'white', 'center', 'fontNoto']} content={title} />
        <div className="t-developmentHistory_description">
          <Text modifiers={['center', 'white', '16x24']} content={description} />
        </div>
        <div className="t-developmentHistory_process">
          <Carousel
            settings={settings}
          >
            <ProcessItem year="2010" />
            <ProcessItem year="2011" />
            <ProcessItem year="2012" />
            <ProcessItem year="2013" />
            <ProcessItem year="2014" />
            <ProcessItem year="2015" />
            <ProcessItem year="2016" />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

DevelopmentHistory.defaultProps = {
  title: undefined,
  description: undefined,
};

export default DevelopmentHistory;
