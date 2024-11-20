import { useState, useEffect } from "react";
import apis from "../Services/apis";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import "./RestaurentMenu.css";
import { CDN_URL } from "../utils/constants";


const RestaurentMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resItems, setResItems] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const res = await apis.restaurentMenu(resId);
      const menu = res?.data?.data?.cards[2]?.card?.card?.info;
      const items = res?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

      setResInfo(menu);
      setResItems(items);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage } = resInfo;

  return (
    <div className="restaurent-menu">
      <div className="restaurent-details">
        <h1>{name}</h1>
        <p>
          {cuisines.join(",")} - {costForTwoMessage}
        </p>
      </div>
      <h2>Recommended</h2>
      <div className="menu-container">
        {resItems?.itemCards?.map((item) => {
          const { id, name, price, description, imageId } = item.card.info;
          return (
            <div className="menu-card" key={id}>
              <div className="menu-content">
                <div className="menu-info">
                  <h3>{name}</h3>
                  <p className="price">₹ {price / 100}</p>
                  <p className="description">{description}</p>
                </div>
                <div className="menu-image">
                  <img src={CDN_URL + imageId} alt={name} />
                  <button className="add-button">ADD</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
