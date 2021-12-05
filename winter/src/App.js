import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const App = () => {
  const { width, height } = useWindowSize();

  const [playing, toggle] = useAudio("Intro.mp3");

  return (
    <div className="bg-blue-200 h-screen w-screen flex flex-col justify-around px-24">
      <Confetti
        width={width}
        height={height}
        colors={["#ffffff"]}
        drawShape={(ctx) => {
          ctx.beginPath();
          for (let i = 0; i < 10; i++) {
            const angle = 0.35 * i;
            const x = 1.5 * angle * Math.cos(angle);
            const y = 1.5 * angle * Math.sin(angle);
            ctx.lineTo(x, y);
          }
          ctx.stroke();
          ctx.closePath();
        }}
        gravity={0.05}
      />

      <div className="">
        <h1 className="uppercase text-center text-2xl md:text-6xl text-white font-extrabold">
          Winter Sports
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-24">
        <Article url="." />
        <Article url="." />
        <Article url="." />
        <Article url="." />
      </div>
      <div className="mx-auto">
        <button
          onClick={toggle}
          className="text-center focus:outline-none text-black text-xl py-2 px-3 rounded-md bg-gray-100 hover:bg-gray-200 hover:shadow-lg font-medium"
        >
          {playing ? "Disable Sound" : "Enable Sound"}
        </button>
      </div>
    </div>
  );
};

const Article = ({ url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="">
      <div className="p-4 bg-gray-400 hover:bg-gray-400 cursor-pointer backdrop-blur-md filter rounded-3xl shadow">
        <div className="flex flex-row space-x-2">
          <div className="">
            <img
              className="h-36 rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?auto=format&fit=crop&w=1160&q=80"
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-md font-bold text-gray-100">Headline 1</h3>
            <p className="mt-0.5 text-sm text-gray-300">Deck 1</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default App;
