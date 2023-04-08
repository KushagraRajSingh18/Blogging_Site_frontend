import React from "react";

const Card = (props) => {
  console.log(props.bg);
  return (
    <div className={`bg-${props.bg} rounded-md p-${props.padding}  mb-2 pb-8`}>
      {props.children}
    </div>
  );
};

export default Card;
