import { UsersTable } from './components/UsersTable/UsersTable';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Navbar } from './components/Navbar';
import { Footer } from './components/common/Footer';
import { useEffect } from 'react';

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div
      className={`${
        theme === 'dark' ? `dark` : ''
      } bg-bg-100 dark:bg-bg-dark-100 dark:text-text-dark-100 min-w-[300px] flex flex-col min-h-screen`}
    >
      <Navbar />
      <div className="flex-grow">
        <UsersTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
