import React, { useMemo } from 'react';

import StockInformationContainer from './StockInformation';
import BannerContainer from './banner';
import LatestNewsContainer from './latestNews';
import OtherDocumentContainer from './otherDocument';
import ScheduleContainer from './schedule';

import ScheduleList from 'assets/dataDummy/Schedule';
import imgStock from 'assets/images/imgStock.png';
import imgPdf from 'assets/images/pdf.png';
import Image from 'components/atoms/Image';
import { dataType } from 'components/templates/OtherDocuments';
import Section from 'components/templates/Section';
import { StockInformationType } from 'components/templates/StockInformation';
import { getBlockData, getImageURL } from 'utils/functions';

type NovalandShares = {
  title: string;
}

type Button = {
  url: string,
  text: string,
  target: string
}

type CorporateGovernanceAnnualReport = {
  annualReport: {
    image: string,
    title: string,
    button: Button
  },
  corporateGovernance: {
    image: string,
    title: string,
    button: Button
  }
};

type EventCalendar = {
  title: string,
  button: Button,
  description: string
}

type OtherDocument = {
  title: string,
  button: Button
  description: string
}

export type InvestmentRelationsBlocks = NovalandShares
  | CorporateGovernanceAnnualReport
  | EventCalendar
  | OtherDocument;

const StockInformationData: StockInformationType[] = [
  {
    desc: 'Thay đổi',
    movementNumber: -1.800,
    movementPercent: -2.04,
  },
  {
    desc: 'Khối lượng giao dịch',
    movementNumber: 3022.700,
    movementPercent: 0,
  },
  {
    desc: 'Vốn hóa',
    movementNumber: 166.788,
    movementPercent: 0,
  },
  {
    desc: 'Khối lượng giao dịch trung bình 10 phiên',
    movementNumber: 2883.448,
    movementPercent: 0,
  },
];

const dataList: dataType[] = [
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị thông qua việc chuyển đổi và tỷ lệ chuyển đổi trái phiếu chuyển đổi quốc tế',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Nghị quyết Hội đồng quản trị số 01/2022-NQ.HĐQT-NVLG thông qua việc góp thêm vốn vào Công ty TNHH Đầu tư Phát triển nhà ở và Hạ tầng sài gòn',
  },
  {
    pdfImg: imgPdf,
    fileName: 'CBTT thay đổi số lượng cổ phiếu có quyền biểu quyết đang lưu hành',
  },
  {
    pdfImg: imgPdf,
    fileName: 'Báo cáo kết quả phát hành cổ phiếu để trả cổ tức',
  },
];

const InvestmentRelationsContainer: React.FC<BasePageData<InvestmentRelationsBlocks>> = ({
  blocks,
}) => {
  const novalandSharesBlock = useMemo(() => getBlockData('novaland_shares', blocks) as NovalandShares, [blocks]);
  const corporateGovernanceAnnualReportBlock = useMemo(() => getBlockData('corporate_governance_annual_report', blocks) as CorporateGovernanceAnnualReport,
    [blocks]);
  const eventCalendarBlock = useMemo(() => getBlockData('event_calendar', blocks) as EventCalendar, [blocks]);
  const otherDocumentBlock = useMemo(() => getBlockData('other_document', blocks) as OtherDocument, [blocks]);

  const dataLatestNews = useMemo(() => [
    {
      imgSrc: getImageURL(corporateGovernanceAnnualReportBlock.annualReport.image),
      ratio: '567x246' as Ratio,
      heading: corporateGovernanceAnnualReportBlock.annualReport.title,
      alt: corporateGovernanceAnnualReportBlock.annualReport.title,
      title: corporateGovernanceAnnualReportBlock.annualReport.title,
      time: '2 giờ trước',
      href: '/',
      btnText: corporateGovernanceAnnualReportBlock.annualReport.button.text,
      fileName: corporateGovernanceAnnualReportBlock.annualReport.title,
      pdfImg: imgPdf,
      hrefLink: corporateGovernanceAnnualReportBlock.annualReport.button.url,
    },
    {
      imgSrc: getImageURL(corporateGovernanceAnnualReportBlock.corporateGovernance.image),
      ratio: '567x246' as Ratio,
      heading: corporateGovernanceAnnualReportBlock.corporateGovernance.title,
      alt: corporateGovernanceAnnualReportBlock.corporateGovernance.title,
      title: corporateGovernanceAnnualReportBlock.corporateGovernance.title,
      time: '2 giờ trước',
      href: '/',
      btnText: corporateGovernanceAnnualReportBlock.corporateGovernance.button.text,
      fileName: corporateGovernanceAnnualReportBlock.corporateGovernance.title,
      pdfImg: imgPdf,
      hrefLink: corporateGovernanceAnnualReportBlock.corporateGovernance.button.url,
    },
  ], [corporateGovernanceAnnualReportBlock]);
  return (
    <div className="p-investmentRelations">
      <BannerContainer />
      <Section>
        <StockInformationContainer
          title={novalandSharesBlock.title}
          data={StockInformationData}
          note="Thông tin được trích dẫn từ nguồn Vietstock (http://vietstock.vn). Tập đoàn Novaland sẽ không chịu bất kỳ trách nhiệm nào về tính chính xác, đầy đủ hoặc bất kỳ khía cạnh nào khác đối với thông tin hiển thị trên đây được đăng tải/trích dẫn/tích hợp từ nguồn này."
        >
          <Image ratio="546x308" alt="img" src={imgStock} />
        </StockInformationContainer>
      </Section>
      <Section>
        <LatestNewsContainer
          hasLine
          dataLatestNews={dataLatestNews}
        />
      </Section>
      <Section>
        <ScheduleContainer
          subTitle={eventCalendarBlock.description}
          heading={eventCalendarBlock.title}
          dataCard={ScheduleList}
          modifiers="fourItem"
          btnText={eventCalendarBlock.button.text}
        />
      </Section>
      <Section>
        <OtherDocumentContainer
          heading={otherDocumentBlock.title}
          data={dataList}
          btnText={otherDocumentBlock.button.text}
        />
      </Section>
    </div>
  );
};

export default InvestmentRelationsContainer;
