import { LucideIcon } from 'lucide-react';

interface AboutSectionItemProps {
  icon: LucideIcon;
  heading: string;
  description: string;
}

export const AboutSectionItem = (props: AboutSectionItemProps) => {
  const { icon: Icon, heading, description } = props;

  return (
    <label className="flex flex-col items-center text-center group">
      <div className="bg-bg-200 dark:bg-bg-dark-200 rounded-lg shadow-md p-6 group-hover:animate-wiggle-more">
        <div className="bg-primary/10 p-3 rounded-full mb-4 ">
          <Icon className="h-8 w-8 text-accent-100 dark:text-accent-dark-100 font-bold" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{heading}</h3>
        <p className="text-text-200 dark:text-text-dark-200">{description}</p>
      </div>
    </label>
  );
};
