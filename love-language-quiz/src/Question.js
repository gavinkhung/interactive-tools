import React, { useContext, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Context from "./Context";

export default function Question({ question, questionNum, setQuestionNum }) {
  const { responses, setResponses } = useContext(Context);

  const [selected, setSelected] = useState("");
  const [error, setError] = useState(" ");

  const handleNext = () => {
    if (selected.length) {
      let stored = { ...responses };

      if (stored[selected]) {
        stored[selected] = stored[selected] + 1;
      } else {
        stored[selected] = 1;
      }

      setResponses({
        ...stored,
      });
      setQuestionNum(questionNum + 1);
      setError(" ");
    } else {
      setError("Please choose an option");
    }
  };

  return (
    <div className="w-full space-y-4">
      <h2 className="text-black text-lg font-semibold">
        {question["question"]}
      </h2>
      <p className="text-red-900">{error}</p>
      {/* <p>{JSON.stringify(responses)}</p> */}

      <RadioGroup value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-2">
          {question &&
            question["options"].map((option) => (
              <RadioGroup.Option
                key={option.text}
                value={option.type}
                className={({ active, checked }) =>
                  `${
                    checked
                      ? "bg-opacity-75 text-white bg-pink-800"
                      : "bg-white"
                  }
                  relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {option.text}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-white">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
        </div>
      </RadioGroup>
      <button
        className="ml-auto bg-white relative rounded-lg shadow-md px-4 py-2.5 cursor-pointer flex focus:outline-none"
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
