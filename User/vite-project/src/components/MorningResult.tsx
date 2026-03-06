interface ResultBannerProps {
  name: string;
  prev?: string | null;
  current?: string | null;
  isUpcoming?: boolean;
}

const ResultBanner: React.FC<ResultBannerProps> = ({
  name,
  prev = "--",
  current = "--",
  isUpcoming = false,
}) => {
  const sectionBg = isUpcoming
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  const boxClass = isUpcoming?"text-white":"text-black";

  return (
    <section className={`py-3 rounded-lg shadow-md ${sectionBg}`}>
      <div className="text-center">
        <h3 className="text-lg font-bold uppercase tracking-wide">
          {name}
        </h3>

        <div className="flex items-center justify-center gap-2 mt-2">
          <span className={`px-3 py-1 text-lg font-semibold rounded ${boxClass}`}>
            {prev || "-"}
          </span>

          <span className="text-lg font-bold">→</span>

          <span className={`px-3 py-1 text-lg font-semibold rounded ${boxClass}`}>
            {current || "-"}
          </span>
        </div>
      </div>
    </section>
  );
};

export default ResultBanner;