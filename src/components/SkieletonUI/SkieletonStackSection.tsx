export const SkeletonStackUsedSection = () => {
  return (
    <section className="py-12 bg-background bg-bg-200 dark:bg-bg-dark-200" id="stack-section">
      <div className="container mx-auto px-4 animate-pulse">
        <h2 className="text-3xl font-bold text-center mb-8">
          <div className="h-8 w-3/4 mx-auto" /> {/* Skeleton for the heading */}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-md bg-bg-300 dark:bg-bg-dark-300"
            >
              <div className="mb-4">
                <div className="h-12 w-12 rounded-full" /> {/* Skeleton for the icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                <div className="h-6 w-3/4" /> {/* Skeleton for the name */}
              </h3>
              <p className="text-muted-foreground text-sm">
                <span className="block h-4 w-5/6 mx-auto" /> {/* Use span instead of div */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
