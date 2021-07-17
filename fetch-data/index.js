// import { csv } from "d3-fetch";
// import fs from "fs";

const request = require("d3-fetch");
const fs = require("fs");

const storeData = (data, path) => {
  try {
    fs.writeFileSync(path, JSON.stringify(data));
  } catch (err) {
    console.error(err);
  }
};

const fetchData = async (url, path) => {
  try {
    const data = await csv(url);
    console.log(data);
    storeData(data, path);
  } catch (e) {
    console.log(e);
  }
};

const DATA_URL = "https://data.sccgov.org/resource/j2gj-bg6c.csv";
const FILE_PATH = "./data.json";

fetchData(DATA_URL, FILE_PATH);
