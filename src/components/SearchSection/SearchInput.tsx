import { faAddressCard, faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
  value: string;
  name: 'name' | 'username' | 'email' | 'phone';
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = ({ name, onChange, placeholder, value }) => {
  const renderIcon = () => {
    switch (name) {
      case 'email':
        return <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4  text-accent-100 dark:text-accent-dark-100" />;
      case 'phone':
        return <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-accent-100 dark:text-accent-dark-100" />;
      case 'username':
        return <FontAwesomeIcon icon={faUser} className="h-4 w-4  text-accent-100 dark:text-accent-dark-100" />;
      case 'name':
        return <FontAwesomeIcon icon={faAddressCard} className="h-4 w-4 text-accent-100 dark:text-accent-dark-100" />;
      default:
        return null;
    }
  };
  return (
    <label className="input input-bordered flex items-center gap-2  bg-bg-200 dark:bg-bg-dark-100 text-text-100 text-xs">
      <input
        className="grow bg-bg-200  text-text-100 dark:text-text-dark-100 "
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {renderIcon()}
    </label>
  );
};
