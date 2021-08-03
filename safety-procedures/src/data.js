import { csv } from "d3-fetch";
import location from "./location.json";
import schoolLocations from "./schoolLocations.json";

export const fetchSchoolLocations = async () => {
  return schoolLocations;
};

export const fetchCasesPerCity = async () => {
  try {
    const casesPerCity = await csv(
      "https://data.sccgov.org/resource/j2gj-bg6c.csv"
    );
    console.log(casesPerCity);
    const output = [];
    if (casesPerCity && casesPerCity.length) {
      casesPerCity.map((city) => {
        if (city["zipcode"] && location[city["zipcode"]]) {
          output.push({
            ...location[city["zipcode"]],
            cases: parseInt(city["cases"]),
            population: parseInt(city["population"]),
            rate: parseInt(city["rate"]),
            zipcode: parseInt(city["zipcode"]),
          });
        }
      });
      console.log(output);
      return output;
    }
    return [];
  } catch (e) {
    console.log("error:", JSON.stringify(e));
  }
};
