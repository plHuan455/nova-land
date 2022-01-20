export type SystemData = {
  seo: SEOData;
  footScripts: string;
  gaId: string;
  gtmId: string;
  locales: LocalesResponse;
  og: OGData;
  chatScripts: string
  receiverContact: string[];
  logo: string;
  favicon: string;
  header: HeaderData;
  footer: FooterData;
  googleRecaptchaSiteKey: string;
};

export type ParamsType = {
  limit?: number;
  keyword?: string;
  page?: number;
  locale?: string;
};
