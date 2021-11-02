import React, { useState } from "react";
import Question from "./Question";
import Results from "./Results";

import questions from "./questions.json";

const App = () => {
  const [questionNum, setQuestionNum] = useState(0);

  return (
    <div className="bg-pink-300 h-screen w-screen">
      <div className="flex justify-center items-center py-12">
        <div className="max-w-lg">
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
            <Results setQuestionNum={setQuestionNum} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
