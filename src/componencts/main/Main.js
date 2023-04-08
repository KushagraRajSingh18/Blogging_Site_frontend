import React from "react";

import FirstPost from "./FirstPost";
import Blog from "./Blog";
import { data } from "../../utils/data";

const Main = () => {
  return (
    <>
      <FirstPost />
      {data.map((item) => {
        return (
          <Blog
            author={item.author}
            date={item.date}
            title={item.title}
            reactions={item.reactions}
            comments={item.comments}
            readTime={item.readTime}
          />
        );
      })}
    </>
  );
};

export default Main;
