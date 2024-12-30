import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {

    const expandAccordion = () => {
        setShowIndex(prevIndex => (prevIndex === showItem ? null : showItem));       //lifting state up
    }

    return <div className="w-6/12 mx-auto my-4 shadow-lg p-4 cursor-pointer ">
        {/* {Accordion Header} */}
        <div className="flex justify-between" onClick={expandAccordion} >
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span className="text-right">🔽</span>
        </div>

        {/* {Accordion Body} */}
        {showItem && <ItemList items={data.itemCards} />}
    </div>
}
export default RestaurantCategory;