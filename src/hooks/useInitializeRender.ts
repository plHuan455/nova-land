import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch } from 'store/hooks';
import { getMenusAction } from 'store/menus';

const useInitializeRender = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMenusAction());
  }, [dispatch]);

  useEffect(() => {
    document.body.classList.remove('overflow-body');
    document.documentElement.classList.remove('overflow-body');
    window.scrollTo(0, 0);
  }, [location.pathname]);
};

export default useInitializeRender;
