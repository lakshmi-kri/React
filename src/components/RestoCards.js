import { CDN_URL } from "../Utils/Constants";

const RestoCards = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, } = resData?.info;
    console.log(props)
    return (
        <div className="res-cards">
            <img className="res-logo" alt="res-image" src={
                CDN_URL +
                props.resData.info.cloudinaryImageId
            } />
            {/* <img className="res-logo" src={resData.data.cloudinaryImageId} /> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} Ratings</h4>
            <h4>{resData.info.sla?.deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestoCards;