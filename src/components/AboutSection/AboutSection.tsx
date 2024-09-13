import { Rocket, Shield, Zap, LayoutGrid, Search, TrafficCone } from 'lucide-react';
import { AboutSectionItem } from './AboutSectionItem';

export const AboutSection = () => {
  return (
    <section className="py-14 bg-background text-text-100 dark:text-text-dark-100" id="about-section">
      <div className="container mx-auto px-4 animate-fade-down">
        <h2 className="text-3xl font-bold text-center mb-8">About My Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AboutSectionItem
            description="This project is designed with a fully responsive layout, ensuring that the user table and interface work
              seamlessly across all screen sizes and devices."
            heading={'Responsive Layout'}
            icon={LayoutGrid}
          />
          <AboutSectionItem
            description="A real-time search input allows filtering the user table by name, username, email, and phone, providing a
              dynamic and smooth experience."
            heading={'Advanced Search Filters'}
            icon={Search}
          />
          <AboutSectionItem
            description="By using Redux for state management, the project efficiently fetches and stores user data, ensuring fast
              data loading and interaction."
            heading={'Fast Data Fetching'}
            icon={Rocket}
          />
          <AboutSectionItem
            description="Redux ensures robust and predictable state management, making the app easier to debug and scale."
            heading={'Robust State Management'}
            icon={Shield}
          />
          <AboutSectionItem
            description="Optimized code structure and efficient state management ensure high performance, even with large data
              sets."
            heading={'High Performance'}
            icon={Zap}
          />
          <AboutSectionItem
            description="By using TypeScript, this project ensures type safety across all components, reducing runtime errors and
              improving code quality."
            heading={'Type Safety'}
            icon={TrafficCone}
          />
        </div>
      </div>
    </section>
  );
};
