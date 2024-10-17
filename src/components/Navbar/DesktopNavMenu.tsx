import React from 'react';
import { NavLinks } from './NavLinks';

interface DesktopNavMenuProps {
  activeSection: string;
}

export const DesktopNavMenu: React.FC<DesktopNavMenuProps> = ({ activeSection }) => {
  return (
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-xl">
        <NavLinks activeSection={activeSection} />
      </ul>
    </div>
  );
};
