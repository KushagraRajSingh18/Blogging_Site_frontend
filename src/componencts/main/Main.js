import React from "react";

import FirstPost from "./FirstPost";
import data from "../../utils/data";

const Main = () => {
  return (
    <>
      <FirstPost />
      {data.map((item) => {})}
    </>
  );
};

export default Main;
