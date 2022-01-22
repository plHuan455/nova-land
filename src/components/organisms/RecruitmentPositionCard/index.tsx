import React from 'react';

import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';

interface RecruitmentPositionCardProps {
  breadcrumbsRecruitment: string[];
  title: string;
  desc: string;
  expirationDate: string;
  href: string;
}

const RecruitmentPositionCard: React.FC<RecruitmentPositionCardProps> = ({
  breadcrumbsRecruitment,
  title,
  desc,
  expirationDate,
  href,
}) => (
  <div className="o-recruitmentPositionCard">
    <div className="o-recruitmentPositionCard_left">
      <ul className="o-recruitmentPositionCard_breadcrumbs">
        <li className="o-recruitmentPositionCard_breadcrumbs_location u-mr-4">
          <Icon iconName="location" size="20" />
        </li>
        {
          breadcrumbsRecruitment.map((item, index) => (
            <li className="o-recruitmentPositionCard_breadcrumbs_item">
              {index > 0 && (
                <div className="o-recruitmentPositionCard_breadcrumbs_item_circle" />
              )}
              <div className="o-recruitmentPositionCard_breadcrumbs_item_label">
                <Text modifiers={['12x17', '300', 'spanishGray']}>{item}</Text>
              </div>
            </li>
          ))
        }
      </ul>
      <div className="o-recruitmentPositionCard_content u-mt-lg-24 u-mt-16">
        <div className="o-recruitmentPositionCard_content_title">
          <Heading modifiers={['24x30', '600', 'jet', 'capitalize']}>{title}</Heading>
        </div>
        <div className="o-recruitmentPositionCard_content_desc u-mt-4">
          <Text modifiers={['18x28', '300', 'dimGray']}>{desc}</Text>
        </div>
        <Link href={href}>
          <div className="o-recruitmentPositionCard_content_btn u-mt-lg-24 u-mt-16">
            <Text modifiers={['14x20', '300', 'camel']}>
              Tìm hiểu thêm
            </Text>
            <div className="o-recruitmentPositionCard_content_btnIcon" />
          </div>
        </Link>
      </div>
    </div>
    <div className="o-recruitmentPositionCard_right">
      <Text modifiers={['12x17', '300', 'jet']}>
        Hạn chót nộp hồ sơ
      </Text>
      <div className="o-recruitmentPositionCard_expDate">
        <Heading
          modifiers={['24x30', 'jet', '300']}
          content={expirationDate}
        />
      </div>
    </div>
  </div>
);

export default RecruitmentPositionCard;
