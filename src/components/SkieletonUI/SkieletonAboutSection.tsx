export const SkeletonAboutSection = () => {
  return (
    <section className="py-14 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300" id="about-section">
      <div className="container mx-auto px-4 animate-pulse">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gray-300 dark:bg-gray-600 h-8 w-1/2 mx-auto rounded-md"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md p-6 animate-pulse"
            >
              <div className="bg-gray-400 dark:bg-gray-500 p-3 rounded-full mb-4 h-16 w-16"></div>
              <div className="bg-gray-400 dark:bg-gray-500 h-6 w-3/4 mb-4 rounded-md"></div>
              <div className="bg-gray-400 dark:bg-gray-500 h-4 w-full rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
