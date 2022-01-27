import React from 'react';

const Home = React.lazy(() => import('pages/Home'));
const AboutUs = React.lazy(() => import('pages/AboutUs'));
const FieldOfActivity = React.lazy(() => import('pages/FieldOfActivity'));

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
];
