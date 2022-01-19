import React from 'react';

const Home = React.lazy(() => import('pages/Home'));

export type TemplateCodeType = {
  code: string;
  component: React.FC<BasePageData<any>>;
};

export const TemplateCodes: TemplateCodeType[] = [
  {
    code: 'HOME',
    component: Home,
  },
];
