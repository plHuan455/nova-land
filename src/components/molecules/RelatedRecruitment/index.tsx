import React from 'react';

import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

export interface RelatedRecruitmentProps {
  imageSrc: string;
  title: string;
  href: string;
  plan: string;
  time: string;
}

const RelatedRecruitment: React.FC<RelatedRecruitmentProps> = ({
  imageSrc, title, href, plan, time,
}) => (
  <Link href={href}>
    <div className="m-relatedRecruitment">
      <div className="m-relatedRecruitment_image">
        <Image ratio="1x1" src={imageSrc} alt="" />
      </div>
      <div className="m-relatedRecruitment_content">
        <Text modifiers={['12x17', '400', 'jet']}>
          {title}
        </Text>
        <div className="m-relatedRecruitment_detail">
          <Text modifiers={['12x17', '400', 'spanishGray']}>{plan}</Text>
          <div className="m-relatedRecruitment_dot" />
          <Text modifiers={['12x17', '400', 'spanishGray']}>{time}</Text>
        </div>
      </div>
    </div>
  </Link>
);

RelatedRecruitment.defaultProps = {
};

export default RelatedRecruitment;
