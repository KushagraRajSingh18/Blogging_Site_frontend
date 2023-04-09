import React from "react";
import { Link } from "react-router-dom";

import Card from "../../UI/Card";
import ListingRightAsideItem from "./ListingRightAsideItem";

const ListingRightAside = () => {
  const title =
    "Guia completo de data preparation com WoE e categorização de variáveis numéricas: benefícios e desafios";
  const tag = "products";

  return (
    <div className="">
      <div className="flex justify-between p-4">
        <h2 className="text-xl text-gray-800 font-bold mt-[-5px]">Listings</h2>
        <Link to={"/listings"}>
          <p className="text-blue-500 font-bold text-sm">See all</p>
        </Link>
      </div>
      <ListingRightAsideItem title={title} tag={tag} />
      <ListingRightAsideItem title={title} tag={tag} />
      <ListingRightAsideItem title={title} tag={tag} />
      <ListingRightAsideItem title={title} tag={tag} />
    </div>
  );
};

export default ListingRightAside;
