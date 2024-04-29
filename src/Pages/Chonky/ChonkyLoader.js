import React, { useEffect, useState } from "react";
import ChonkyBrowser from "./ChonkyBrowser";

import * as gh from "../../api/githublibrary.js";

const ChonkyLoader = () => {
  const [chonkyMap, setChonkyMap] = useState(undefined);

  const getChonkyMap = async () => {
    let result = await gh.fileRead("actions/config/chonky_map.json");
    if (result === undefined) return;

    let repoMap = JSON.parse(result);

    setChonkyMap(repoMap);
  };

  useEffect(() => {
    getChonkyMap();
  }, []);

  return <div>{chonkyMap && <ChonkyBrowser chonkyMap={chonkyMap} />}</div>;
};

export default ChonkyLoader;
