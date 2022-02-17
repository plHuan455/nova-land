import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'components/atoms/Button';
import Divider from 'components/atoms/Divider';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

export interface InfoContactTypes {
  imageSrc: string;
  title: string;
  content: string;
}

interface InfoContactRecruitmentProps {
  listInfo?: Array<InfoContactTypes>;
  onClickApply?: () => void;
  onClickShare?: () => void;
}

const InfoContactRecruitment: React.FC<InfoContactRecruitmentProps> = ({
  listInfo,
  onClickApply,
  onClickShare,
}) => {
  const { t } = useTranslation();

  return (
    <div className="m-infoContactRecruitment">
      <div className="m-infoContactRecruitment_groupbtn">
        <Button modifiers="primary" onClick={onClickApply}>{t('recruitment.apply')}</Button>
        <Button modifiers="outline" onClick={onClickShare}>{t('recruitment.news_share')}</Button>
      </div>
      <div className="m-infoContactRecruitment_info">
        {listInfo && listInfo.map((item, idx) => (
          <React.Fragment key={`info-${idx.toString()}`}>
            <div className="m-infoContactRecruitment_item">
              <div className="m-infoContactRecruitment_img">
                <Image ratio="1x1" src={item.imageSrc} />
              </div>
              <div className="m-infoContactRecruitment_content">
                <Text modifiers={['18x28', '600', 'jet']}>{item.title}</Text>
                <Text modifiers={['18x28', 'dimGray']}>{item.content}</Text>
              </div>
            </div>
            {(idx + 1) !== listInfo.length
            && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

InfoContactRecruitment.defaultProps = {
  listInfo: undefined,
  onClickApply: undefined,
  onClickShare: undefined,
};

export default InfoContactRecruitment;
