import { StaticSlug } from 'services/navigations/types';

export const BASE_URL = process.env.REACT_APP_BASE_URL;
function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export default mapModifiers;

/*!
 * Scroll down to next block element
 */
export function scrollDownNextSection(ref: React.RefObject<HTMLDivElement>) {
  if (ref && ref.current) {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 68 }); // Minus header height
  }
}

/*!
 * getMousePosition(event) - cross browser normalizing of:
 * clientX, clientY, screenX, screenY, offsetX, offsetY, pageX, pageY
 * HTMLElement
 */
export function getMousePosition(
  evt:
    | React.MouseEvent<SVGPathElement, MouseEvent>
    | React.MouseEvent<SVGRectElement, MouseEvent>,
  item: HTMLDivElement,
) {
  let { pageX } = evt;
  let { pageY } = evt;
  if (pageX === undefined) {
    pageX = evt.clientX
      + document.body.scrollLeft
      + document.documentElement.scrollLeft;
    pageY = evt.clientY
      + document.body.scrollTop
      + document.documentElement.scrollTop;
  }

  const rect = item.getBoundingClientRect();
  const offsetX = evt.clientX - rect.left;
  const offsetY = evt.clientY - rect.top;

  return {
    client: { x: evt.clientX, y: evt.clientY }, // relative to the viewport
    screen: { x: evt.screenX, y: evt.screenY }, // relative to the physical screen
    offset: { x: offsetX, y: offsetY }, // relative to the event target
    page: { x: pageX, y: pageY }, // relative to the html document
  };
}

export function getDimensions(ele: HTMLDivElement) {
  const { height } = ele.getBoundingClientRect();
  const { offsetTop } = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
}

export function scrollStop(callback: (value: any) => void, time = 2000) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling: any;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    () => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, time);
    },
    false,
  );
}

export const handleScrollCenter = (ref: React.RefObject<HTMLDivElement | null>,
  classNameEleActive: string) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);
  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position sroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive - xEleScroll
    + widthEleActive / 2 + positionScroll - widthEleScroll / 2;
  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};

export function getBlockData<T>(
  _code: string,
  listBlock: BlockComponents<T>[],
): T | undefined {
  const findIndex = listBlock.findIndex((item) => item.code === _code);
  if (findIndex < 0) {
    return undefined;
  }
  return listBlock[findIndex].blocks;
}

export function getBannerData(
  _code: string,
  listBlock: BannersDataTypes[],
): BannerData | undefined {
  if (!listBlock) return undefined;
  const findIndex = listBlock.findIndex((item) => item.type === _code);
  if (findIndex < 0) {
    return undefined;
  }
  return listBlock[findIndex].data;
}

export function getImageURL(imgUrl?: string) {
  if (!BASE_URL || !imgUrl) return '';
  return BASE_URL + imgUrl;
}

export const checkExternalUrl = (str?: string) => {
  if (!str) return false;
  const tareaRegex = /^(http|https|tel)/;
  return tareaRegex.test(String(str).toLowerCase());
};

export const formatDateDDMMYYYY = (date?: string, unitDot?: boolean) => {
  if (!date) return '';
  const dateFormat = new Date(date);
  let day: string | number = dateFormat.getDate();
  let month: string | number = dateFormat.getMonth() + 1;
  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  if (unitDot) return `${day}.${month}.${dateFormat.getFullYear()}`;
  return `${day}/${month}/${dateFormat.getFullYear()}`;
};

export const getTime = (date?: string) => {
  if (!date) return '';
  const dateFormat = new Date(date);
  let hours: string | number = dateFormat.getHours();
  let mins: string | number = dateFormat.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  return `${hours}:${mins}`;
};

export const getHourFromPastToCurrent = (date?: string) => {
  if (!date) return '';
  const dateFormat = new Date(date);
  const toDay = new Date();
  const hour = toDay.getTime() - dateFormat.getTime();
  return new Date(hour).getHours();
};

export function openInNewTab(href?: string) {
  if (!href) return;
  const link = document.createElement('a');
  link.href = href;
  link.setAttribute('target', '_blank');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export const convertBanner = (banners: BannersDataTypes[]) => {
  if (banners.length > 0) {
    return banners.map((item) => ({
      src: getImageURL(item.data.imageDesktop),
      srcTablet: getImageURL(item.data.imageMobile),
      srcMobile: getImageURL(item.data.imageTablet),
    }));
  }
  return [];
};

export const getSlugByTemplateCode = (
  templateCode: string,
  staticSlug?: StaticSlug[],
): string => {
  if (staticSlug) {
    const res = staticSlug.find((ele) => ele.templateCode === templateCode);
    if (res) return res.slug;
    return '';
  }
  return '';
};

export const downloadPdf = (url: string): void => {
  const a = document.createElement('a');
  a.href = getImageURL(url);
  a.target = '_blank';
  a.click();
  a.remove();
};
