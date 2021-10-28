import React, { useContext, useState } from "react";
import Question from "./Question";
import Context from "./Context";

import questions from "./questions.json";

console.log(questions["questions"].length);

const App = () => {
  const [questionNum, setQuestionNum] = useState(0);
  const { responses, setResponses } = useContext(Context);

  const reset = () => {
    setQuestionNum(0);
  };

  return (
    <div className="bg-pink-300">
      <div className="max-w-lg mx-auto px-4 py-16 space-y-1">
        <div className="w-full space-y-2">
          {questionNum < questions["questionsNum"] ? (
            questions["questions"].length &&
            questions["questions"].map((question, index) => (
              <>
                {questionNum == index && (
                  <Question
                    question={question}
                    questionNum={questionNum}
                    setQuestionNum={setQuestionNum}
                  />
                )}
              </>
            ))
          ) : (
            <div>
              <p>results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
