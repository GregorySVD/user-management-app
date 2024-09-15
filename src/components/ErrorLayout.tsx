import { AlertCircle, Home, RefreshCcw } from 'lucide-react';

export const ErrorLayout = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="min-h-screen bg-white text-black  dark:bg-black dark:text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex justify-center text-red-600">
          <AlertCircle className="h-24 w-24 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Oops! Something went wrong</h1>
        <p className="text-xl text-muted-foreground">We apologize for the inconvenience. An error has occurred.</p>
        <div className="bg-card p-4 rounded-md shadow-md">
          <p className="text-sm text-muted-foreground mb-2">Error details:</p>
          <p className="text-sm font-mono bg-muted p-2 rounded">{error.message || 'Unknown error'}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
          >
            <Home className="mr-2 h-4 w-4" />
            Go to Homepage
          </a>
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};
