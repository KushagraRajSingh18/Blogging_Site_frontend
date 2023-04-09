import React from "react";

const CardHeadColor = (props) => {
  return (
    <div className={`bg-${props.bg} rounded-md mb-2 pb-4 px-${props.padding}`}>
      <div className="h-[20px] bg-gray-800"></div>
      <div>{props.children}</div>
    </div>
  );
};

export default CardHeadColor;
