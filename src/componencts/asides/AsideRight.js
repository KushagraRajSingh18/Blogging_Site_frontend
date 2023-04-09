import React from "react";

import Card from "../UI/Card";
import NewUser from "./left/NewUser";
import ListingRightAside from "./right/ListingRightAside";

const AsideRight = () => {
  return (
    <div className="w-72">
      <Card bg="white" padding="0">
        <ListingRightAside />
      </Card>
      <Card bg="white" padding="4">
        <NewUser />
      </Card>
    </div>
  );
};

export default AsideRight;
