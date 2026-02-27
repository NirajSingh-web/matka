import React from "react";

interface MarketResultProps {
  title: string;
}

const MarketResult: React.FC<MarketResultProps> = ({ title }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
      📊 {title}
    </h2>
  );
};

export default MarketResult;