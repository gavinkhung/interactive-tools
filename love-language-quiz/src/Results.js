import React, { useContext, useEffect, useState } from "react";
import Context from "./Context";

import questions from "./questions.json";

export default function Question({ setQuestionNum }) {
  const { responses, setResponses } = useContext(Context);
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const keys = questions["types"];
    const responseKeys = Object.keys(responses);
    const output = [];

    console.log("responseKeys", responseKeys);
    console.log("keys", keys);
    console.log("responses", responses);

    keys.map((key) => {
      console.log(key);
      if (responseKeys.includes(key)) {
        output.push({
          type: key,
          percentage: responses[key] * 10,
        });
      } else {
        output.push({
          type: key,
          percentage: 0,
        });
      }
    });
    console.log("output", output);
    output.sort((a, b) => Number(b.percentage) - Number(a.percentage));
    setRankings(output);
  }, [responses]);

  const handleNext = () => {
    let stored = {};

    setResponses({
      ...stored,
    });
    setQuestionNum(0);
  };

  return (
    <div className="w-full space-y-4">
      <h2 className="text-black text-lg font-semibold">Results</h2>
      {/* <p>{JSON.stringify(rankings)}</p> */}

      <div className="space-y-2">
        {rankings.length &&
          rankings.map((ranking) => (
            <div
              key={ranking.type}
              className={
                "relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none bg-white"
              }
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className={"font-medium text-gray-900"}>
                      {ranking.type}
                    </p>
                  </div>
                </div>
                <p className={"font-medium text-gray-900"}>
                  {ranking.percentage + "%"}
                </p>
              </div>
            </div>
          ))}
      </div>
      <button
        className="ml-auto bg-white relative rounded-lg shadow-md px-4 py-2.5 cursor-pointer flex focus:outline-none"
        onClick={handleNext}
      >
        Restart
      </button>
    </div>
  );
}
