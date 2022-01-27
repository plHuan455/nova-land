import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import StockInformationContainer from './StockInformation';
import BannerContainer from './banner';
import LatestNewsContainer from './latestNews';
import OtherDocumentContainer from './otherDocument';
import ScheduleContainer from './schedule';

import imgPdf from 'assets/images/pdf.png';
import Section from 'components/templates/Section';
import getCalendarListService from 'services/calendar';
import getDocumentsService from 'services/documents';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import {
  getBlockData,
  getImageURL,
  formatDateDDMMYYYY,
} from 'utils/functions';

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

const InvestmentRelationsContainer: React.FC<BasePageData<InvestmentRelationsBlocks>> = ({
  blocks,
}) => {
  const novalandSharesBlock = useMemo(() => getBlockData('novaland_shares', blocks) as NovalandShares, [blocks]);
  const corporateGovernanceAnnualReportBlock = useMemo(() => getBlockData('corporate_governance_annual_report', blocks) as CorporateGovernanceAnnualReport,
    [blocks]);
  const eventCalendarBlock = useMemo(() => getBlockData('event_calendar', blocks) as EventCalendar, [blocks]);
  const otherDocumentBlock = useMemo(() => getBlockData('other_document', blocks) as OtherDocument, [blocks]);

  const { data: documentDataList } = useQuery(
    ['getDocumentList'],
    () => getDocumentsService({
      limit: 4,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );
  const { data: calendarDataList } = useQuery(
    ['getCalendarList'],
    () => getCalendarListService({
      limit: 4,
      is_popular: true,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const documentList = useMemo(() => {
    if (documentDataList && documentDataList?.data.length > 0) {
      return documentDataList.data.map((item) => ({
        pdfImg: imgPdf,
        fileName: item.name,
        href: getImageURL(item.file),
      }));
    }
    return [];
  }, [documentDataList?.data]);

  const calendarList = useMemo(() => {
    if (calendarDataList && calendarDataList?.data.length > 0) {
      return calendarDataList.data.map((item) => ({
        imgSrc: getImageURL(item.thumbnail),
        alt: item.title,
        title: item.title,
        time: formatDateDDMMYYYY(item.eventFrom),
        href: `/su-kien-chi-tiet/${item.slug}`,
      }));
    }
    return [];
  }, [calendarDataList?.data]);

  const dataLatestNews = useMemo(() => [
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
  ], [corporateGovernanceAnnualReportBlock]);

  return (
    <div className="p-investmentRelations">
      <BannerContainer />
      <Section modifiers="noPb">
        <StockInformationContainer
          title={novalandSharesBlock.title}
        >
          <iframe title={novalandSharesBlock.title} width="100%" height="100%" frameBorder="0" src="https://ironline.vietstock.vn/vi/NVL" />
          {/* // implement when language function setup */}
          {/* <iframe title={novalandSharesBlock.title} width="100%" height="100%" frameBorder="0" src="https://ironline.vietstock.vn/en/NVL" /> */}
        </StockInformationContainer>
      </Section>
      <Section modifiers="noPb">
        <LatestNewsContainer
          hasLine
          dataLatestNews={dataLatestNews}
        />
      </Section>
      <Section modifiers="noPb">
        <ScheduleContainer
          subTitle={eventCalendarBlock.description}
          heading={eventCalendarBlock.title}
          dataCard={calendarList}
          modifiers="fourItem"
          btnText={eventCalendarBlock.button.text}
        />
      </Section>
      <Section modifiers="noPb">
        <OtherDocumentContainer
          heading={otherDocumentBlock.title}
          data={documentList}
          btnText={otherDocumentBlock.button.text}
        />
      </Section>
    </div>
  );
};

export default InvestmentRelationsContainer;
