import React, { useMemo, useState } from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Carousel from 'components/organisms/Carousel';
import Container from 'components/organisms/Container';

export type ProcessItemProps = {
  year: string;
  description: string;
  image: string;
  imgBackground?: string,
}

export interface DevelopmentHistoryProps {
  title: string;
  description: string;
  list: ProcessItemProps[];
}

const ProcessItem: React.FC<ProcessItemProps> = ({
  year,
  description,
  image,
}) => (
  <div className="t-processItem">
    <span className="t-processItem_year">{year}</span>
    <div className="t-processItem_hexagon">
      <div />
      <div />
      <div />
    </div>
    <div className="t-processItem_card">
      <div className="t-processItem_card_description">
        <Text modifiers={['300', 'davysGrey', 'center']} content={description} />
      </div>
      <div className="t-processItem_card_image">
        <Image src={image} ratio="350x197" />
      </div>
    </div>
  </div>
);

const DevelopmentHistory: React.FC<DevelopmentHistoryProps> = ({
  title,
  description,
  list,
}) => {
  const [indexActive, setIndexActive] = useState(0);
  const settings = useMemo(() => ({
    className: 'center',
    centerMode: true,
    dots: false,
    variableWidth: list.length > 1,
    arrows: false,
    slidesToScroll: 1,
    infinite: false,
    focusOnSelect: true,
    initialSlide: 0, // Update when center initial
    speed: 800,
    afterChange: (index: number) => setIndexActive(index),
  }), [list.length]);
  // eslint-disable-next-line no-console
  console.log(indexActive);

  return (
    <div className="t-developmentHistory">
      <Container>
        <Heading type="h2" modifiers={['32x48', '500', 'white', 'center', 'fontNoto']} content={title} />
        <div className="t-developmentHistory_description">
          <Text modifiers={['center', 'white', '16x24', '300']} content={description} />
        </div>
        {list.length > 0 && (
          <div className="t-developmentHistory_content">
            <div className="t-developmentHistory_process">
              <Carousel
                settings={settings}
              >
                {list.map((item, index) => (
                  <ProcessItem {...item} key={`item-${index.toString()}`} />
                ))}
              </Carousel>
            </div>
            <div className="t-developmentHistory_background">
              <Image alt="imgBackground" ratio="624x495" src={list[indexActive].imgBackground || ''} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default DevelopmentHistory;
