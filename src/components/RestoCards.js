import { CDN_URL } from "../Utils/Constants";


const RestoCards = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, } = resData?.info;
    console.log("props", props);
    console.log("URL", CDN_URL +
        props.resData.info.cloudinaryImageId)
    console.log(resData.info);
    return (
        <div className="p-4 m-4 w-[250px] border bg-gray-200 hover:bg-gray-300 shadow-md">
            <img className="res-logo" alt="res-image" src={
                CDN_URL +
                props.resData.info.cloudinaryImageId
            } />
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <h4 className="py-2">{cuisines.join(", ")}</h4>
            <h4 className="py-2">{costForTwo}</h4>
            <h4 className="py-2">{avgRating} Ratings</h4>
            <h4 className="py-2">{resData.info.sla?.deliveryTime} Minutes</h4>
        </div>
    )
}

//Higher Order Components takes Component as a input,add some features,
//returns the enhanced component.
//input --> restoCards --> restoCardPromoted

export const withPromotedLabel = (RestoCards) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <RestoCards {...props} />
            </div>
        )
    }
}


export default RestoCards;