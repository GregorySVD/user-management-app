import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { resetFilters } from '../../features/filter/filterSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

export const ResetSearchInputBtn = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <button
      className=" mx-auto group w-1/4 p-4 text-sm font-bold bg-accent-100 dark:bg-accent-dark-100 rounded-lg
      text-text-100 dark:text-text-dark-100 mt-4 border-accent-200 dark:border-accent-dark-200 hover:animate-jump animate-jump"
      type="button"
      onClick={handleResetFilters}
    >
      <FontAwesomeIcon
        icon={faArrowsRotate}
        className="transition-transform duration-500 group-hover:animate-spin mx-1 g"
      />
      <span className="text-sm">Reset Filters</span>
    </button>
  );
};
