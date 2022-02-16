import { getStaticSlug } from './language';

import { BreadcrumbPropsTypes } from 'components/molecules/Breadcrumb';

function detectType(type: string, lang: string) {
  if (type === 'news_categories') {
    return `/${getStaticSlug('NEWS_CATEGORY', lang)}`;
  }
  return '';
}

export const getBreadcrumbs = (
  param: {
    breadcrumbs: Array<BreadcrumbsData>;
    title: string; language: string,
  },
): BreadcrumbPropsTypes[] => {
  const breadcrumbsData = param.breadcrumbs;
  let breadcrumbsCustom: BreadcrumbPropsTypes[] = [];

  const mapBreadcrumbs = breadcrumbsData.map(
    (breadcrumb) => ({
      title: breadcrumb.text,
      pathName: param.language === 'vi' ? `${detectType(breadcrumb.type, param.language)}/${breadcrumb.slug}`
        : `/${param.language}${detectType(breadcrumb.type, param.language)}/${breadcrumb.slug}`,
    } as BreadcrumbPropsTypes),
  );

  breadcrumbsCustom = [...breadcrumbsCustom, ...mapBreadcrumbs];

  breadcrumbsCustom.unshift({
    title: param.language === 'vi'
      ? 'Trang chủ' : 'Home',
    pathName: param.language === 'vi'
      ? '/' : `/${param.language}`,
  });
  breadcrumbsCustom.push({ title: param.title });

  return breadcrumbsCustom;
};

export const Placeholder = '';
