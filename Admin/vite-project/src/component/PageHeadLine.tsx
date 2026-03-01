import React from "react";

interface MarketResultProps {
  title: string;
  rightComponent?: React.ReactNode; // optional right component
}

const PageHeadline: React.FC<MarketResultProps> = ({ title, rightComponent }) => {
  return (
    <div
      className="
        sticky top-0 z-50
        bg-neutral-900 dark:bg-neutral-800
        border-b border-slate-700
        flex justify-between items-center
        px-4 md:px-6
        h-14
          rounded-t-lg
      "
    >
      <h4 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-slate-200 dark:text-slate-100">
        <span className="text-gradient bg-clip-text text-transparent from-indigo-400 via-purple-500 to-pink-500 text-sm   rounded-t-lg">
          📊
        </span>
        <span>{title}</span>
      </h4>

      {rightComponent && (
        <div className="text-slate-200 dark:text-slate-100 flex items-center">
          {rightComponent}
        </div>
      )}
    </div>
  );
};

export default PageHeadline;