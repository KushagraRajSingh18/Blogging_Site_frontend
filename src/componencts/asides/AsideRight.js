import React from "react";

import Card from "../UI/Card";
import HomeRightAside from "./right/HomeRightAside";

const AsideRight = () => {
  return (
    <div className="w-72">
      <Card bg="white" padding="0">
        <HomeRightAside topic="listings" expand="See all" />
      </Card>
      <Card bg="white" padding="0">
        <HomeRightAside topic="#discuss" />
      </Card>
    </div>
  );
};

export default AsideRight;
