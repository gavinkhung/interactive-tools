import React from "react";

const App = () => {
  return (
    <div className="font-bodoni">
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 space-y-2 pt-2">
        <div className="flex-none flex flex-row justify-between w-full px-2">
          <a
            href="https://elestoque.org/"
            className="text-lg text-black underline"
          >
            Back to El Estoque
          </a>
          <div className="space-y-1 flex flex-col max-w-5xl">
            <h1 className="flex-none text-5xl font-bold text-center">
              Language in Media
            </h1>
            {/* <h2 className="text-gray-800 text-center text-sm">
              As internet usage grows worldwide, the rhetoric used in modern
              media permeates our daily lives and has significant implications
              on the ways we communicate. To delve deeper into topics like the
              detriments of an English-centered internet, the evolution of
              internet humor and the linguistic appropriation of AAVE, read El
              Estoque's language in media package below.
            </h2> */}
          </div>
          <a
            href="https://elestoque.org/"
            className="text-lg text-black underline opacity-0"
          >
            Back to El Estoque
          </a>
        </div>
        <div className="grow">
          <div className="mx-auto w-phone h-phone bg-gray-800 rounded-phone border-phone border-black relative ring ring-purple-400 shadow-xl">
            <div className="absolute w-full h-full z-10">
              <div className="bg-gray-700 px-8 pt-2 flex justify-between space-x-1 rounded-tr-phone rounded-tl-phone">
                <div className="">
                  <p className="text-white text-md">
                    {`${new Date().getHours() % 12}:${new Date().getMinutes()}`}
                  </p>
                </div>
                <div className="flex flex-row space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="bg-gray-700 flex flex-col items-center">
                <span className="bg-gray-500 h-8 w-8 rounded-full text-white flex items-center justify-center">
                  EE
                </span>
                <p className="my-1 text-white text-md font-light">El Estoque</p>
              </div>
              <div className="relative mt-1 mx-2 space-y-3">
                <p className="text-center text-gray-300 text-sm font-light">
                  {new Date().toLocaleString()}
                </p>
                <div className="grid grid-cols-1 gap-2 px-4">
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <div
                      className={`p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer backdrop-blur-md filter rounded-2xl shadow w-5/6 opacity-0 animate-fade animation-delay-500`}
                    >
                      <div className="flex flex-row space-x-2">
                        <div className="flex-1">
                          <h3 className="text-xs text-gray-100">
                            As internet usage grows worldwide, the rhetoric used
                            in modern media permeates our daily lives and has
                            significant implications on the ways we communicate.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <div
                      className={`p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer backdrop-blur-md filter rounded-2xl shadow w-5/6 opacity-0 animate-fade animation-delay-500`}
                    >
                      <div className="flex flex-row space-x-2">
                        <div className="flex-1">
                          <h3 className="text-xs text-gray-100">
                            To delve deeper into topics like the detriments of
                            an English-centered internet, the evolution of
                            internet humor and the linguistic appropriation of
                            AAVE, read El Estoque's language in media package
                            below.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>

                  <TextMessage
                    url="https://elestoque.org/2021/12/10/uncategorized/an-english-centered-internet-causes-miscommunication-misinformation-and-isolation/"
                    imgUrl="english.png"
                    headline="An English-centered Internet causes miscommunication, misinformation and isolation"
                    deck="Examining how English being the Internet’s primary language affects users"
                    animation="opacity-0 animate-fade animation-delay-1000"
                  />

                  <TextMessage
                    url="https://elestoque.org/2021/12/12/uncategorized/internet-humor-unites-generations/"
                    imgUrl="humor.png"
                    headline="Internet humor unites generations"
                    deck="Examining the evolution and influence of humor communicated over the internet"
                    animation="opacity-0 animate-fade animation-delay-1500"
                  />

                  <TextMessage
                    url="https://elestoque.org/2021/12/11/uncategorized/giving-credit-where-its-due/"
                    imgUrl="aave.png"
                    headline="Giving credit where it's due"
                    deck="Examining the linguistic appropriation of AAVE in modern rhetoric"
                    animation="opacity-0 animate-fade animation-delay-2000"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 inset-x-0 h-20 z-10">
              <div className="absolute bottom-1 inset-x-0">
                <div className="mx-auto h-1 w-28 rounded bg-white"></div>
              </div>
            </div>
            <div className="relative top-0 inset-x-0 bg-black rounded-tr-phone rounded-tl-phone animate-on animate-delay-1000 z-10">
              <div className="mx-auto bg-black h-6 w-40 rounded-b-3xl"></div>
            </div>
            <div className="absolute w-full h-full bg-black animate-disappear animate-delay-1000 z-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TextMessage = ({ imgUrl, url, headline, deck, animation }) => {
  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div
          className={`p-2 bg-gray-500 hover:bg-gray-600 cursor-pointer backdrop-blur-md filter rounded-2xl shadow w-5/6 ${animation}`}
        >
          <div className="flex flex-row space-x-2">
            <div className="">
              <img
                className="w-28 h-28 rounded-xl object-cover"
                src={imgUrl}
                alt=""
              />
            </div>
            <div className="flex-1">
              <h3 className="text-md font-bold text-gray-100">{headline}</h3>
              <p className="mt-0.5 text-xs text-gray-300">{deck}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default App;
