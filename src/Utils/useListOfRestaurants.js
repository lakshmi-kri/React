import { useState, useEffect } from "react";
import { LIST_OF_RESTAURANT_URL } from "./Constants";

const useListOfRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(LIST_OF_RESTAURANT_URL);
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);

    };
    return listOfRestaurants;
}
export default useListOfRestaurants;