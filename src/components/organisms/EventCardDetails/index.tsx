/* eslint-disable react/require-default-props */
import React from 'react';

import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { checkExternalUrl } from 'utils/functions';

export interface EventCardDetailsProps {
  thumbnail?: string;
  time?: string;
  timeSchedule?: string;
  address?: string;
  name?: string;
  button?: {
    text: string;
    url: string;
    target: string;
  };
}

const EventCardDetails: React.FC<EventCardDetailsProps> = ({
  address,
  button,
  thumbnail,
  name,
  time,
  timeSchedule,
}) => (
  <div className="o-eventCardDetails">
    <div className="o-eventCardDetails_thumbnail">
      <Image src={thumbnail || ''} ratio="756x426" alt={address} />
    </div>
    <div className="o-eventCardDetails_content">
      <div className="o-eventCardDetails_left">
        <div className="o-eventCardDetails_left_item">
          <Icon iconName="orangeTime" size="24" />
          <Text modifiers={['jet', '600', '18x28', 'fontLexend']}>{time}</Text>
        </div>
        <div className="o-eventCardDetails_left_item">
          <Icon iconName="orangeTimeSchedule" size="24" />
          <Text modifiers={['jet', '600', '18x28', 'fontLexend']}>
            {timeSchedule}
          </Text>
        </div>
        <div className="o-eventCardDetails_left_item">
          <Icon iconName="orangeAddress" size="24" />
          <div>
            <Text modifiers={['jet', '600', '18x28', 'fontLexend']}>
              {name}
            </Text>
            <Text modifiers={['dimGray', '400', '16x24', 'fontLexend']}>
              {address}
            </Text>
          </div>
        </div>
      </div>
      <div className="o-eventCardDetails_right">
        <Link
          href={button?.url}
          target={button?.target}
          useExternal={checkExternalUrl(button?.url)}
        >
          <Button>{button?.text}</Button>
        </Link>
      </div>
    </div>
  </div>
);

EventCardDetails.defaultProps = {};

export default EventCardDetails;
