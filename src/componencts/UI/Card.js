import React from "react";

const Card = (props) => {
  console.log(props.bg);
  return (
    <div className={`bg-${props.bg} rounded-md col-span-${props.colSpan} p-4`}>
      {props.children}
    </div>
  );
};

export default Card;
