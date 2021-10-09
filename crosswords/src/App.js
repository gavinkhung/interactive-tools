import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

const App = () => {
  const clue = "";

  const data = {
    across: {
      4: {
        clue: "Senior literature class option ",
        answer: "MYTHOLOGY",
        row: 3,
        col: 5,
      },
      5: {
        clue: "Name of the nearby community college",
        answer: "DEANZA",
        row: 1,
        col: 0,
      },
      6: {
        clue: "MVHS anthem beginning with “Hail to thee ‘ole MV high” ",
        answer: "ALMAMATER",
        row: 10,
        col: 7,
      },

      10: {
        clue: "Annual tradition where seniors wake up early and gather on the upper field before school,",
        answer: "SENIORSUNRISE",
        row: 12,
        col: 2,
      },
      12: {
        clue: "Spring event where boys typically cheerlead and the girls play football",
        answer: "POWERPUFF",
        row: 15,
        col: 13,
      },
      14: {
        clue: "Juniors and seniors that help freshmen through orientation",
        answer: "LINKLEADERS",
        row: 18,
        col: 9,
      },

      15: {
        clue: "AP Exam that’s split into two parts",
        answer: "PHYSICSC",
        row: 24,
        col: 8,
      },
    },
    down: {
      1: { clue: "MVHS’s yearbook", answer: "elvaledor", row: 0, col: 0 },
      2: {
        clue: "The Homecoming 2021 theme",
        answer: "BOARDGAMES",
        row: 0,
        col: 2,
      },
      3: {
        clue: "Shakespeare novel that is part of the freshmen literature curriculum",
        answer: "ROMEOANDJULIET",
        row: 1,
        col: 5,
      },
      7: {
        clue: "The four-year elective class that helps students prepare for college",
        answer: "AVID",
        row: 10,
        col: 12,
      },
      8: {
        clue: "MVHS’s journalistic publication",
        answer: "ELESTOQUE",
        row: 10,
        col: 14,
      },
      9: {
        clue: "The annual football game against Cupertino High School",
        answer: "HELMETGAME",
        row: 11,
        col: 3,
      },
      // 11: {
      //   clue: "AP Exam that’s split into two parts",
      //   answer: "PHYSICSC",
      //   row: 14,
      //   col: 10,
      // },
      11: {
        clue: "The only science class available without an AP version ",
        answer: "PHYSIOLOGY",
        row: 14,
        col: 10,
      },
      13: {
        clue: "Annual project completed in Physics classes",
        answer: "EGGDROP",
        row: 15,
        col: 16,
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <Crossword data={data} useStorage={false} />
    </div>
  );
};

export default App;
