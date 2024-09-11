import { UsersTable } from './components/UserTable';
import { ThemeChanger } from './components/ThemeChanger';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  console.log(theme);
  return (
    <div className={`${theme === 'dark' ? `dark` : ''} p-4 bg-primary-100 dark:bg-bg-dark-100 dark:text-text-dark-100`}>
      <ThemeChanger />
      <UsersTable />
    </div>
  );
}

export default App;
