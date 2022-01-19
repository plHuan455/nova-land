import React, { FunctionComponent, useEffect } from 'react';

import { TemplateCodes } from 'navigations';
import { useAppDispatch } from 'store/hooks';
import { setPageTranslation } from 'store/system';

export type RenderPageProps = {
  pageData?: BasePageData<any>;
};

const RenderPage: React.FC<RenderPageProps> = ({ pageData }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (pageData) {
      let translation;
      if (pageData?.pageData.templateCode === 'HOME') {
        translation = pageData.pageData.translations.map((item) => ({
          ...item,
          slug: '/',
        }));
      } else {
        translation = pageData.pageData.translations;
      }
      dispatch(setPageTranslation(translation));
    }
  }, [pageData, dispatch]);

  if (!pageData) return null;

  const Component = TemplateCodes.find(
    (template) => template.code === pageData?.pageData.templateCode,
  )?.component;

  if (Component) {
    return React.createElement<BasePageData<any>>(Component as FunctionComponent, pageData);
  }

  return <></>;
};

export default RenderPage;
