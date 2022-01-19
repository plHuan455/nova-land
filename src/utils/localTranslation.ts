import en from 'translations/en.json';
import vi from 'translations/vi.json';

const bundledResources: { [key: string]: { [key: string]: string } } = {
  en: {
    error_500: 'Internal Server Error',
  },
  vi: {
    error_500: 'Lỗi server',
  },
};

export type KeyBundled = {
  [key: string]: string
}

export type ComplexKeyBundled = {
  [key: string]: { [key: string]: string }
}

export type StaticBundled = {
  [x: string]: ComplexKeyBundled | KeyBundled | string,
}

export const staticBundledResources: {
  [key: string]: StaticBundled;
} = {
  en: {
    ...en,
  },
  vi: {
    ...vi,
  },
};

export default bundledResources;
