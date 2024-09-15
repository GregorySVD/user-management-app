import { SkeletonAboutSection } from './SkieletonUI/SkieletonAboutSection';
import { SkeletonNavbar } from './SkieletonUI/SkieletonNavbar';
import { SkeletonStackUsedSection } from './SkieletonUI/SkieletonStackSection';

export const LoadingLayout = () => {
  return (
    <div role="status" className="animate-pulse bg-bg-100 dark:bg-bg-dark-100 h-screen overflow-hidden">
      <SkeletonNavbar />
      <SkeletonAboutSection />
      <SkeletonStackUsedSection />
    </div>
  );
};
