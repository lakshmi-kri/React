import RestoCards from "./RestoCards";
import resList from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import useListOfRestaurants from "../Utils/useListOfRestaurants";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState();
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //checking online status
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<h1>Please Check Your Internet Connection!</h1>)
    }

    // Ternary operator
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter p-4 m-4 flex">
                <div className="search-bar px-5">
                    <input type="text"
                        className="w-80 h-9 border border-current rounded"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }} />
                    <button type="button" className="p-2 m-3 bg-green-100 rounded-sm"
                        onClick={() => {
                            const filteredlist = listOfRestaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredlist);
                            console.log(searchText)
                        }}>Search
                    </button>
                </div>
                <button className="p-2 m-3 bg-green-100 rounded-sm" onClick={
                    () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.info.avgRating > 4.2)
                        )
                        setFilteredRestaurants(filteredList)
                    }
                }>Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestoCards resData={restaurant} /></Link>))
                }
            </div>
        </div>
    )
}

export default Body;