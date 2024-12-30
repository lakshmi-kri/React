import { CDN_URL } from "../Utils/Constants"

const ItemList = ({ items }) => {
    console.log('items', items)
    return (
        <div>
            {items.map(
                (item) => (
                    <div key={item?.card?.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2">
                                <span className="font-medium">{item?.card?.info?.name} </span>
                                <span>  ₹{item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100} </span>
                            </div>
                            <div className="text-xs">
                                <p>{item?.card?.info?.description}</p>
                            </div>
                        </div>
                        <div className="w-3/12 p-4">
                            <div className="absolute">
                                <button className="p-2 bg-black text-white shadow-lg mx-16 rounded-lg">Add +</button>
                            </div>
                            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
                        </div>


                    </div>
                )
            )}
        </div>
    )
}
export default ItemList;