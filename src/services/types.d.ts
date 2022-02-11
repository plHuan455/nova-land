type ErrorResponse = { code: number; message: string };

type ErrorCodeResponse = {
  code: string;
  title: string;
}

type SEOData = {
  title?: string;
  description?: string;
  keyword?: string;
}

type OGData = {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

type HeaderData = {
  email: string;
  phoneCskh: string;
  social : SocialData[];
}

type SocialData = {
  icon: string;
  link: SocialLinkData;
}

type SocialLinkData = {
  text: string;
  url: string;
  target: string;
}

type FooterData = {
  copyright: string;
  title: string;
  description: string;
  policy: PolicyTermsData;
  terms: PolicyTermsData;
  logoFooter: string;
}

type PolicyTermsData = {
  text: string;
  url: string;
  target: string;
}

type LinkData = {
  self: string;
  first: string;
  prev: string;
  next: string;
  last: string;
}

type Meta = {
  totalPages: number;
  limit: number;
  total: number;
  page: number;
};

type BreadcrumbsData = {
  type: string;
  text: string;
  slug: string;
}

type APIPaginationResponse<T> = {
  data: T;
  links: LinkData;
  meta: Meta;
  message: string;
}

type APIResponse<T> = {
  data: T;
  message: string;
};

type LocalesItem = {
  icon?: string;
  message?: string;
  active?: boolean;
}

type LocalesResponse = {
  vi: LocalesItem;
  en: LocalesItem;
}

type LanguageType = 'VN'|'EN'|'CN'|'JP'|'KR';

type Translation = {
  locale: string;
  title: string;
  slug: string;
  description: string;
}

type BlockComponents<T> = {
  code: string;
  active: boolean;
  blocks: T;
}

type BannerData = {
  imageDesktop: string;
  imageMobile: string;
  imageTablet: string;
  link: string;
  subTitle: string;
  title: string;
}

type BannersDataTypes = {
  data: BannerData;
  type: string;
}

type PageData = {
  id: number;
  templateCode: string;
  code: string;
  active: boolean;
  isHome: boolean;
  groupCode?: any;
  name: string;
  status: number;
  parentId?: any;
  bannerId: number;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
  title: string;
  slug: string;
  description?: any;
  translations: Translation[];
  image?: string;
}

type BasePageData<T> = {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersDataTypes[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsData[];
  openGraphData?: {
    ogTitle: string;
    ogType: string;
    ogDescription: string;
    ogImage: string;
  }
}

type SiteStaticPage = {
  templateCode: string;
  locales: {
    cn: SlugLocale;
    en: SlugLocale;
    jp: SlugLocale;
    kr: SlugLocale;
    vi: SlugLocale;
  };
};

type LanguageRouteMapping = {
  vi: string;
  en: string;
  kr: string;
  jp: string;
  cn: string;
}

type OpenGraphData = {
  ogTitle: string;
  ogImage?: any;
  ogDescription: string;
  ogType?: string;
}
