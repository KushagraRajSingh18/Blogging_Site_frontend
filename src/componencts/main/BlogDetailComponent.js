import React from "react";
import Card from "../UI/wrapper/Card";

const BlogDetailComponent = (props) => {
  return (
    <Card bg="white" padding="0">
      <div>
        <div>
          <img
            className="rounded-t-lg"
            src="/assets/zkizqlzpey84ct4rbhw9.webp"
          />
        </div>

        {/* For Autor detials */}
        <div className="m-4 mt-6 flex">
          <div className="mr-2 h-10 w-10">
            <img src="/assets/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.webp" />
          </div>
          <div className="flex flex-col h-10 mt-[-6px]">
            <h2 className="text-gray-800 font-semibold">{props.data.author}</h2>
            <p className="text-gray-600">{props.data.date}</p>
          </div>
        </div>

        {/* Content of blog */}
        <div className="w-[80%] m-auto">
          {/* Heading of Blog */}
          <div className="w-full">
            <h1 className="text-gray-800 text-3xl font-bold">
              {props.data.heading}
            </h1>
          </div>
          {/* tags */}
          <div className="flex justify-between pr-40 mt-4">
            <p className="cursor-pointer">
              <span>#</span>meta
            </p>
            <p className="cursor-pointer">
              <span className="text-orange-500">#</span>community
            </p>
            <p className="cursor-pointer">
              <span className="text-blue-500">#</span>moderation
            </p>
            <p className="cursor-pointer">
              <span className="text-pink-500">#</span>learning
            </p>
          </div>

          {/* Blog decription content */}
          <div className="mt-4 text-gray-800">{props.data.description}</div>
        </div>
      </div>
    </Card>
  );
};

export default BlogDetailComponent;
