import React, { MouseEventHandler, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Btn } from './common/Btn';

export const CookieConsent: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get('cookieConsent');
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept: MouseEventHandler<HTMLButtonElement> = () => {
    Cookies.set('cookieConsent', 'true', { expires: 365 });
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="bg-bg-100 dark:bg-bg-dark-100 text-text-100 dark:text-text-dark-100 p-4 rounded shadow-lg">
        <h3 className="font-bold text-lg">Cookie Consent 🍪</h3>
        <p className="py-4">We use cookies to improve your experience. Please accept cookies to continue.</p>
        <div className="flex justify-end">
          <Btn onClick={handleAccept} text={'Accept'} />
        </div>
      </div>
    </div>
  );
};
