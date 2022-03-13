import React from "react";
import Crossword, { ThemeProvider } from "@jaredreisinger/react-crossword";

const App = () => {
  const clue = "";

  const data = {
    across: {
      3: {
        clue: "Staff member who loves to wear kitty ears",
        answer: "LERNER",
        row: 1,
        col: 18,
      },
      4: {
        clue: "Staff member who is a big fan of Taiwanese singer Jay Chou",
        answer: "KUO",
        row: 3,
        col: 21,
      },
      5: {
        clue: "Staff member who has been to an Everest base camp in Nepal",
        answer: "BANA",
        row: 4,
        col: 10,
      },
      6: {
        clue: "Staff member who loves dancing to '80s music",
        answer: "ZAHN",
        row: 4,
        col: 17,
      },
      8: {
        clue: "Staff member who has a ball python named Udon as a class pet",
        answer: "GAN",
        row: 6,
        col: 3,
      },
      11: {
        clue: "Staff member whose family calls them Jamie",
        answer: "CLAUSNITZER",
        row: 7,
        col: 12,
      },
      14: {
        clue: "Staff member whose favorite animals are red pandas and has climbed Mount Fuji in Japan",
        answer: "BARRON",
        row: 10,
        col: 7,
      },
      16: {
        clue: "Staff member who used to fence Sabre in middle school",
        answer: "GILCHRIST",
        row: 12,
        col: 0,
      },
      18: {
        clue: "Staff member who tutored the Prince of Norway in writing",
        answer: "TANABE",
        row: 13,
        col: 13,
      },
      19: {
        clue: "Staff member who reads webtoons every morning",
        answer: "CHOI",
        row: 15,
        col: 13,
      },
      20: {
        clue: "Staff member who was in a YouTube production with his clones",
        answer: "JONES",
        row: 17,
        col: 1,
      },
      21: {
        clue: "Staff member whose maiden name is Yokoyama",
        answer: "MCCARTY",
        row: 17,
        col: 12,
      },
    },
    down: {
      1: {
        clue: "Staff member who worked as a bouncer at a nightclub for 10 years",
        answer: "BELSHE",
        row: 0,
        col: 19,
      },
      2: {
        clue: "Staff member who started working at MVHS since 1991 and is the longest serving faculty member",
        answer: "DERUITER",
        row: 0,
        col: 22,
      },
      5: {
        clue: "Staff member who has visited 22 countries so far",
        answer: "BONACORSI",
        row: 4,
        col: 10,
      },
      7: {
        clue: "Staff member who sings in a folk, rock and country band",
        answer: "SATTERTHWAITE",
        row: 5,
        col: 4,
      },
      9: {
        clue: "Staff member who has been a yoga instructor since 2016",
        answer: "NAVA",
        row: 6,
        col: 14,
      },
      10: {
        clue: "Staff member whose favorite sport is cross-country skiing",
        answer: "FINCK",
        row: 6,
        col: 18,
      },
      11: {
        clue: "Staff member who meditates for world peace every day",
        answer: "CHANG",
        row: 7,
        col: 12,
      },
      12: {
        clue: "Staff member whose last name means island peninsula in Japanese ",
        answer: "SHIMAZAKI",
        row: 7,
        col: 16,
      },
      13: {
        clue: "Staff member who spent their sophomore year of high school in Poland",
        answer: "GOULD",
        row: 9,
        col: 2,
      },
      15: {
        clue: "Staff member who loves listening to foreign music, their current favorite song being Est-ce que tu m'aimes by Maitre Gims",
        answer: "AUTRAN",
        row: 10,
        col: 8,
      },
      17: {
        clue: "Staff member who worked at a funeral home, as a paramedic and as a chauffeur",
        answer: "PELKEY",
        row: 12,
        col: 18,
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
