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
    <div className="flex flex-col justify-around w-screen h-screen px-24 bg-blue-200">
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
        <h1 className="text-2xl font-extrabold text-center text-white uppercase md:text-6xl">
          Winter Sports
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <Article
          deck="Examining the ups and downs of skiing"
          headline="MVHS students share about their experiences on the hill"
          img="./photo4.png"
          url="https://elestoque.org/2021/12/10/uncategorized/examining-the-ups-and-downs-of-skiing/"
        />
        <Article
          deck="Skaters glide on ice"
          headline="Figure skaters reflect on their journey in the rink"
          img="./photo3.png"
          url="https://elestoque.org/2021/12/06/uncategorized/skaters-glide-on-ice/"
        />
        <Article
          deck="Pass the puck"
          headline="Students describe their experiences playing hockey"
          img="./photo2.png"
          url="https://elestoque.org/2022/02/11/uncategorized/pass-the-puck"
        />
        {/* 
        <Article
          deck="Examining the ups and downs of skiing"
          headline="MVHS students share about their experiences on the hill"
          img="https://elestoque.org/wp-content/uploads/2021/12/skiing-600x900.jpg"
          url="https://elestoque.org/2021/12/10/uncategorized/examining-the-ups-and-downs-of-skiing/"
        />
        <Article
          deck="Skaters glide on ice"
          headline="Figure skaters reflect on their journey in the rink"
          img="https://elestoque.org/wp-content/uploads/2021/12/IMG_3987-e1638817058116.jpg"
          url="https://elestoque.org/2021/12/06/uncategorized/skaters-glide-on-ice/"
        />
        <Article
          deck="Pass the puck"
          headline="Students describe their experiences playing hockey"
          img="https://elestoque.org/wp-content/uploads/2022/02/Image-from-iOS-1.jpg"
          url="https://elestoque.org/2022/02/11/uncategorized/pass-the-puck"
      /> */}
      </div>
      {/* <div className="mx-auto">
        <button
          onClick={toggle}
          className="px-3 py-2 text-xl font-medium text-center text-black bg-gray-100 rounded-md focus:outline-none hover:bg-gray-200 hover:shadow-lg"
        >
          {playing ? "Disable Sound" : "Enable Sound"}
        </button>
      </div> */}
    </div>
  );
};

const Article = ({ deck, headline, img, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="">
      <div className="p-4 bg-gray-400 shadow cursor-pointer hover:bg-gray-400 backdrop-blur-md filter rounded-3xl">
        <div className="flex flex-row space-x-2">
          <div className="">
            <img
              // className="object-cover h-48 w-72 rounded-xl"
              className="object-cover h-56 w-96 rounded-xl"
              src={img}
              alt=""
            />
          </div>
          <div className="">
            <h3 className="text-xl font-bold text-gray-100">{deck}</h3>
            <p className="mt-0.5 text-lg text-gray-300">{headline}</p>
            {/* <h3 className="font-bold text-gray-100 text-md">{deck}</h3>
            <p className="mt-0.5 text-sm text-gray-300">{headline}</p> */}
          </div>
        </div>
      </div>
    </a>
  );
};

export default App;
