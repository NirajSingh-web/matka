import { useEffect, useState } from "react";

const LiveTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-2 text-lg font-bold text-center text-black bg-white">
      {time}
    </div>
  );
};

export default LiveTime;