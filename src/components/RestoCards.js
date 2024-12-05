const RestoCards = (props) => {
    const { resData } = props;
    const { name, cuisines, costForTwo, avgRating, deliveryTime } = resData?.data;
    console.log(props)
    return (
        <div className="res-cards">
            {/* <img className="res-logo" alt="res-image" src={
                CDN_CDN_URL +
                props.resData.data.cloudinaryImageId
            } /> */}
            <img className="res-logo" src={resData.data.cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rs {costForTwo / 100} for Two</h4>
            <h4>{avgRating} Ratings</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

export default RestoCards;