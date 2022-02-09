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
  gmapId: string;
  logoFooter: string;
};

export type ParamsType = {
  limit?: number;
  keyword?: string;
  page?: number;
  locale?: string;
};


export type LanguageKey = keyof LocalesType;

export type LocalesType = {
  vi: LocalesItem,
  en: LocalesItem,
}