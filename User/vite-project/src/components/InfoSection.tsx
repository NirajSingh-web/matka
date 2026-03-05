const InfoSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h2 className="text-2xl font-bold mb-4">
        What is Satta King?
      </h2>

      <p className="mb-4">
        Satta King is a popular lottery and gambling game that originated in India.
        Players bet on numbers from 00 to 99 and wait for the declared result.
      </p>

      <h3 className="text-xl font-bold mt-6 mb-2">
        Popular Markets
      </h3>

      <ul className="list-disc ml-6 space-y-2">
        <li>Disawar</li>
        <li>Faridabad</li>
        <li>Gali</li>
        <li>Delhi Bazar</li>
      </ul>
    </div>
  );
};

export default InfoSection;