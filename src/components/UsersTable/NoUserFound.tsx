import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NoUserFound = () => {
  return (
    <tr>
      <td colSpan={5} className="p-4 text-center w-100">
        <div className="flex flex-col text-xl">
          <FontAwesomeIcon icon={faUser} className="my-4 text-3xl" />
          <span className="my-4">Sorry but this User doesn't exist in our database... </span>
        </div>
      </td>
    </tr>
  );
};
