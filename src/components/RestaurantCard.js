import {CDN_URL} from "../utils/constants.js";


const Restaurantcard = (props) => {
    const { resData } = props;

    console.log(resData);
    if (!resData?.data) return null;

    const { cloudinaryImageId, name, cuisines, costForTwoString, deliveryTime, avgRating } = resData.data;

    return (
        <div className="res-card" style={{ backgroundColor: "rgb(228, 228, 228)" }}>
            <img className="res-logo"
                alt="restaurant-logo"
                src={CDN_URL +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>Cost For Two: {costForTwoString}</h4>
            <h4>Delivery ETA:{deliveryTime}</h4>
            <h4>Avg rating: {avgRating} ⭐</h4>
        </div>
    )
}


export default Restaurantcard;