import { CDN_URL } from "../utils/constants.js";


//Card component
// Props: It is like just arguments to a function
// Here Props comes as object as shown in console
// Destructuring props: const Card = (resName, cuisine) => {}
    //or
// const  {resName, cuisine} = props;

const RestaurantCard = (props) => {
    // console.log(props);
    //Destructuring props
    const { resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

    return (
        <div className="card-wrapper">
            <div className="card-image-wrapper">
                <img alt="restaurant-img" src={CDN_URL + cloudinaryImageId}/>
            </div>
            <div className="card-data-wrapper">
                <div className="name">{name}</div>
                <div className="rating">{avgRating} stars</div>
                <div className="rating">{costForTwo}</div>
                <div className="time">{sla?.slaString}</div>
                <div className="details">{cuisines.join(", ")}</div>
            </div>
        </div>
    )
}

// Example- Higher Order Function (component)

//Not using-  Swiggy API
// export const withDiscoutLabel= (RestaurantCard)=> {
//     return (props)=> {
//         const { resData} = props;
//         const{aggregatedDiscountInfoV3} = resData?.info;
//         return (
//             <>
//              <div className="absolute bg-amber-50">{aggregatedDiscountInfoV3?.discountTag} {aggregatedDiscountInfoV3?.header}</div>
//              <RestaurantCard {...props}/>
//             </>

//         )
//     }
// }

export const withVegLabel= (RestaurantCard)=> {
    //Functional component
return (props) => {
    const { resData} = props;
    // const{ veg }=resData?.info
    return  (
        <div>
            <label className=" absolute text-amber-50 bg-emerald-700 text-bold rounded-lg  p-1 pl-6 pr-6 ">Veg</label>
            <RestaurantCard {...props}/>
        </div>
    )
}
}

export default RestaurantCard;
