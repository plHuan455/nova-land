export type SystemData = {
  seo: SEOData;
  footScripts: string;
  gaId: string;
  gtmId: string;
  og: OGData;
  gmapId: string;
  footImage: string;
  receiverContact: string[];
  googleRecaptchaSiteKey: string;
};

export type ParamsType = {
  limit?: number;
  keyword?: string;
  page?: number;
  locale?: string;
};
