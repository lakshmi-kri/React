import RestoCards from "./RestoCards";
import resList from "../Utils/mockData";
import { useState } from "react";


const Body = () => {
    //local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={
                    () => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => (res.data.avgRating > 3)
                        )
                        setListOfRestaurants(filteredList)
                    }
                }>
                    Top Rated Restaurants</button>
            </div>
            <div className="Res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestoCards key={restaurant.data.id} resData={restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;