import React from 'react';

import BannerRecruitment from '../BannerRecruitment';

import RecruitmentBanner from 'assets/images/recruitment-banner.png';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Container from 'components/organisms/Container';

interface BannerRecruitmentDetailProps {
  location: string;
  plan: string;
  time: string;
  title: string;
}

const BannerRecruitmentDetail: React.FC<BannerRecruitmentDetailProps> = ({
  location, plan, time, title,
}) => (
  <div className="t-bannerRecruitmentDetail">
    <BannerRecruitment imageSrc={RecruitmentBanner}>
      <Container>
        <div className="t-bannerRecruitmentDetail_wrapContent">
          <div className="t-bannerRecruitmentDetail_info">
            <div className="t-bannerRecruitmentDetail_location">
              <Icon iconName="locationWhite" size="20" />
              <Text modifiers={['12x17', 'white']}>{location}</Text>
            </div>
            <div className="t-bannerRecruitmentDetail_dot" />
            <Text modifiers={['12x17', 'white']}>{plan}</Text>
            <div className="t-bannerRecruitmentDetail_dot" />
            <Text modifiers={['12x17', 'white']}>{time}</Text>
          </div>
          <div className="t-bannerRecruitmentDetail_title">
            <Heading modifiers={['52x65', 'white', 'fontNoto', '400']}>{title}</Heading>
          </div>
        </div>
      </Container>
    </BannerRecruitment>
  </div>
);

BannerRecruitmentDetail.defaultProps = {
};

export default BannerRecruitmentDetail;
