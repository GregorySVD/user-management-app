export const SkeletonNavbar = () => {
  return (
    <nav className="navbar sticky top-0 z-50 bg-gray-200 dark:bg-gray-700 p-4 animate-pulse">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-300 dark:bg-gray-600 h-8 w-8 rounded-full"></div>
          <div className="bg-gray-300 dark:bg-gray-600 h-6 w-32 rounded-md"></div>
        </div>

        {/*menu items */}
        <div className="flex space-x-4">
          <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded-md"></div>
          <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded-md"></div>
          <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded-md"></div>
        </div>

        {/*theme changer */}
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded-md"></div>
      </div>
    </nav>
  );
};
