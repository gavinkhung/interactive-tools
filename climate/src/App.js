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
    <div className="w-full h-screen space-y-12 flex flex-col bg-blue-100 space-y-12">
      <h1 className="flex-none text-black pt-4 text-center uppercase text-2xl md:text-6xl font-extrabold">
        Addressing climate change
      </h1>
      <div className="grow flex flex-row mx-10 pb-10">
        <div className="flex-1 space-y-5">
          <div className="space-y-3">
            <div className="flex flex-col space-y-3">
              <h2 className="text-4xl text-gray-800 font-bold">
                {selectedArticle["headline"]}
              </h2>
              <h3 className="text-2xl text-gray-700 font-semibold">
                {selectedArticle["deck"]}
              </h3>
            </div>
            <div className="flex justify-center items-center ">
              <img className="w-96" src={selectedArticle["imageUrl"]} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center flex-1 py-4">
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
              <div className="p-4 bg-white hover:bg-gray-200 cursor-pointer backdrop-blur-md filter rounded-3xl shadow">
                <a
                  target="_blank"
                  href={article["url"]}
                  className="text-gray-800"
                >
                  {articles[articles.length - 1 - index]["level"]}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
