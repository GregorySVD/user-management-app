import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { useEffect } from 'react';
import { fetchUsers } from './features/users/usersSlice';
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from './features/filter/filterSlice';
import { LoadingLayout } from './components/LoadingLayout';
import { ErrorLayout } from './components/ErrorLayout';
import { CookieConsent } from './components/CookieConsent';
import { Navbar } from './components/Navbar/Navbar';
import { AboutSection } from './components/AboutSection/AboutSection';
import { StackUsedSection } from './components/StackUsedSection';
import { SearchSection } from './components/SearchSection/SearchSection';
import { UsersTable } from './components/UsersTable/UsersTable';
import { Footer } from './components/Footer';

export const App = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch<AppDispatch>();

  // Filters
  const { name, username, email, phone } = useSelector((state: RootState) => state.filters);

  // Redux state for users
  const { loading, error, users } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

  // Handling loading state
  if (loading) {
    return <LoadingLayout />;
  }
  // Handling error state
  if (error) {
    return <ErrorLayout error={new Error(error)} reset={() => dispatch(fetchUsers())} />;
  }

  // Check if any filter is active
  const isAnyFilterActive = !!(name || username || email || phone);

  // Render the main UI
  return (
    <section>
      <div
        className={`bg-gradient-light dark:bg-gradient-dark dark:bg-bg-dark-100 dark:text-text-dark-100 text-text-100 min-w-[300px] flex flex-col min-h-screen`}
      >
        <CookieConsent />
        <Navbar />
        <AboutSection />
        <StackUsedSection />
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
    </section>
  );
};
