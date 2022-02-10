import React, { useLayoutEffect, useState } from 'react';

const useScrollAnimate = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
  const [isShow, setIsShow] = useState(false);

  useLayoutEffect(() => {
    const topPos = (element: T | null) => (element ? element.getBoundingClientRect().top : 0);
    const ele = topPos(ref.current);

    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (ele - (window.innerHeight / 1.4) < scrollPos) {
        setIsShow(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
  return isShow;
};

export default useScrollAnimate;

export const useScrollAnimateCarousel = <T extends HTMLElement>(
  ref: React.RefObject<T>,
): boolean => {
  const [isShow, setIsShow] = useState(false);

  useLayoutEffect(() => {
    const topPos = (element: T | null) => (element ? element.getBoundingClientRect().top : 0);
    const ele = topPos(ref.current);

    const onScroll = () => {
      const scrollPos = window.scrollY;
      if (window.innerWidth > window.innerHeight) {
        if (ele - window.innerHeight - 150 < scrollPos) {
          setIsShow(true);
        }
      } else if (ele - window.innerHeight / 1.25 < scrollPos) {
        setIsShow(true);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref]);
  return isShow;
};
