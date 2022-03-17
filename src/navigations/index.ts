import React from 'react';

const Home = React.lazy(() => import('pages/Home'));
const AboutUs = React.lazy(() => import('pages/AboutUs'));
const FieldOfActivity = React.lazy(() => import('pages/FieldOfActivity'));
const InvestmentRelations = React.lazy(() => import('pages/InvestmentRelations'));
const News = React.lazy(() => import('pages/News'));
const SearchResults = React.lazy(() => import('pages/SearchResults'));
const Contact = React.lazy(() => import('pages/Contact'));
const CorporateGovernance = React.lazy(() => import('pages/CorporateGovernance'));
const InvestmentRelationsOtherDocument = React.lazy(() => import('pages/InvestmentRelationsOtherDocument'));
const Event = React.lazy(() => import('pages/Event'));
const ReportList = React.lazy(() => import('pages/ReportList'));
const TermsPolicy = React.lazy(() => import('pages/TermsPolicy'));

export type TemplateCodeType = {
  code: string;
  component: React.FC<BasePageData<any>>;
};

export const TemplateCodes: TemplateCodeType[] = [
  {
    code: 'HOME',
    component: Home,
  },
  {
    code: 'ABOUT_US',
    component: AboutUs,
  },
  {
    code: 'FIELD_ACTIVITY',
    component: FieldOfActivity,
  },
  {
    code: 'INVESTMENT_RELATIONS',
    component: InvestmentRelations,
  },
  {
    code: 'NEWS',
    component: News,
  },
  {
    code: 'SEARCH',
    component: SearchResults,
  },
  {
    code: 'CONTACT',
    component: Contact,
  },
  {
    code: 'BUSINESS_MANAGEMENT',
    component: CorporateGovernance,
  },
  {
    code: 'OTHER_DOCUMENT',
    component: InvestmentRelationsOtherDocument,
  },
  {
    code: 'EVENT_CALENDAR',
    component: Event,
  },
  {
    code: 'ANNUAL_REPORT',
    component: ReportList,
  },
<<<<<<< Updated upstream
=======
  {
    code: 'RULES_PRIVACY',
    component: TermsPolicy,
  },

>>>>>>> Stashed changes
];
