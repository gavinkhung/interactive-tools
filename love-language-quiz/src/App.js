import React from "react";
import Provider from "./Provider";

import questions from "./questions.json";

const App = () => {
  return (
    <Provider>
      {questions["questions"].length &&
        questions["questions"].map((question) => (
          <div className="">
            <p>{question["question"]}</p>
            <ul className="">
              {question["options"].length &&
                question["options"].map((option) => (
                  <li>{option["text"] + option["type"]}</li>
                ))}
            </ul>
          </div>
        ))}
    </Provider>
  );
};

export default App;
