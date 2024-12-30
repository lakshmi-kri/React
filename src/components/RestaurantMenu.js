import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const { resId } = useParams();
    console.log(resId);
    const resData = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    console.log(resData);
    if (resData === null) {
        return <Shimmer />;
    }

    console.log('resData', resData);
    const { name, costForTwoMessage, cuisines } = resData?.cards[2]?.card?.card?.info;
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('itemCards', itemCards);

    const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}-{costForTwoMessage}</p>
            {/* {Categories Accordions} */}
            {categories.map(
                (category, index) => <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItem={index === showIndex && true}
                    setShowIndex={() => { setShowIndex(prevIndex => (prevIndex === index ? null : index)) }} /> //passing State Variable to Controlled Component
            )}
        </div>

    )
}
export default RestaurantMenu;
