import { CDN_URL } from "../utils/constants";

const ResturentCards = (props) => {
    const { resData } = props
    const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } = resData?.info;
    // const {deliveryTime}=resData?.info?.sla;
    // console.log("resData:",resData)
    return (
        <div className='res-card'>
            <img className='res-logo-card' src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating} Star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    )
}
export default ResturentCards;