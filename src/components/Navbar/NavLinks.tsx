import React from 'react';

interface NavLinksProps {
  activeSection: string;
}

const sections = [
  { id: 'about-section', label: 'About' },
  { id: 'stack-section', label: 'Stack' },
  { id: 'search-section', label: 'Search in table' },
  { id: 'table-section', label: 'Table' },
];

export const NavLinks: React.FC<NavLinksProps> = ({ activeSection }) => {
  return (
    <>
      {sections.map((section) => (
        <li key={section.id} className="hover:animate-jump">
          <a
            href={`#${section.id}`}
            className={activeSection === section.id ? 'text-accent-100 dark:text-accent-dark-200 font-bold' : ''}
          >
            {section.label}
          </a>
        </li>
      ))}
    </>
  );
};
