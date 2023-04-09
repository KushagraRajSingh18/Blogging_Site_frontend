import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import LeftReactions from "../componencts/asides/left/LeftReactions";
import Main from "../componencts/main/Main";
import UserDetail from "../componencts/asides/right/UserDetail";

const BlogDetail = () => {
  const params = useParams();

  const dataItem = data.find((item) => item.id === params.id);

  return (
    <>
      <div className="w-[85%] m-auto mt-4">
        <div className="flex">
          <div className="ml-10 mt-10">
            <LeftReactions />
          </div>
          <div className="ml-16">
            <Main />
          </div>
          <div className="ml-4">
            <UserDetail author={dataItem.author} description="Noob Coder" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
