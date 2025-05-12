import React, { useState, useEffect } from "react";

const EventCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const eventDate = new Date("2025-06-01T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
        const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white">
     <div
  className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-10 bg-cover bg-center min-h-[400px]"
  style={{ backgroundImage: "url('/assets/events/upevent.png')" }}
>
        <div className="text-center lg:text-left space-y-4"></div>
        <div className="flex justify-center lg:justify-end"></div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-400 py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-white text-xl md:text-2xl font-semibold">
              Business Process Management Event
            </h3>
            <p className="text-white text-sm md:text-base">
              Count Every Second Until the Event Starts
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold">{timeLeft.days}</p>
              <p className="text-sm">Days</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.hours}</p>
              <p className="text-sm">Hours</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.minutes}</p>
              <p className="text-sm">Minutes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.seconds}</p>
              <p className="text-sm">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCountdown;
