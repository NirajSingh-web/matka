interface MorningResultProps {
  title?: string;
  time?: string;
  resultLeft?: string;
  resultRight?: string;
}

const MorningResult: React.FC<MorningResultProps> = ({
  title = "disawer",
  time = "05:15 AM",
  resultLeft = "--",
  resultRight = "68",
}) => {
  return (
    <section className="bg-white py-4">
      <div className="text-center">
        <h3 className="text-xl font-bold uppercase">{title}</h3>
        <p className="py-2 text-sm text-gray-800">{time}</p>

        <div className="flex items-center justify-center gap-4">
          <strong className="text-2xl">{resultLeft}</strong>
          <img
            src="/images/next.webp"
            alt="next"
            className="w-10 h-10"
          />
          <strong className="text-2xl">{resultRight}</strong>
        </div>
      </div>
    </section>
  );
};

export default MorningResult;