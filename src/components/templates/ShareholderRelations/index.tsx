import React from 'react';

import shareholderCard1 from 'assets/images/ShareholderRelations/img_shareholderCard1.png';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import mapModifiers from 'utils/functions';

export interface ShareholderCardProps {
  imgSrc?: string;
  isStocks?: boolean;
  title: string;
  content?: string;
  handleClick?:()=>void;
}

export const ShareholderCard: React.FC<ShareholderCardProps> = ({
  imgSrc,
  isStocks,
  title,
  content,
  handleClick,
  children,
}) => (
  <div className="t-shareholderCard">
    <div className={mapModifiers('t-shareholderCard_thumbnail', isStocks && 'stocks')}>
      {
        isStocks ? (children) : (
          <Image
            src={imgSrc || ''}
            ratio="549x308"
            alt="ShareholderCard"
          />
        )
      }
    </div>
    <div className="t-shareholderCard_wrapper">
      <div className="t-shareholderCard_title">
        <Heading
          type="h3"
          modifiers={['600', 'arsenic', 'capitalize', 'fontNoto']}
          content={title}
        />
      </div>
      {
        content && (
          <div className="t-shareholderCard_content" onClick={handleClick}>
            <Text
              modifiers={['16x24', '400', 'goldenBrown', 'fontLexend']}
              content={content}
            />
            <div className="t-shareholderCard_content_icon">
              <Icon iconName="arrowNextWhite2" size="10" />
            </div>
          </div>
        )
      }
    </div>
  </div>
);

interface ShareholderRelationsProps {
  title: string;
  href: string;
  dataShareholderRelations: ShareholderCardProps,
}

const ShareholderRelations: React.FC<ShareholderRelationsProps> = ({
  title,
  href,
  dataShareholderRelations,
}) => (
  <div className="t-shareholderRelations">
    <Container>
      <div className="t-shareholderRelations_title">
        <Heading
          modifiers={['32x48', '700', 'arsenic', 'uppercase', 'center', 'fontNoto']}
          content={title}
        />
      </div>
      <div className="t-shareholderRelations_content">
        <div className="t-shareholderRelations_content_item">
          <ShareholderCard
            isStocks
            title="Cổ Phiếu"
          >
            <Image
              src={shareholderCard1 || ''}
              ratio="483x286"
              alt="ShareholderCard"
            />
          </ShareholderCard>
        </div>
        <div className="t-shareholderRelations_content_item">
          <ShareholderCard
            {... dataShareholderRelations}
          />
        </div>
      </div>
      <div className="t-shareholderRelations_button">
        <Link href={href}>
          <Button modifiers="outline" type="button">
            <Text
              modifiers={['16x24', '400', 'fontLexend', 'center']}
              content="Xem thêm báo cáo tài chính"
            />
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);

export default ShareholderRelations;
