import ResturentCards from "./RestaurentCard";
import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import apis from "../Services/apis";
import { Link } from "react-router-dom";
import "./bodyStyles.css"; // Import the styles
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [ListOfRestaurents, setListOfRestaurents] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [filterdRestaurents, setFilterdRestaurents] = useState([]);
    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await apis.restaurents();
            console.log(res);

            const cards = res?.data?.data?.cards;
            let fetchedRestaurants = [];

            cards.forEach((card) => {
                if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
                    fetchedRestaurants = card.card.card.gridElements.infoWithStyle.restaurants;
                }
            });

            setListOfRestaurents(fetchedRestaurants);
            setFilterdRestaurents(fetchedRestaurants);
        } catch (error) {
            console.error("Error in fetching data:", error);
        }
    };

    if (onlineStatus == false) return <h1>Please check your internet connection!!!</h1>

    const filterTopRated = () => {
        const topRestaurents = ListOfRestaurents.filter(
            (res) => res.info?.avgRating > 4
        );
        setFilterdRestaurents(topRestaurents);
    };

    const searchRestaurants = () => {
        const searchedRestaurents = ListOfRestaurents.filter((restaurant) =>
            restaurant.info?.name.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilterdRestaurents(searchedRestaurents);
    };

    return (
        <div className="body">
            <div className="res-btn">
                <button onClick={filterTopRated}>
                    Top Rated Restaurants
                </button>

                <div className="search-container">
                    <input
                        type="text"
                        value={searchTxt}
                        onChange={(e) => setSearchTxt(e.target.value)}
                        placeholder="Search restaurants"
                    />
                    <button onClick={searchRestaurants}>Search</button>
                </div>
            </div>

            <div className="res-container">
                {Array.isArray(filterdRestaurents) && filterdRestaurents.length > 0 ? (
                    filterdRestaurents.map((restaurant) =>
                        restaurant.info?.id ? (
                            <Link
                                key={restaurant.info.id}
                                to={"/restaurents/" + restaurant.info.id}
                                style={{ textDecoration: "none" }}
                            >
                                <ResturentCards resData={restaurant} />
                            </Link>
                        ) : null
                    )
                ) : (
                    <ShimmerUi />
                )}
            </div>
        </div>
    );
};

export default Body;
