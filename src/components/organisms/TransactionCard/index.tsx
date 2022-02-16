import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import { checkExternalUrl } from 'utils/functions';

export interface TransactionCardProps {
  imgSrc: string;
  title: string;
  location: string;
  phone?: string;
  faxNumber?: string;
  href: string;
  target?: string;
  nameBtn?: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  imgSrc,
  title,
  location,
  phone,
  faxNumber,
  href,
  target,
  nameBtn,
}) => {
  const { t } = useTranslation();

  return (
    <div className="o-transactionCard">
      <div className="o-transactionCard_thumbnail">
        <Image src={imgSrc} ratio="376x212" alt="TransactionCard" />
      </div>
      <div className="o-transactionCard_wrapper">
        <div className="o-transactionCard_title">
          <Text modifiers={['20x28', '600', 'jet']}>
            {title}
          </Text>
        </div>
        <div className="o-transactionCard_location u-mt-md-24 u-mt-14">
          <div className="u-pt-1">
            <Icon iconName="location" size="24" />
          </div>
          <div className="o-transactionCard_content u-ml-10">
            <Text modifiers={['16x24', '300', 'dimGray']}>
              {location}
            </Text>
          </div>
        </div>
        {phone && (
          <div className="o-transactionCard_phone u-mt-12">
            <div className="u-pt-1">
              <Icon iconName="phone" size="24" />
            </div>
            <div className="o-transactionCard_content u-ml-10">
              <Link href={`tel:${phone}`} useExternal>
                <Text modifiers={['16x24', '300', 'dimGray']}>
                  {phone}
                </Text>
              </Link>
            </div>
          </div>
        )}
        {faxNumber && (
          <div className="o-transactionCard_faxNumber u-mt-12">
            <div className="u-pt-1">
              <Icon iconName="fax" size="24" />
            </div>
            <div className="o-transactionCard_content u-ml-10">
              <Link href={`tel:${faxNumber}`} useExternal>
                <Text modifiers={['16x24', '300', 'dimGray']}>
                  {phone}
                </Text>
              </Link>
            </div>
          </div>
        )}
        <div className="o-transactionCard_btn u-mt-md-24 u-mt-18">
          <Link href={href} target={target || '_blank'} useExternal={checkExternalUrl(href)}>
            <div className="o-transactionCard_btn_wrap">
              <Text modifiers={['14x20', '300', 'camel']}>
                {nameBtn || t('map.see_location')}
              </Text>
              <div className="o-transactionCard_btn_icon u-ml-10">
                <Icon iconName="arrowNextYellowBrown" size="16" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
