import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import useLanguage from './useLanguage';

import { detectLanguage } from 'i18n';
import { LanguageKey } from 'services/system/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMenusAction, getStaticPageAsync } from 'store/menus';
import { getSystemAsync, setLanguage } from 'store/system';
import { LOCAL_STORAGE } from 'utils/constants';
import { checkActiveLang } from 'utils/language';

const useInitializeRender = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const system = useAppSelector((state) => state.system.dataSystem);
  const [initializedGA, setInitializedGA] = useState(false);
  const { i18n } = useTranslation();

  const { handleShowModal } = useLanguage();

  useEffect(() => {
    if (i18n.language) {
      dispatch(getSystemAsync()).unwrap().then((res) => {
        const languageKey = detectLanguage() as LanguageKey;
        if (checkActiveLang(languageKey, res.locales)) {
          dispatch(getMenusAction());
          dispatch(getStaticPageAsync());
        } else {
          const message = res?.locales
            ? res.locales[languageKey].message
            : '';
          handleShowModal(languageKey, message);
        }
      });
    }
  }, [dispatch, handleShowModal, i18n.language]);

  /**
   * GTM-GA
   */
  useEffect(() => {
    if (system?.gaId) {
      ReactGA.initialize(system.gaId);
      setInitializedGA(true);
    }
    if (system?.gtmId) {
      TagManager.initialize({
        gtmId: system.gtmId,
      });
    }
  }, [system]);

  useEffect(() => {
    if (initializedGA && location) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initializedGA, location]);
  /**
   * END GTM-GA
   */

  useEffect(() => {
    document.body.classList.remove('overflow-body');
    document.documentElement.classList.remove('overflow-body');
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (i18n) {
      window.localStorage.setItem(LOCAL_STORAGE.LANGUAGE, i18n.language);
      i18n.changeLanguage(i18n.language);
      dispatch(setLanguage(i18n.language));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, i18n.language]);
};

export default useInitializeRender;
