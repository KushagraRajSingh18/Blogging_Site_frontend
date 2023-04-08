import React from "react";

const Blog = (props) => {
  return (
    <Card bg="white" colSpan="2">
      <div className="mb-8">
        {/* For Autor detials */}
        <div className="m-4 mt-6 flex">
          <div className="mr-2 h-10 w-10">
            <img src="/assets/0213bbaa-d5a1-4d25-9e7a-10c30b455af0.webp" />
          </div>
          <div className="flex flex-col h-10 mt-[-6px]">
            <h2 className="text-gray-800 font-semibold">{props.author}</h2>
            <p className="text-gray-600">{props.date}</p>
          </div>
        </div>

        {/* Content of blog */}
        <div className="w-[80%] m-auto">
          {/* Heading of Blog */}
          <div className="w-full">
            <h1 className="text-gray-800 text-3xl font-bold">{props.title}</h1>
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
                  <p className="text-sm text-gray-700">
                    {props.reactions} reactions
                  </p>
                </div>
              </div>
              <div className="ml-8 flex mt-1">
                <BiComment className="mt-1" />
                <p className="text-sm text-gray-700">
                  {props.comments} comments
                </p>
              </div>
            </div>
            <div className="flex">
              <p className="mr-2 text-sm text-gray-600">
                {props.readTime}min read
              </p>
              <BsBookmark className="mt-1 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Blog;
