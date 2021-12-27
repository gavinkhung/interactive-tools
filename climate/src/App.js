import React, { useEffect, useState } from "react";

const articles = [
  {
    headline: "Local climate change activists examine their impact",
    deck: "Students explain their involvement in the Youth Environmental Power Initiative",
    author: "John Doe",
    url: "https://elestoque.org/2021/12/10/news/local-climate-change-activists-examine-their-impact/",
    imageUrl:
      "https://elestoque.org/wp-content/uploads/2021/12/newslocal-1-768x768.png",
    zoom: 0,
    level: "Local",
  },
  {
    headline: "Electric vehicle chargers make a positive impact",
    deck: "Examining the impact of FUHSD’s installation of solar panels and car chargers",
    author: "John Doe",
    url: "https://elestoque.org/2021/12/10/news/electric-vehicle-chargers-make-a-positive-impact/",
    imageUrl:
      "https://elestoque.org/wp-content/uploads/2021/12/newsdistrict-900x900.png",
    zoom: 33,
    level: "District",
  },
  {
    headline:
      "Federal regulations advance the national approach to climate change",
    deck: "Examining how the government is handling the climate crisis through a set of bills and rulings ",
    author: "John Doe",
    url: "https://elestoque.org/2021/12/10/news/federal-regulations-advance-the-national-approach-to-climate-change/",
    imageUrl:
      "https://elestoque.org/wp-content/uploads/2021/12/newscountry-2-768x768.png",
    zoom: 66,
    level: "National",
  },
  {
    headline: "Countries tackle climate change at COP26",
    deck: "Analyzing the results of 2021 United Nations Climate Conference and the absence of Russia and China",
    author: "John Doe",
    url: "https://elestoque.org/2021/12/10/news/countries-tackle-climate-change-at-cop26/",
    imageUrl:
      "https://elestoque.org/wp-content/uploads/2021/12/newsglobal-900x900.png",
    zoom: 100,
    level: "Global",
  },
];

function App() {
  const [zoom, setZoom] = useState(100);
  const [selectedArticle, setSelectedArticle] = useState(
    articles[articles.length - 1]
  );

  useEffect(() => {
    const withinRange = (target, current, length) => {
      const buffer = (100 / length) * 0.5;

      return current > target - buffer && current < target + buffer;
    };

    for (let i = 0; i < articles.length; i++) {
      if (withinRange(articles[i]["zoom"], zoom, articles.length)) {
        setSelectedArticle(articles[i]);
        break;
      }
    }
  }, [zoom]);

  return (
    <div className="w-full min-h-screen flex flex-row justify-between bg-blue-100 p-2">
      <div className="flex-none">
        <a
          href="https://elestoque.org/"
          className="text-md text-black underline font-trebuchet"
        >
          Back to El Estoque
        </a>
      </div>
      <div className="grow space-y-1 flex flex-col">
        <h1 className="flex-none text-black py-2 text-center uppercase text-2xl md:text-5xl font-extrabold font-oswald">
          Addressing climate change
        </h1>
        <p className="flex-none text-gray-800 text-center text-lg md:text-2xl font-oswald">
          Examining the approach to climate change on four different levels
        </p>
        <p className="flex-none text-gray-700 pb-16 text-center text-lg md:text-2xl font-oswald">
          By:{" "}
          <a
            href="https://elestoque.org/staff_name/michelle-chen/"
            target="_blank"
            className="underline"
          >
            Michelle Chen
          </a>
          ,{" "}
          <a
            href="https://elestoque.org/staff_name/melody-cui/"
            target="_blank"
            className="underline"
          >
            Melody Cui
          </a>
          ,{" "}
          <a
            href="https://elestoque.org/staff_name/mikaylah-du/"
            target="_blank"
            className="underline"
          >
            Mikaylah Du
          </a>
          ,{" "}
          <a
            href="https://elestoque.org/staff_name/jefferson-le/"
            target="_blank"
            className="underline"
          >
            Jefferson Le
          </a>
          ,{" "}
          <a
            href="https://elestoque.org/staff_name/lance-tong/"
            target="_blank"
            className="underline"
          >
            Lance Tong
          </a>{" "}
          and{" "}
          <a
            href="https://elestoque.org/staff_name/angela-zhang/"
            target="_blank"
            className="underline"
          >
            Angela Zhang
          </a>
        </p>
        <div className="grow flex flex-col justify-center md:flex-row mx-10 pb-10">
          <div className="max-w-2xl space-y-5">
            <div className="space-y-3">
              <div className="flex flex-col space-y-3">
                <h2 className="text-3xl text-gray-800 font-bold font-trebuchet overflow-hidden line-clamp-2">
                  {selectedArticle["headline"]}
                </h2>
                <h3 className="text-xl text-gray-600 font-semibold font-trebuchet">
                  {selectedArticle["deck"]}
                </h3>
              </div>
              <div className="flex justify-center items-center">
                <a
                  target="_blank"
                  href={selectedArticle["url"]}
                  className="text-gray-800"
                >
                  <img
                    className="w-96"
                    src={selectedArticle["imageUrl"]}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-start py-4">
            <div className="">
              <input
                type="range"
                className="range purple h-full"
                list="temperature"
                min="0"
                max="100"
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
                step="3"
              />
              <datalist id="temperature">
                <option value="0"></option>
                <option value="33"></option>
                <option value="66"></option>
                <option value="100"></option>
              </datalist>
            </div>
            <div className="flex flex-col justify-between h-full">
              {articles.map((article, index) => (
                <div className="px-4 py-3 bg-white hover:bg-gray-100 cursor-pointer backdrop-blur-md filter rounded-xl shadow text-center">
                  <a
                    target="_blank"
                    href={article["url"]}
                    className="text-gray-800 font-trebuchet"
                  >
                    {articles[articles.length - 1 - index]["level"]}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-none">
        <a
          href="https://elestoque.org/"
          className="text-md text-black underline opacity-0"
        >
          Back to El Estoque
        </a>
      </div>
    </div>
  );
}

export default App;
