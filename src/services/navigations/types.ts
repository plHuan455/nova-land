export interface BasePageData<T> {
  pageData: PageData;
  blocks: BlockComponents<T>[];
  banners: BannersDataTypes[];
  seoData: SEOData;
  breadcrumbs: BreadcrumbsData[];
}

export interface PreviewData {
  slug: string;
  pageData: {
    site: string;
    image?: string; // ? assume
    status: string;
    moduleCode?: string; // ? assume
    templateCode: string;
    previewLocale: string;
  };
}

export interface StaticSlug {
  templateCode: string;
  slug: string;
  title: string;
}

export type PagePreviewData<T> = BasePageData<T> & PreviewData;
