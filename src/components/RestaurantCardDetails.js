import { useEffect, useState } from "react";
import Shimmer from "./common/Shimmer";
import { useParams } from "react-router";
import { RES_MENU_URL } from "../utils/constants";


const RestaurantCardDetails = () => {

    const [resInfo, setResInfo]= useState(null);

    const {resId} = useParams();

    useEffect(()=>{
        fetchData();
    },[])

    fetchData = async () => {
        const data = await fetch(RES_MENU_URL + resId);

        const json = await data.json();

        // console.log("Res Data",json.data.cards[2].card.card.info);
        console.log("Res Data",json.data);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, locality, avgRating, costForTwoMessage, cuisines} =resInfo?.cards[2]?.card?.card?.info;
    // const {itemsCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log("itemsCards",itemCards);


    return(
        <div className="about-page-container" style={{width: "45%", margin: "0 auto" }}>
            <h2>{name}</h2>
            <h5>{locality}</h5>
            <h5>⭐{avgRating} &nbsp; {costForTwoMessage}</h5>
            <h5>{cuisines.join(", " )}</h5>
            <h4>Recommended </h4>
            <ol>
                {
                    itemCards.map(item=> 
                    <li key={item.card.info.id} style={{fontSize: "14px", marginBottom: "8px"}}>
                        {item.card.info.name}: <b>Rs. {item.card.info.price/ 100 || item.card.info.defaultPrice/ 100} </b>
                    </li>
                    )
                }
            </ol>
        </div>
    )
}

export default RestaurantCardDetails;