import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const useBodyClass = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
};

export default useBodyClass;
