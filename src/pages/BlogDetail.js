import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../utils/data";
import LeftReactions from "../componencts/asides/left/LeftReactions";
import UserDetail from "../componencts/asides/right/UserDetail";
import BlogDetailComponent from "../componencts/main/BlogDetailComponent";

const BlogDetail = () => {
  const params = useParams();

  const dataItem = data.find((item) => item.id === params.id);
  console.log(dataItem);

  return (
    <>
      <div className="w-[85%] m-auto mt-4">
        <div className="flex">
          <div className="ml-10 mt-10">
            <LeftReactions />
          </div>
          <div className="ml-16">
            <BlogDetailComponent data={dataItem} />
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
