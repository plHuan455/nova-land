/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// import shareholderCard1 from 'assets/images/ShareholderRelations/img_shareholderCard1.png';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';
import { useAppSelector } from 'store/hooks';
import mapModifiers from 'utils/functions';

export interface ShareholderCardProps {
  imgSrc?: string;
  isStocks?: boolean;
  title: string;
  content?: string;
  handleClick?: () => void;
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
    <div
      className={mapModifiers(
        't-shareholderCard_thumbnail',
        isStocks && 'stocks',
      )}
    >
      {isStocks ? (
        children
      ) : (
        <Image src={imgSrc || ''} ratio="549x308" alt="ShareholderCard" />
      )}
    </div>
    <div className="t-shareholderCard_wrapper">
      <div className="t-shareholderCard_title">
        <Heading
          type="h3"
          modifiers={['500', 'arsenic', 'capitalize', 'fontNoto']}
          content={title}
        />
      </div>
      {content && (
        <div className="t-shareholderCard_content" onClick={handleClick}>
          <Text
            modifiers={['16x24', '300', 'camel', 'underline']}
            content={content}
          />
          <div className="t-shareholderCard_content_icon" />
        </div>
      )}
    </div>
  </div>
);

interface ShareholderRelationsProps {
  title: string;
  href: string;
  dataShareholderRelations: ShareholderCardProps;
  target?: string;
  namebtn?: string;
  imageFinancialReport?: string;
  titleFinancialReport?: string;
  titleStock?: string;
}

const ShareholderRelations: React.FC<ShareholderRelationsProps> = ({
  title,
  href,
  dataShareholderRelations,
  target,
  namebtn,
  imageFinancialReport,
  titleFinancialReport,
  titleStock,
}) => {
  const { t } = useTranslation();
  const language = useAppSelector((state) => state.system.language);

  const iframeStock = useMemo(() => {
    if (language === 'vi') {
      return (
        <iframe
          width="100%"
          height="1300px"
          frameBorder="0"
          src="https://ironline.vietstock.vn/vi/NVL"
        />
      );
    }
    if (language === 'en') {
      return (
        <iframe
          width="100%"
          height="1300px"
          frameBorder="0"
          src="https://ironline.vietstock.vn/en/NVL"
        />
      );
    }
    return '';
  }, [language]);

  return (
    <div className="t-shareholderRelations">
      <Container>
        <div className="t-shareholderRelations_title">
          <Heading
            modifiers={[
              '32x48',
              '700',
              'arsenic',
              'uppercase',
              'center',
              'fontCalibri',
            ]}
            content={title}
          />
        </div>
        <div className="t-shareholderRelations_content">
          <div className="t-shareholderRelations_content_item">
            <ShareholderCard isStocks title={titleStock || ''}>
              {iframeStock}
            </ShareholderCard>
          </div>
          <div className="t-shareholderRelations_content_item">
            <ShareholderCard
              {...dataShareholderRelations}
              title={titleFinancialReport || ''}
              imgSrc={imageFinancialReport}
            />
          </div>
        </div>
        <div className="t-shareholderRelations_button">
          <Link href={href} target={target}>
            <Button modifiers="outlineSpanishGray" type="button">
              <Text modifiers={['14x20', '400', 'fontLexend', 'center']}>
                {namebtn || t('financial_report.see_more_btn')}
              </Text>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

ShareholderRelations.defaultProps = {
  target: undefined,
  namebtn: undefined,
};

export default ShareholderRelations;
