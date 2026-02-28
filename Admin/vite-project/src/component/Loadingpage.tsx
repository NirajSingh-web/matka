import React from "react";

interface LoadingPageProps {
  message?: string;
}

const LoadingPage: React.FC<LoadingPageProps> = ({
  message = "Loading, please wait...",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="flex flex-col items-center gap-4">

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-t-transparent border-indigo-500 rounded-full animate-spin shadow-lg" />

        {/* Message */}
        <p className="text-slate-200 text-lg font-medium animate-pulse">
          {message}
        </p>

      </div>
    </div>
  );
};

export default LoadingPage;