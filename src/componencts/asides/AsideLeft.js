import React from "react";

import ButtonPrimary from "../UI/button/ButtonPrimary";

const AsideLeft = () => {
  return (
    <>
      <h2 className="text-gray-900 font-bold text-xl leading-7">
        The Creative Pen Community is a community of amazing chitkara devs,
        artist and people like you.
      </h2>
      <p className="text-gray-500 my-2 leading-6">
        We're a place where students share, stay up-to-date and live in harmoney
      </p>
      <div className="text-center mt-6">
        <ButtonPrimary>Create account</ButtonPrimary>
      </div>
    </>
  );
};

export default AsideLeft;
