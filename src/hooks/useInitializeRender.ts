import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { useLocation } from 'react-router-dom';

import useLanguage from './useLanguage';

import i18n, { changeStoreLanguage, detectLanguage } from 'i18n';
import { LanguageKey } from 'services/system/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMenusAction, getStaticPageAsync, getMenusAction } from 'store/menus';
import {
  getSystemAsync, setLanguage,
  getSystemAsync,
  setLanguage,
} from 'store/system';
import { checkActiveLang } from 'utils/language';

const useInitializeRender = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const system = useAppSelector((state) => state.system.dataSystem);
  const isChangeLanguage = useAppSelector((state) => state.system.isChangeLanguage);
  const [initializedGA, setInitializedGA] = useState(false);

  useEffect(() => {
    dispatch(getSystemAsync());
    dispatch(getMenusAction());
    dispatch(getStaticPageAsync());
  }, [dispatch]);

  useEffect(() => {
    if (isChangeLanguage) {
      dispatch(getSystemAsync());
    }
  }, [dispatch, isChangeLanguage]);
  const { handleShowModal } = useLanguage();

  useEffect(() => {
    document.body.classList.remove('overflow-body');
    document.documentElement.classList.remove('overflow-body');
    window.scrollTo(0, 0);
    const checkLanguage = changeStoreLanguage(location.pathname);
    if (checkLanguage.change) {
      i18n.changeLanguage(checkLanguage.language);
      dispatch(setLanguage(checkLanguage.language));
    }
  }, [location.pathname, dispatch]);

  useEffect(() => {
    dispatch(getSystemAsync()).unwrap().then((res) => {
      const languageKey = detectLanguage() as LanguageKey;
      if (checkActiveLang(languageKey, res.locales)) {
        dispatch(getMenusAction());
      } else {
        const message = res?.locales
          ? res.locales[languageKey].message
          : '';
        handleShowModal(languageKey, message);
      }
    });
  }, [dispatch, handleShowModal]);

  useEffect(() => {
    if (isChangeLanguage) {
      dispatch(getSystemAsync());
      dispatch(getMenusAction());
    }
  }, [dispatch, isChangeLanguage]);

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
};

export default useInitializeRender;
