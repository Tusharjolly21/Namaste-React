import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4585649&lng=78.3493763&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER#"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <h1>Loading...</h1>;
  }
  const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  console.log(itemCards);

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <div className="res-rating">
        <p>
          {avgRating}- {totalRatingsString}
        </p>
        <p>{costForTwoMessage}</p>
      </div>
      <p className="res-cuisines">{cuisines.join(", ")}</p>
      <p>
        {resInfo?.cards[2]?.card?.card?.info.sla.minDeliveryTime}-
        {resInfo?.cards[2]?.card?.card?.info.sla.maxDeliveryTime} mins
      </p>
      <div>
        <h1>Recommended</h1>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
