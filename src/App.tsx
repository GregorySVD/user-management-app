import { UsersTable } from './components/UsersTable/UsersTable';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { CookieConsent } from './components/CookieConsent';
import { AboutSection } from './components/AboutSection';
import { SearchSection } from './components/SearchSection';
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from './features/filter/filterSlice';

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();
  const { name, username, email, phone } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        dispatch(setNameFilter(value));
        break;
      case 'username':
        dispatch(setUsernameFilter(value));
        break;
      case 'email':
        dispatch(setEmailFilter(value));
        break;
      case 'phone':
        dispatch(setPhoneFilter(value));
        break;
      default:
        break;
    }
  };

  const isAnyFilterActive = !!(name || username || email || phone);

  return (
    <div
      className={`${
        theme === 'dark' ? `dark` : ''
      } bg-bg-100 dark:bg-bg-dark-100 dark:text-text-dark-100 min-w-[300px] flex flex-col min-h-screen`}
    >
      <CookieConsent />
      <Navbar />

      <AboutSection />
      <SearchSection
        name={name}
        username={username}
        email={email}
        phone={phone}
        handleInputChange={handleInputChange}
        isAnyFilterActive={isAnyFilterActive}
      />

      <UsersTable />

      <Footer />
    </div>
  );
}

export default App;
