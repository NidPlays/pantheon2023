import React from 'react'

export default function Timer() {
    const [days, setDays] = React.useState(0);
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    const deadline = "December, 15, 2023";

    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    React.useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div data-aos="fade-up" className="timer overflow-hidden flex justify-center items-center" role="timer">
        <div className="col-4 px-5 bg-transparent py-2">
          <div className="box">
            <p id="day" className='text-white text-3xl'>{days < 10 ? "0" + days : days}</p>
            <span className="text-white text-base">Days</span>
          </div>
        </div>
        <div className="px-5 bg-transparent py-2">
          <div className="box">
            <p id="hour" className='text-white text-3xl'>{hours < 10 ? "0" + hours : hours}</p>
            <span className="text-white text-base">Hours</span>
          </div>
        </div>
        <div className="px-5 bg-transparent py-2">
          <div className="box">
            <p id="minute" className='text-white text-3xl'>{minutes < 10 ? "0" + minutes : minutes}</p>
            <span className="text-white text-base">Minutes</span>
          </div>
        </div>
        <div className="px-5 bg-transparent py-2">
          <div className="box">
            <p id="second" className='text-white text-3xl'>{seconds < 10 ? "0" + seconds : seconds}</p>
            <span className="text-white text-base">Seconds</span>
          </div>
        </div>
      </div>
    );

}
