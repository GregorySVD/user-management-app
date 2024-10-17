import { useEffect, useState } from 'react';
import { ThemeChanger } from '../ThemeChanger';
import { DropdownNavMenu } from './DropdownNavMenu';
import { DesktopNavMenu } from './DesktopNavMenu';

const sections = ['about-section', 'stack-section', 'search-section', 'table-section'];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>('about-section');

  useEffect(() => {
    const handleScroll = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          const intersectingEntries = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => {
              return a.boundingClientRect.top - b.boundingClientRect.top;
            });

          if (intersectingEntries.length > 0) {
            setActiveSection(intersectingEntries[0].target.id);
          }
        },
        {
          rootMargin: '-50px 0px -50px 0px',
          threshold: 0.7,
        }
      );

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) observer.observe(sectionElement);
      });

      return () => {
        observer.disconnect();
      };
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky top-0 z-50 bg-gradient-to-r from-primary-100 to-primary-200 dark:from-primary-dark-100 dark:to-primary-dark-200 dark:text-text-dark-100 text-primary-300">
      <div className="navbar-start">
        <DropdownNavMenu activeSection={activeSection} />
        <a className="btn btn-ghost text-xl hover:animate-jump" href="./">
          <img src="./icons8-user-color-96.png" className="h-8" alt="User Manager logo" />
          User Manager
        </a>
      </div>
      <DesktopNavMenu activeSection={activeSection} />
      <div className="navbar-end">
        <ThemeChanger />
      </div>
    </nav>
  );
};
