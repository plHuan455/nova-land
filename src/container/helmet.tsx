import React from 'react';
import { Helmet } from 'react-helmet';

import { useAppSelector } from 'store/hooks';
import { BASE_URL } from 'utils/functions';

interface Props {
  seoData?: SEOData;
  ogData?: OGData;
}
const HelmetContainer: React.FC<Props> = ({ seoData, ogData }) => {
  const seoGeneral = useAppSelector((state) => state.system.dataSystem?.seo);
  const ogSystemData = useAppSelector((state) => state.system.dataSystem?.og);

  return (
    <Helmet>
      <title>{seoData?.title || seoGeneral?.title}</title>
      <meta name="description" content={seoData?.description || seoGeneral?.description} />
      <meta name="keyword" content={seoData?.keyword || seoGeneral?.keyword} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={ogData?.title || ogSystemData?.title} />
      <meta property="og:description" content={ogData?.description || ogSystemData?.description} />
      <meta property="og:image" content={`${BASE_URL}${ogData?.image || ogSystemData?.image}`} />
      <meta property="og:type" content={ogData?.type || ogSystemData?.type} />
      <meta name="twitter:title" content={seoData?.title || seoGeneral?.title} />
      <meta name="twitter:description" content={seoData?.description || seoGeneral?.description} />
      {/* <meta name="twitter:image" content={`${BASE_URL}${seoData?.imgSrc || seoGeneral.}`} /> */}
    </Helmet>
  );
};

HelmetContainer.defaultProps = {
  seoData: undefined,
  ogData: undefined,
};

export default HelmetContainer;
