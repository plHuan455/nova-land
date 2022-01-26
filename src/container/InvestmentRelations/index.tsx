import React, { useMemo } from 'react';

import StockInformationContainer from './StockInformation';
import BannerContainer from './banner';
import LatestNewsContainer from './latestNews';
import OtherDocumentContainer from './otherDocument';
import ScheduleContainer from './schedule';

import ScheduleList from 'assets/dataDummy/Schedule';
import imgPdf from 'assets/images/pdf.png';
import { dataType } from 'components/templates/OtherDocuments';
import Section from 'components/templates/Section';
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
        >
          <iframe title={novalandSharesBlock.title} width="100%" height="100%" frameBorder="0" src="https://ironline.vietstock.vn/vi/NVL" />
          {/* // implement when language function setup */}
          {/* <iframe title={novalandSharesBlock.title} width="100%" height="100%" frameBorder="0" src="https://ironline.vietstock.vn/en/NVL" /> */}
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
