import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData.js";
import { useState } from "react";

// State Variable - Super powerful variable maiantains state of component




//Normal JS Variable
// let restaurantList = [];

const Body = () => {
    let [restaurantList, setListOfRestaurants] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = restaurantList.filter((res) => res.data.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top rated Restaurants
                </button>

            </div>
            <div className="res-container">
                {

                    restaurantList.map((restaurant) => (<Restaurantcard key={restaurant.data.id} resData={restaurant} />))

                }
            </div>

        </div>
    );
};

export default Body;