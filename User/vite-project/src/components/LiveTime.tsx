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
    <section className="bg-black py-4">
      <div className="max-w-screen-xl mx-auto text-center">
        
        <div className="text-xl font-bold text-white mb-2">
          {time}
        </div>

        <p className="text-white font-semibold">
          हा भाई यही आती हे सबसे पहले खबर रूको और देखो
        </p>

      </div>
    </section>
  );
};

export default LiveTime;