import { useEffect } from 'react';
import { Spinner } from './components/common/Spinner/Spinner';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchUsers } from './features/users/usersSlice';

function App() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (error) {
    return <div className="text-text-100 text-center">{error}</div>;
  }

  return (
    <div className="bg-bg-100 min-h-screen p-8">
      {loading && <Spinner size="large" />}
      {error && <p>Error: {error}</p>}
      <h1 className="text-primary-300 text-4xl font-bold">Welcome to the User Management App</h1>
      <p className="text-text-100 mt-4">This is a demo using a custom Tailwind CSS color palette.</p>
      <button className="mt-6 bg-accent-100 text-bg-100 py-2 px-4 rounded-lg shadow-md hover:bg-accent-200">
        Click Me
      </button>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
