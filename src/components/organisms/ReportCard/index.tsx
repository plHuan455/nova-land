import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

interface ReportCardProps {
  imageSrc?: string;
  title?: string;
  onDownload?: () => void;
}

const ReportCard: React.FC<ReportCardProps> = ({ imageSrc, title, onDownload }) => (
  <div className="o-reportCard">
    <div className="o-reportCard_wrapimg">
      <Image ratio="376x212" src={imageSrc || ''} />
    </div>
    <div className="o-reportCard_wrapcontent">
      <Text modifiers={['20x28', '600', 'jet']}>{title}</Text>
      <div className="o-reportCard_wrapdownload" onClick={onDownload}>
        <Text modifiers={['14x20', 'camel']}>Xem và tải PDF</Text>
        <div className="o-reportCard_icon" />
      </div>
    </div>
  </div>
);

ReportCard.defaultProps = {
  imageSrc: undefined,
  title: undefined,
  onDownload: undefined,
};

export default ReportCard;
