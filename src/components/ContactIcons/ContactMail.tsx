import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ContactMail = () => {
  return (
    <a href="mailto:grzegorzterenda@gmail.com" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faEnvelope} className="text-xl hover:animate-jump" />
    </a>
  );
};
