import React from "react";

interface MarketResultProps {
  title: string;
  rightComponent?: React.ReactNode; // optional right component
}

const PageHeadline: React.FC<MarketResultProps> = ({ title, rightComponent }) => {
  return (
    <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-700">
      <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-slate-200">
        <span className="text-gradient bg-clip-text text-transparent from-indigo-400 via-purple-500 to-pink-500">
          📊
        </span>
        <span>{title}</span>
      </h2>

      {rightComponent && <div>{rightComponent}</div>}
    </div>
  );
};

export default PageHeadline;