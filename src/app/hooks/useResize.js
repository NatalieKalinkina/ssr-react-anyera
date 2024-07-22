import { useState, useEffect } from 'react';

const useDeviceSize = () => {
  const [width, setWidth] = useState(1440);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return width;
};

export default useDeviceSize;
