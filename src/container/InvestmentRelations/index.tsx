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
import getDocumentsService, {
  getOtherDocumentsService,
  getAnnualDocumentsService,
} from 'services/documents';
import { DEFAULT_QUERY_OPTION } from 'utils/constants';
import {
  getBlockData,
  getImageURL,
  formatDateDDMMYYYY,
  getHourFromPastToCurrent,
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
  banners,
}) => {
  const novalandSharesBlock = useMemo(() => getBlockData('novaland_shares', blocks) as NovalandShares, [blocks]);
  const corporateGovernanceAnnualReportBlock = useMemo(() => getBlockData('corporate_governance_annual_report', blocks) as CorporateGovernanceAnnualReport,
    [blocks]);
  const eventCalendarBlock = useMemo(() => getBlockData('event_calendar', blocks) as EventCalendar, [blocks]);
  const otherDocumentBlock = useMemo(() => getBlockData('other_document', blocks) as OtherDocument, [blocks]);

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

  const { data: otherDocumentHighlightData } = useQuery(
    'getOtherDocuments', () => getOtherDocumentsService({
      is_highlight: true,
      limit: 4,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const documentList = useMemo(() => {
    if (otherDocumentHighlightData && otherDocumentHighlightData?.data.length > 0) {
      return otherDocumentHighlightData.data.map((item) => ({
        pdfImg: imgPdf,
        fileName: item.name,
        href: getImageURL(item.file),
      }));
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otherDocumentHighlightData?.data]);

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
  }, [calendarDataList]);

  const { data: documentsHighlightData } = useQuery(
    'getDocuments', () => getDocumentsService({
      is_highlight: true,
      limit: 1,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const { data: documentsAnnualHighlightData } = useQuery(
    'getAnnualDocuments', () => getAnnualDocumentsService({
      is_highlight: true,
      limit: 1,
    }),
    {
      ...DEFAULT_QUERY_OPTION,
    },
  );

  const dataLatestNews = useMemo(() => [
    {
      imgSrc: getImageURL(corporateGovernanceAnnualReportBlock.corporateGovernance.image),
      ratio: '567x246' as Ratio,
      heading: corporateGovernanceAnnualReportBlock.corporateGovernance.title || '',
      alt: documentsHighlightData?.data[0].name || '',
      title: documentsHighlightData?.data[0].name || '',
      time: new Date(documentsHighlightData?.data[0].publishedAt || '') === new Date()
        ? `${getHourFromPastToCurrent(documentsHighlightData?.data[0].publishedAt)} giờ trước`
        : formatDateDDMMYYYY(documentsHighlightData?.data[0].publishedAt),
      href: '/',
      btnText: corporateGovernanceAnnualReportBlock.corporateGovernance.button.text,
      fileName: documentsHighlightData?.data[0].name || '',
      pdfImg: imgPdf,
      hrefLink: getImageURL(documentsHighlightData?.data[0].file),
    },
    {
      imgSrc: getImageURL(corporateGovernanceAnnualReportBlock.annualReport.image),
      ratio: '567x246' as Ratio,
      heading: corporateGovernanceAnnualReportBlock.annualReport.title || '',
      alt: documentsAnnualHighlightData?.data[0].name || '',
      title: documentsAnnualHighlightData?.data[0].name || '',
      time: new Date(documentsAnnualHighlightData?.data[0].publishedAt || '') === new Date()
        ? `${getHourFromPastToCurrent(documentsAnnualHighlightData?.data[0].publishedAt)} giờ trước`
        : formatDateDDMMYYYY(documentsAnnualHighlightData?.data[0].publishedAt),
      href: '/',
      btnText: corporateGovernanceAnnualReportBlock.annualReport.button.text,
      fileName: documentsAnnualHighlightData?.data[0].name || '',
      pdfImg: imgPdf,
      hrefLink: getImageURL(documentsAnnualHighlightData?.data[0].file),
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [documentsHighlightData, documentsAnnualHighlightData]);

  return (
    <div className="p-investmentRelations">
      <BannerContainer
        src={getImageURL(banners[0].data.imageDesktop)}
        srcMobile={getImageURL(banners[0].data.imageMobile)}
        srcTablet={getImageURL(banners[0].data.imageTablet)}
      />
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
          dataLatestNews={dataLatestNews || []}
        />
      </Section>
      <Section modifiers="noPb">
        <ScheduleContainer
          subTitle={eventCalendarBlock.description}
          heading={eventCalendarBlock.title}
          dataCard={calendarList}
          modifiers="fourItem"
          btnText={eventCalendarBlock.button.text}
          btnHref={eventCalendarBlock.button.url}
          target={eventCalendarBlock.button.target}
        />
      </Section>
      <Section modifiers="noPb">
        <OtherDocumentContainer
          heading={otherDocumentBlock.title}
          data={documentList}
          btnText={otherDocumentBlock.button.text}
          btnHref={otherDocumentBlock.button.url}
          target={otherDocumentBlock.button.target}
        />
      </Section>
    </div>
  );
};

export default InvestmentRelationsContainer;
