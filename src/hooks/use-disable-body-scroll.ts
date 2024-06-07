import { useEffect } from 'react';

export const useDisableBodyScroll = (isScroll: boolean) => {
  useEffect(() => {
    if (isScroll) {
      document.body.style.overflowX = 'auto';
      document.body.style.height = 'auto';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.maxHeight = '100vh';
    }
  }, [isScroll]);
};
