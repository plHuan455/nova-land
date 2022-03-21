import React from 'react';

import Heading from 'components/atoms/Heading';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';

interface CompanyProfileProps {
  title: string;
  description?: string;
  imgSrc: string;
  iconSrc: string;
  subDescription?: string;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({
  title,
  description,
  imgSrc,
  subDescription,
  iconSrc,
}) => (
  <div className="t-companyProfile">
    <div className="t-companyProfile_title">
      <Heading modifiers={['700', '30x42', 'center', 'jet', 'fontCalibri', 'uppercase']}>{title}</Heading>
    </div>
    <div className="t-companyProfile_desc">
      <Text modifiers={['400', '16x24', 'center', 'dimGray']} type="div" content={description} />
    </div>
    <div className="t-companyProfile_image">
      <Image src={imgSrc} alt={title} ratio="990x463" />
    </div>
    <div className="t-companyProfile_subDesc">
      <div className="t-companyProfile_subDesc-icon">
        <Image src={iconSrc} alt={subDescription} ratio="1x1" />
      </div>
      <div className="t-companyProfile_subDesc-desc">
        <Text modifiers={['400', 'jet', 'fontCalibri', '14x20']} content={subDescription} />
      </div>
    </div>
  </div>
);

CompanyProfile.defaultProps = {
  description: '',
  subDescription: '',
};

export default CompanyProfile;
