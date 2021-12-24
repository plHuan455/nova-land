import React from 'react';

import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface ShareholderCardProps {
  imgSrc: string;
  isStocks?: boolean;
  title: string;
  content?: string;
  href: string;
}

export const ShareholderCard: React.FC<ShareholderCardProps> = ({
  imgSrc,
  isStocks,
  title,
  content,
  href,
}) => (
  <div className="t-shareholderCard">
    <Link href={href}>
      <div className={mapModifiers('t-shareholderCard_thumbnail', isStocks && 'stocks')}>
        <Image
          src={imgSrc}
          ratio={isStocks ? '483x286' : '549x308'}
          alt="ShareholderCard"
        />
      </div>
      <div className="t-shareholderCard_wrapper">
        <div className="t-shareholderCard_title">
          <Heading
            modifiers={['600', 'arsenic', 'capitalize']}
            content={title}
          />
        </div>
        {
          content && (
            <div className="t-shareholderCard_content">
              <Text
                modifiers={['16x24', '400', 'goldenBrown']}
                content={content}
              />
              <div className="t-shareholderCard_content_icon">
                <Icon iconName="arrowNextWhite2" size="10" />
              </div>
            </div>
          )
        }
      </div>
    </Link>
  </div>
);

interface ShareholderRelationsProps {
  title: string;
  dataShareholderRelations: ShareholderCardProps[],
}

const ShareholderRelations: React.FC<ShareholderRelationsProps> = ({
  title,
  dataShareholderRelations,
}) => (
  <div className="t-shareholderRelations">
    <Container>
      <div className="t-shareholderRelations_title">
        <Heading
          modifiers={['32x48', '700', 'arsenic', 'uppercase', 'center']}
          content={title}
        />
      </div>
      <div className="t-shareholderRelations_content">
        {
          dataShareholderRelations.map((item, index) => (
            <div
              className="t-shareholderRelations_content_item"
              key={`_shareholderRelations_${index.toString()}`}
            >
              <ShareholderCard
                {... item}
              />
            </div>
          ))
        }
      </div>
      <div className="t-shareholderRelations_button">
        <Button modifiers="outline">
          Xem thêm báo cáo tài chính
        </Button>
      </div>
    </Container>
  </div>
);

export default ShareholderRelations;
