import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { fetchUsers } from '../../features/users/usersSlice';
import { Spinner } from '../common/Spinner';
import { setEmailFilter, setNameFilter, setPhoneFilter, setUsernameFilter } from '../../features/filter/filterSlice';
import { SearchInput } from '../SearchInput';
import { UserTableHead } from './UsersTableHead';
import { UserTableFooter } from './UsersTableFooter';
import { UserAvatar } from '../UserAvatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ResetSearchInputBtn } from '../ResetSearchInputBtn';
import { FilterSection } from '../FilerSection';

export const UsersTable: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error } = useSelector((state: RootState) => state.users);
  const { name, username, email, phone } = useSelector((state: RootState) => state.filters);

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

  const filteredUsers = users.filter((user) => {
    const nameMatches = user.name.toLowerCase().includes(name.toLowerCase());
    const usernameMatches = user.username.toLowerCase().includes(username.toLowerCase());
    const emailMatches = user.email.toLowerCase().includes(email.toLowerCase());
    const phoneMatches = user.phone.toLowerCase().includes(phone.toLowerCase());
    return nameMatches && usernameMatches && emailMatches && phoneMatches;
  });

  const isAnyFilterActive = !!(name || username || email || phone);

  if (loading) return <Spinner size="large" />;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 m-4">
      <FilterSection
        name={name}
        username={username}
        email={email}
        phone={phone}
        handleInputChange={handleInputChange}
        isAnyFilterActive={isAnyFilterActive}
      />

      <div className="overflow-x-auto bg-bg-100 dark:bg-bg-dark-200 text-text-100 dark:text-text-dark-100 my-8 rounded-lg">
        <table className="table rounded-lg">
          <UserTableHead />
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <UserAvatar name={user.name} />
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.username}</td>
                  <td>
                    <a href={`mailto:${user.email}`} target="_blank" rel="noopener noreferrer">
                      {user.email}
                    </a>
                  </td>
                  <td>{user.phone}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-4 text-center w-100">
                  <div className="flex flex-col text-xl">
                    <FontAwesomeIcon icon={faUser} className="my-4 text-3xl" />
                    <span className="my-4">Sorry but this User doesn't exist in our database...</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
          <UserTableFooter />
        </table>
      </div>
    </div>
  );
};
