import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { OptionType } from 'components/molecules/Pulldown';
import i18n from 'i18n';
import { LanguageKey } from 'services/system/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  setLanguage,
} from 'store/system';
import { getImageURL } from 'utils/functions';
import {
  checkActiveLang,
  getHomeLangURL,
  getLangURL,
  langLabel,
} from 'utils/language';

const useLanguage = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const dataSystem = useAppSelector((state) => state.system.dataSystem);
  const pageTranslation = useAppSelector(
    (state) => state.system.pageTranslation,
  );
  const language = useAppSelector((state) => state.system.language);

  //* List languages
  const languageData: OptionType[] = useMemo(() => {
    if (dataSystem?.locales) {
      return (Object.keys(dataSystem.locales) as Array<LanguageKey>).map(
        (ele, index) => {
          const icon = dataSystem.locales ? dataSystem.locales[ele].icon : '';
          return {
            id: `${ele}-${index}`,
            icon: getImageURL(icon),
            value: ele,
            label: langLabel(ele),
          };
        },
      );
    }
    return [];
  }, [dataSystem]);

  //* Functions
  const handleChangeLang = (item: OptionType) => {
    const languageKey = item.value as LanguageKey;
    if (checkActiveLang(languageKey, dataSystem?.locales)) {
      i18n.changeLanguage(languageKey, () => {
        dispatch(setLanguage(languageKey));
        handleLogicChangeLang(languageKey);
      });
    }
  };

  const checkPageTranslation = (
    langParam: LanguageKey,
    transDataParam?: Translation,
  ) => {
    if (transDataParam?.slug) {
      navigate(
        `${getLangURL(transDataParam?.locale)}${
          transDataParam?.slug !== '/' ? `${transDataParam?.slug || ''}` : ''
        }`,
      );
    } else navigate(`${getHomeLangURL(langParam)}`);
  };

  const handleLogicChangeLang = async (
    langParam: LanguageKey,
  ) => {
    if (pageTranslation) {
      const transData = pageTranslation.find((ele) => ele.locale === langParam);
      checkPageTranslation(langParam, transData);
    } else {
      console.log('navigate', langParam);
      navigate(`${getHomeLangURL(langParam)}`);
    }
  };

  //* Memos
  const lang = useMemo(
    () => languageData.find((item) => item.value === language) || languageData[0],
    [languageData, language],
  );

  return {
    lang,
    languageData,
    handleChangeLang,
  };
};

export default useLanguage;
