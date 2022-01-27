import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import NewsCard from 'components/organisms/NewsCard';
import mapModifiers from 'utils/functions';

export interface CardType {
  imgSrc: string;
  alt?: string;
  title: string;
  time: string;
  href: string;
}

export interface ScheduleProps {
  heading?: string,
  subTitle?: string,
  dataCard: CardType[],
  modifiers?: 'fourItem',
  btnText?: string;
  btnHref?: string;
  target?: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  heading,
  subTitle,
  dataCard,
  modifiers,
  btnText,
  btnHref,
  target,
}) => (
  <div className="t-schedule">
    <div className="t-schedule_heading">
      <Heading modifiers={['jet', '30x42', 'center', '600', 'fontNoto']} content={heading} />
    </div>
    <div className="t-schedule_subTitle">
      <Text modifiers={['fontLexend', '400', '18x28', 'center', 'dimGray']} content={subTitle} />
    </div>
    <Container>
      <div className="t-schedule_content">
        {
          dataCard.length === 3 && (
            <>
              <div className="t-schedule_left">
                <NewsCard variant="vertical" {...dataCard[0]} />
              </div>
              <div className="t-schedule_right">
                {dataCard.slice(1).map((item, index) => (
                  <div className="t-schedule_right_item" key={`latestNews-${index.toString()}`}>
                    <NewsCard variant="horizontal" {...item} />
                  </div>
                ))}
              </div>
            </>
          )
        }
        {
          dataCard.length === 4 && (
            <>
              <div className="t-schedule_left">
                <NewsCard variant="vertical" {...dataCard[0]} />
              </div>
              <div className="t-schedule_right">
                {dataCard.slice(1).map((item, index) => (
                  <div className={mapModifiers('t-schedule_right_item', modifiers)} key={`t-schedule-${index.toString()}`}>
                    <NewsCard variant="smallVertical" {...item} />
                  </div>
                ))}
              </div>
              <div className="t-schedule_button">
                <Link href={btnHref} target={target}>
                  <Button modifiers="outlineSpanishGray">{btnText}</Button>
                </Link>
              </div>
            </>
          )
        }
        {
          dataCard.length <= 2 && (
            <div className="t-schedule_two">
              {dataCard.map((item, index) => (
                <div className="t-schedule_right_item" key={`t-schedule-${index.toString()}`}>
                  <NewsCard variant="smallVertical" {...item} />
                </div>
              ))}
            </div>
          )
        }
      </div>
    </Container>
  </div>
);

export default Schedule;
