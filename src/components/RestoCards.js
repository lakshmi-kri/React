import { CDN_URL } from "../Utils/Constants";


const RestoCards = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, } = resData?.info;
    console.log(props)

    return (
        <div className="p-4 m-4 w-[250px] border bg-gray-200 hover:bg-gray-300 shadow-md">
            {/* <img className="res-logo" alt="res-image" src={
                CDN_URL +
                props.resData.info.cloudinaryImageId
            } /> */}
            <img className="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmr6yv899mQZ4PLJ7XOvwVXXqG_Pnhf_oKg&s" />
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <h4 className="py-2">{cuisines.join(", ")}</h4>
            <h4 className="py-2">{costForTwo}</h4>
            <h4 className="py-2">{avgRating} Ratings</h4>
            <h4 className="py-2">{resData.info.sla?.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestoCards;