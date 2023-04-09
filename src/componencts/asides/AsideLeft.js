import React from "react";

import Card from "../UI/Card";
import NewUser from "./left/NewUser";
import LeftNavigation from "./left/LeftNavigation";

const AsideLeft = () => {
  return (
    <div className="w-64">
      <Card bg="white" padding="4">
        <NewUser />
      </Card>

      {/* Navigation LINKS */}
      <div>
        <LeftNavigation />
      </div>
    </div>
  );
};

export default AsideLeft;
