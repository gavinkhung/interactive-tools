import React from "react";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";

const App = () => {
  const clue = "";

  // const data = {
  //   across: {
  //     4: {
  //       clue: "Building with all the Biology classrooms",
  //       answer: "BBUILDING",
  //       row: 5,
  //       col: 22,
  //     },
  //     5: {
  //       clue: "Annual project completed in Physics classes",
  //       answer: "EGGDROP",
  //       row: 7,
  //       col: 1,
  //     },
  //     8: {
  //       clue: "Where students can look at their grades and class resources",
  //       answer: "SCHOOLOGY",
  //       row: 9,
  //       col: 10,
  //     },
  //     11: {
  //       clue: "Card that gives students a yearbook and free admission into FUHSD sports games",
  //       answer: "ASBCARD",
  //       row: 10,
  //       col: 21,
  //     },
  //     12: {
  //       clue: "The four-year elective class that helps students prepare for college",
  //       answer: "AVID",
  //       row: 11,
  //       col: 3,
  //     },
  //     13: {
  //       clue: "Standardized test that grants National Merit",
  //       answer: "PSAT",
  //       row: 11,
  //       col: 14,
  //     },
  //     15: {
  //       clue: "The Homecoming 2021 theme",
  //       answer: "BOARDGAMES",
  //       row: 13,
  //       col: 0,
  //     },
  //     16: {
  //       clue: "Sport where performers spin flags and rifles",
  //       answer: "COLORGUARD",
  //       row: 13,
  //       col: 14,
  //     },
  //     20: {
  //       clue: "MVHS anthem beginning with 'Hail to thee ‘ole MV high'",
  //       answer: "ALMAMATER",
  //       row: 16,
  //       col: 8,
  //     },
  //     21: {
  //       clue: "Annual tradition where seniors wake up early and gather on the upper field before school",
  //       answer: "SENIORSUNRISE",
  //       row: 17,
  //       col: 19,
  //     },
  //     22: {
  //       clue: "Program where students can get tutored by other students",
  //       answer: "STUDYBUDDY",
  //       row: 21,
  //       col: 9,
  //     },
  //     23: {
  //       clue: "MVHS’s yearbook",
  //       answer: "ELVALEDOR",
  //       row: 24,
  //       col: 11,
  //     },
  //     25: {
  //       clue: "Counselor for students with last names She-Z",
  //       answer: "STIVER",
  //       row: 26,
  //       col: 8,
  //     },
  //   },
  //   down: {
  //     1: {
  //       clue: "Senior lit class option",
  //       answer: "MYTHOLOGY",
  //       row: 0,
  //       col: 2,
  //     },
  //     6: {
  //       clue: "Freshmen orientation held over summer",
  //       answer: "RUNNINGOFTHEBULLS",
  //       row: 7,
  //       col: 5,
  //     },
  //     10: {
  //       clue: "The only science class available without an AP version  ",
  //       answer: "PHYSIOLOGY",
  //       row: 10,
  //       col: 9,
  //     },
  //     3: {
  //       clue: "AP Exam that’s split into two parts ",
  //       answer: "PHYSICSC",
  //       row: 4,
  //       col: 11,
  //     },
  //     19: {
  //       clue: "Shakespeare novel that is part of the freshmen literature curriculum",
  //       answer: "ROMEOANDJULIET",
  //       row: 14,
  //       col: 12,
  //     },
  //     7: {
  //       clue: "MVHS’s journalistic publication ",
  //       answer: "ELESTOQUE",
  //       row: 8,
  //       col: 15,
  //     },
  //     24: {
  //       clue: "Name of the nearby community college",
  //       answer: "DEANZA",
  //       row: 24,
  //       col: 17,
  //     },

  //     9: {
  //       clue: "Advanced choir class in MVHS",
  //       answer: "VARIATIONS",
  //       row: 9,
  //       col: 21,
  //     },
  //     14: {
  //       clue: "Class where students learn various lessons on important topics in their fourth period class",
  //       answer: "ADVISORY",
  //       row: 12,
  //       col: 23,
  //     },
  //     2: {
  //       clue: "Juniors and seniors that help freshmen through orientation",
  //       answer: "LINKLEADERS",
  //       row: 1,
  //       col: 26,
  //     },
  //     17: {
  //       clue: "Spring event where boys typically cheerlead and the girls play football",
  //       answer: "POWERPUFF",
  //       row: 13,
  //       col: 28,
  //     },
  //     18: {
  //       clue: "The annual football game against Cupertino High School",
  //       answer: "HELMETGAME",
  //       row: 13,
  //       col: 31,
  //     },
  //   },
  // };

  const data = {
    across: {
      4: {
        clue: "Annual tradition where seniors wake up early and gather on the upper field before school",
        answer: "SENIORSUNRISE",
        row: 3,
        col: 3,
      },
      7: {
        clue: "Tutorial periods where students learn various lessons on important topics from their fourth period teacher",
        answer: "ADVISORY",
        row: 7,
        col: 15,
      },
      10: {
        clue: "The only science class available without an AP version",
        answer: "PHYSIOLOGY",
        row: 9,
        col: 10,
      },
      12: {
        clue: "Juniors and seniors who sign up to guide freshmen through their first year at MVHS",
        answer: "LINKLEADERS",
        row: 11,
        col: 1,
      },
      15: {
        clue: "Card that gives students a yearbook and free admission to FUHSD sports games",
        answer: "ASBCARD",
        row: 13,
        col: 8,
      },
      18: {
        clue: "Standardized test that grants the National Merit Scholarship Semifinalist title to juniors that score in the 99th percentile",
        answer: "PSAT",
        row: 15,
        col: 3,
      },
      19: {
        clue: "Website where students can look up their grades and class resources ",
        answer: "SCHOOLOGY",
        row: 15,
        col: 10,
      },
      22: {
        clue: "School volunteer program in which students can get tutored by other students after school",
        answer: "STUDYBUDDY",
        row: 18,
        col: 0,
      },
      23: {
        clue: "Sport in which performers spin flags and rifles",
        answer: "COLORGUARD",
        row: 18,
        col: 17,
      },
      24: {
        clue: "Event held the week before school starts that includes freshman orientation and textbook pick-up",
        answer: "RUNNINGOFTHEBULLS",
        row: 21,
        col: 4,
      },
      25: {
        clue: "Last name of the counselor for students with last names She-Z",
        answer: "STIVER",
        row: 25,
        col: 14,
      },
    },
    down: {
      1: {
        clue: "Advanced mixed vocal choir class at MVHS",
        answer: "VARIATIONS",
        row: 0,
        col: 13,
      },

      2: {
        clue: "Building with all the Biology classrooms",
        answer: "BBUILDING",
        row: 1,
        col: 18,
      },
      3: {
        clue: "The community college that is closest to MVHS",
        answer: "DEANZA",
        row: 2,
        col: 15,
      },
      5: {
        clue: "School spirit event in which boys typically cheerlead while girls play football",
        answer: "POWERPUFF",
        row: 3,
        col: 21,
      },
      6: {
        clue: "The Homecoming 2021 theme",
        answer: "BOARDGAMES",
        row: 7,
        col: 8,
      },
      8: {
        clue: "AP exam with two separate parts",
        answer: "PHYSICSC",
        row: 8,
        col: 11,
      },
      9: {
        clue: "The four-year elective class that helps students prepare for college",
        answer: "AVID",
        row: 9,
        col: 2,
      },
      11: {
        clue: "Shakespeare play that is part of the ninth grade literature curriculum",
        answer: "ROMEOANDJULIET",
        row: 9,
        col: 23,
      },
      13: {
        clue: "The journalistic publication at MVHS",
        answer: "ELESTOQUE",
        row: 11,
        col: 6,
      },
      14: {
        clue: "The annual football game against Cupertino High School",
        answer: "HELMETGAME",
        row: 13,
        col: 1,
      },
      16: {
        clue: "MVHS anthem beginning with 'Hail to thee ‘ole MV high'",
        answer: "ALMAMATER",
        row: 14,
        col: 15,
      },
      17: {
        clue: "Annual project completed in Physics classes",
        answer: "EGGDROP",
        row: 14,
        col: 21,
      },
      20: {
        clue: "A literature course offered to seniors",
        answer: "MYTHOLOGY",
        row: 17,
        col: 11,
      },
      21: {
        clue: "The name of the MVHS yearbook ",
        answer: "ELVALEDOR",
        row: 17,
        col: 19,
      },
    },
  };

  return (
    <div style={{ width: "100%" }}>
      <ThemeProvider
        theme={{
          numberColor: "black",
        }}
      >
        <Crossword data={data} useStorage={false} />
      </ThemeProvider>
    </div>
  );
};

export default App;
