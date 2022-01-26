import React from 'react';

import BannerRecruitmentDetail from '../BannerRecruitmentDetail';
import Section from '../Section';

import Divider from 'components/atoms/Divider';
import Text from 'components/atoms/Text';
import InfoContactRecruitment, { InfoContactTypes } from 'components/molecules/InfoContactRecruitment';
import RelatedRecruitment, { RelatedRecruitmentProps } from 'components/molecules/RelatedRecruitment';
import Container, { CustomCol, CustomRow } from 'components/organisms/Container';

interface RecruitmentDetailBannerTypes {
  location: string;
  plan: string;
  time: string;
  title: string;
}

interface RecruitmentDetailProps {
  dataBanner: RecruitmentDetailBannerTypes;
  listInfo: Array<InfoContactTypes>;
  listRelatedJob: Array<RelatedRecruitmentProps>;
  content?: string;
  onClickApply?: () => void;
  onClickShare?: () => void;
}

const RecruitmentDetail: React.FC<RecruitmentDetailProps> = ({
  dataBanner,
  content,
  listInfo,
  listRelatedJob,
  onClickApply,
  onClickShare,
}) => (
  <div className="t-recruitmentDetail">
    <BannerRecruitmentDetail
      location={dataBanner.location}
      plan={dataBanner.plan}
      time={dataBanner.time}
      title={dataBanner.title}
    />
    <Section>
      <Container>
        <div className="t-recruitmentDetail_wrapContent">
          <CustomRow>
            <CustomCol sm="12" md="12" lg="8">
              <div className="t-recruitmentDetail_content">
                <Text type="div" content={content} />
              </div>
            </CustomCol>
            <CustomCol sm="12" md="12" lg="4">
              <div className="t-recruitmentDetail_right">
                <InfoContactRecruitment
                  listInfo={listInfo}
                  onClickApply={onClickApply}
                  onClickShare={onClickShare}
                />
                <div className="t-recruitmentDetail_related">
                  <Text modifiers={['14x22', '700', 'jet']}>Các vị trí tương tự</Text>
                  {listRelatedJob.slice(0, 3).map((item, idx) => (
                    <React.Fragment key={`job-${idx.toString()}`}>
                      <RelatedRecruitment
                        imageSrc={item.imageSrc}
                        title={item.title}
                        plan={item.plan}
                        time={item.time}
                        href={item.href}
                      />
                      {(idx + 1) !== listRelatedJob.slice(0, 3).length && (
                        <Divider />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </CustomCol>
          </CustomRow>
        </div>
      </Container>
    </Section>
  </div>
);

RecruitmentDetail.defaultProps = {
  content: undefined,
  onClickApply: undefined,
  onClickShare: undefined,
};

export default RecruitmentDetail;
