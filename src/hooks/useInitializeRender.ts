import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMenusAction, getStaticPageAsync } from 'store/menus';
import { getSystemAsync } from 'store/system';

const useInitializeRender = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const system = useAppSelector((state) => state.system.dataSystem);
  const [initializedGA, setInitializedGA] = useState(false);

  useEffect(() => {
    dispatch(getSystemAsync());
    dispatch(getMenusAction());
    dispatch(getStaticPageAsync());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.remove('overflow-body');
    document.documentElement.classList.remove('overflow-body');
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
