import React from "react";
import { Link } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { AiFillFire } from "react-icons/ai";
import { BsFillEmojiLaughingFill, BsBookmark } from "react-icons/bs";
import { BiComment } from "react-icons/bi";

import Card from "../UI/Card";

const FirstPost = () => {
  return (
    <Card bg="white" colSpan="2">
      <div className="mb-8">
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
            <h2 className="text-gray-800 font-semibold">Author Name</h2>
            <p className="text-gray-600">Date</p>
          </div>
        </div>

        {/* Content of blog */}
        <div className="w-[80%] m-auto">
          {/* Heading of Blog */}
          <div className="w-full">
            <h1 className="text-gray-800 text-3xl font-bold">
              This is the Heading for this blog first.
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

          {/* Reactions */}
          <div className="mt-1 flex justify-between">
            <div className="flex">
              <div className=" flex px-2 py-1 hover:bg-gray-200 rounded-md ease-in duration-150">
                <div className="flex mt-1 mr-3">
                  <FcLike />
                  <AiFillFire className="text-orange-500" />
                  <BsFillEmojiLaughingFill className="text-[#ffcb4c]" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">78 reactions</p>
                </div>
              </div>
              <div className="ml-8 flex mt-1">
                <BiComment className="mt-1" />
                <p className="text-sm text-gray-700">19 comments</p>
              </div>
            </div>
            <div className="flex">
              <p className="mr-2 text-sm text-gray-600">2min read</p>
              <BsBookmark className="mt-1 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FirstPost;
