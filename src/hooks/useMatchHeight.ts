import { useEffect } from 'react';

const useMatchHeight = (
  className: string,
) => {
  useEffect(() => {
    const matchHeight = () => {
      const els = document.querySelectorAll(className);
      if (els.length < 1) return;

      const elsHeight = [];
      for (let i = 0; i < els.length; i += 1) {
        (els[i] as HTMLElement).style.height = 'auto';
        elsHeight.push(els[i].clientHeight);
      }
      for (let i = 0; i < els.length; i += 1) {
        (els[i] as HTMLElement).style.height = `${Math.max(...elsHeight)}px`;
      }
    };
    matchHeight();
    window.addEventListener('resize', matchHeight);
    return () => {
      window.removeEventListener('resize', matchHeight);
    };
  }, [className]);
};

export default useMatchHeight;
