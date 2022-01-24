import React from 'react';

import shareholderCard1 from 'assets/images/ShareholderRelations/img_shareholderCard1.png';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
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
          modifiers={['500', 'arsenic', 'capitalize', 'fontNoto']}
          content={title}
        />
      </div>
      {
        content && (
          <div className="t-shareholderCard_content" onClick={handleClick}>
            <Text
              modifiers={['16x24', '300', 'camel', 'underline']}
              content={content}
            />
            <div className="t-shareholderCard_content_icon" />
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
          modifiers={['32x48', '500', 'arsenic', 'uppercase', 'center', 'fontNoto']}
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
          <Button modifiers="outlineSpanishGray" type="button">
            <Text
              modifiers={['14x20', '400', 'fontLexend', 'center']}
              content="Xem tất cả quan hệ cổ đông"
            />
          </Button>
        </Link>
      </div>
    </Container>
  </div>
);

export default ShareholderRelations;
