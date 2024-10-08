import React from 'react';
import { SearchInput } from './SearchInput';
import { ResetSearchInputBtn } from './ResetSearchInputBtn';

interface SearchSectionProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isAnyFilterActive: boolean;
}

export const SearchSection: React.FC<SearchSectionProps> = ({
  name,
  username,
  email,
  phone,
  handleInputChange,
  isAnyFilterActive,
}) => {
  return (
    <div className="p-4 mx-4">
      <div className="bg-bg-300 dark:bg-bg-dark-300 p-4 mt-4 rounded-xl flex flex-col" id="search-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 rounded-lg">
          <SearchInput name="name" onChange={handleInputChange} value={name} placeholder="Search by Name" />
          <SearchInput name="username" onChange={handleInputChange} value={username} placeholder="Search by Username" />
          <SearchInput name="email" onChange={handleInputChange} value={email} placeholder="Search by Email" />
          <SearchInput name="phone" onChange={handleInputChange} value={phone} placeholder="Search by Phone" />
        </div>
        {isAnyFilterActive && <ResetSearchInputBtn />}
      </div>
    </div>
  );
};
