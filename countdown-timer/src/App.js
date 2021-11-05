import React, { useEffect, useState } from "react";

const App = () => {
  const [seconds, setSeconds] = useState(7);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    }
    if (seconds <= 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="bg-background h-screen w-screen flex flex-col space-y-4 justify-center items-center ">
      <div className="bg-white text-black font-bold text-7xl tracking-wider rounded-full h-96 w-96 flex items-center justify-center">
        {seconds <= 0 ? 0 : seconds}
      </div>
      <div className="flex flex-row space-x-6">
        <button
          className="bg-white text-black hover:text-gray-600 relative rounded-lg shadow-md px-4 py-2.5 cursor-pointer flex focus:outline-none"
          onClick={() => {
            setIsActive(!isActive);
            if (seconds <= 0) {
              setSeconds(7);
            }
          }}
        >
          {isActive ? "Stop" : "Start"}
        </button>
        {/* <button
          className="bg-white text-black hover:text-gray-600 relative rounded-lg shadow-md px-4 py-2.5 cursor-pointer flex focus:outline-none"
          onClick={() => {
            setSeconds(7);
            setIsActive(false);
          }}
        >
          Reset
        </button> */}
      </div>
    </div>
  );
};

export default App;
