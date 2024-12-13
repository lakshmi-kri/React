import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/Constants";


const RestaurantMenu = () => {
    const [resData, setResData] = useState(null);

    const { resId } = useParams();
    console.log(resId);


    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        console.log(json);
        setResData(json.data);
    }

    if (resData === null) {
        return <Shimmer />;
    }

    const { name, costForTwoMessage, cuisines } = resData?.cards[2]?.card?.card?.info;
    const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.name}>{item.card.info.name}:-{"Rs"} {item.card.info.price / 100}</li>
                ))}
            </ul>
        </div>

    )
}
export default RestaurantMenu;
